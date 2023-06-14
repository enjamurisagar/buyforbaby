import React from "react";
import "./Spinner.css";

//spinner
import { Circles } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="spinner-main">
      <div className="spinner-container">
        <Circles
          height="80"
          width="80"
          color="lightblue"
          ariaLabel="circles-loading"
        />
      </div>
    </div>
  );
};

export default Spinner;
