import { useEffect, useState } from "react";

export default function ExampleCreate() {
  const axios = require("axios").default;

  useEffect(() => {
    async function postData() {
      axios({
        method: "post",
        url: `http://belajar.iamfraintdz.xyz/api/example`,
        data: {
          field1: "test axios anjay",
          field2: 177013,
          field3: false,
        },
      });
    }
    postData();
  }, []);

  return (
    <>
      <h1>Create</h1>
    </>
  );
}
