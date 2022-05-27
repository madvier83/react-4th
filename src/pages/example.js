import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Example() {
  const [data, setData] = useState();
  const [update, setUpdate] = useState();
  const [loading, setLoading] = useState("true");

  const axios = require("axios").default;

  // AXIOS
  useEffect(() => {
    async function getAll() {
      try {
        const response = await axios.get(
          `http://belajar.iamfraintdz.xyz/api/example`
        );
        setLoading("false");
        setData(response.data);
        console.log(response);
      } catch (error) {
        setLoading("fail");
        return error;
      }
    }
    getAll();
  }, [update]);

  // useEffect(
  async function exampleDelete(id) {
    await axios.delete(`http://belajar.iamfraintdz.xyz/api/example/${id}`);
    await setUpdate(id);
  }

  // FETCH
  // useEffect(() => {
  //   async function getAll() {
  //     const request = await fetch(
  //       `http://belajar.iamfraintdz.xyz/api/example`
  //     ).catch(() => {
  //       setLoading("fail");
  //     });
  //     const response = await request.json();

  //     setLoading("false");
  //     setData(response);
  //     console.log(response);
  //   }
  //   getAll();
  // }, []);

  return (
    <>
      <h1>Example</h1>
      <Link to="/exampleCreate" className="link-create">
        Create Data
      </Link>
      {loading === "true" && <small>Fetching data . . .</small>}
      {loading === "fail" && <small>Fetch data failed</small>}
      {loading === "false" &&
        data.map(function (data) {
          return (
            <li key={data._id}>
              <small>{data.field1}</small>
              <small>
                <Link to={`/example/${data._id}`} className="link-detail">
                  detail...
                </Link>
                <Link to={`/exampleUpdate/${data._id}`} className="link-update">
                  Update
                </Link>
                <button
                  onClick={() => {
                    exampleDelete(data._id);
                  }}
                  className="link-delete"
                >
                  Delete
                </button>
              </small>
            </li>
          );
        })}
    </>
  );
}
