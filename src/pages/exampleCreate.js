import { useEffect, useState } from "react";

export default function ExampleCreate() {
  const axios = require("axios").default;
  const [loading, setLoading] = useState();

  const [field1, setField1] = useState("");
  const [field2, setField2] = useState(0);
  const [field3, setField3] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `http://belajar.iamfraintdz.xyz/api/example`,
      data: {
        field1: field1,
        field2: field2,
        field3: field3,
      },
    });
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
        <button type="submit" className="link-create">
          Create
        </button>
      </form>
    </>
  );
}
