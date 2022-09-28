import React from "react";
import { useParams } from "react-router-dom";
import { text } from "./text";
const InfoPage = () => {
  const { info } = useParams();
  let headline = info.replace(/-/g, " "); // Replacing all dashes with white space
  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        <h1 style={{ textTransform: "uppercase" }}>{headline}</h1>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default InfoPage;
