import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function ExampleCreate() {
  const axios = require("axios").default;
  const [loading, setLoading] = useState();
  const [isPending, setIsPending] = useState(false);

  const [field1, setField1] = useState("");
  const [field2, setField2] = useState(0);
  const [field3, setField3] = useState(true);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    setIsPending(true);
    e.preventDefault();
    await axios({
      method: "post",
      url: `http://belajar.iamfraintdz.xyz/api/example`,
      data: {
        field1: field1,
        field2: field2,
        field3: field3,
      },
    })
      .then(() => {
        console.log("Data saved");
        // setIsPending(false);
        navigate("/example");
      })
      .catch();
  };

  return (
    <>
      <h2>Create</h2>

      <form onSubmit={onSubmit} className="create-form">
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
          }}
        />
        <label>Field 3</label>
        <br />
        <select
          value={field3}
          onChange={(e) => {
            setField3(e.target.value);
            console.log(field3);
          }}
        >
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        <br />
        {!isPending && (
          <button type="submit" className="link-create">
            Create
          </button>
        )}
        {isPending && (
          <button disabled className="link-create">
            Saving data
          </button>
        )}
      </form>
    </>
  );
}
