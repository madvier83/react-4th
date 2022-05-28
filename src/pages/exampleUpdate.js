import { useEffect, useState } from "react";
import { useParams, Redirect, useNavigate } from "react-router-dom";

export default function ExampleUpdate() {
  const Params = useParams();
  const [loading, setLoading] = useState("true");
  const [isPending, setIsPending] = useState(false);

  const [field1, setField1] = useState();
  const [field2, setField2] = useState();
  const [field3, setField3] = useState();

  const navigate = useNavigate();

  const axios = require("axios").default;

  useEffect(() => {
    async function getOneData() {
      try {
        const response = await axios.get(
          `http://belajar.iamfraintdz.xyz/api/example/${Params._id}`
        );
        setLoading("false");
        setField1(response.data.field1);
        setField2(response.data.field2);
        setField3(response.data.field3);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        setLoading("fail");
      }
    }
    getOneData();
  }, [Params]);

  const updateData = async (e) => {
    setIsPending(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `http://belajar.iamfraintdz.xyz/api/example/${Params._id}`,
      data: {
        field1: field1,
        field2: field2,
        field3: field3,
      },
    })
      .then(() => {
        console.log("Data Updated");
        // setIsPending(false);
        navigate("/example");
      })
      .catch();
  };

  return (
    <>
      <h2>Update</h2>
      {loading === "fail" && <small>Fetching data failed</small>}
      {loading === "true" && <small>Fetching data . . .</small>}
      {loading === "false" && (
        <form onSubmit={updateData} className="create-form">
          <label>Field 1</label>
          <input
            type="text"
            required
            value={field1}
            onChange={(e) => {
              setField1(e.target.value);
            }}
          />
          <label>Field 2</label>
          <input
            type="number"
            required
            value={field2}
            onChange={(e) => {
              setField2(e.target.value);
              console.log(field2);
            }}
          />
          <label>Field 3</label>
          <br />
          <select
            value={field3}
            onChange={(e) => {
              setField3(e.target.value);
            }}
          >
            <option value={() => true}>True</option>
            <option value={() => false}>False</option>
          </select>
          <br />
          {!isPending && (
            <button type="sumbit" className="link-update">
              Update
            </button>
          )}
          {isPending && (
            <button disabled className="link-update">
              Updating data ...
            </button>
          )}
        </form>
      )}
    </>
  );
}
