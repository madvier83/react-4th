import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Example() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    async function getAll() {
      const request = await fetch(
        `http://belajar.iamfraintdz.xyz/api/example`
      ).catch(() => {
        setLoading("fail");
      });
      const response = await request.json();

      setLoading("false");
      setData(response);
      console.log(response);
    }
    getAll();
  }, []);

  return (
    <>
      <h1>Example</h1>
      {loading === "true" && (
        <>
          <small>Fetching data . . .</small>
        </>
      )}
      {loading === "false" &&
        data.map(function (data) {
          return (
            <>
              <li key={data.field}>
                <small>{data.field1}</small> |
                <small>
                  <Link to={`/example/${data._id}`} className="link-default">
                    detail...
                  </Link>
                </small>
              </li>
            </>
          );
        })}
      {loading === "fail" && (
        <>
          <small>Fetch data failed</small>
        </>
      )}
    </>
  );
}
