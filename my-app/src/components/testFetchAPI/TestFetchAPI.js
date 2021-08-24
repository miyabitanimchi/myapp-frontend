import React, { useEffect } from "react";

const TestFetchAPI = () => {
  const fetchAPI = async () => {
    try {
      const res = await fetch("http://localhost:5000");

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return <h1>hello</h1>;
};

export default TestFetchAPI;
