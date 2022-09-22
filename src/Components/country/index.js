import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";




function Country(props) {
  // ** states
  const [numberOne, setNumberOne] = useState(3);
  const [numberTwo, setNumberTwo] = useState(4);

  // ** hooks
  const store = useSelector((state) => state.country);

  function reverse() {
    setNumberOne(numberTwo);
    setNumberTwo(numberOne);
  }
  return (
    <React.Fragment>
      <div className="form">
        <Link style={{ textDecoration: "none" }} to="/select-country">
          {" "}
          Selected Countries : {store?.country}{" "}
        </Link>
      </div>
      <div>
        <button onClick={() => reverse()}>{numberOne}</button>
        <button onClick={reverse}>{numberTwo}</button>
      </div>
    </React.Fragment>
  );
}

export default Country
