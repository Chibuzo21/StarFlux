import React from "react";
import StarLoader from "../../../components/loader/loader";

const Loadingpage = () => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StarLoader />

      <p style={{ fontSize: "24px", color: "#fff", fontWeight: "bold" }}>
        Checking Star Volume ....{" "}
      </p>
    </div>
  );
};
export default Loadingpage;
