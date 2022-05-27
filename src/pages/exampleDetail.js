import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ExampleDetail() {
  const Params = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const axios = require("axios").default;

  // AXIOS
  useEffect(() => {
    async function getOneData() {
      try {
        const response = await axios.get(
          `http://belajar.iamfraintdz.xyz/api/example/${Params._id}`
        );
        setLoading(false);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getOneData();
  }, [Params]);

  // useEffect(() => {
  //   async function getOneData() {
  //     const request = await fetch(
  //       `http://belajar.iamfraintdz.xyz/api/example/${Params._id}`
  //     );
  //     const response = await request.json();

  //     setLoading(false);
  //     setData(response);
  //     console.log(response);
  //   }
  //   getOneData();
  // }, [Params]);
  // useEffect(() => {}, [Params]);

  return (
    <>
      <h2>Detail</h2>
      {loading && (
        <small>
          <br />
          Fetching data . . .
        </small>
      )}
      {!loading && (
        <div>
          <p>field1 : {data.field1}</p>
          <small>field2 : {data.field2}</small>
          {data.field3 == true ? (
            <div className="true-box">true</div>
          ) : (
            <div className="false-box">false</div>
          )}
          <br />
          <Link to={"/example"} className="link-detail">
            Back
          </Link>
        </div>
      )}
    </>
  );
}
