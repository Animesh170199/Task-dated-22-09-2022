import React, { useState } from "react";
import Render from "../render";

function Country() {
  const [number, setNumber] = useState(4);
  const [number1, setNumber1] = useState(3);
  const [flag, setFlag] = useState(false);

  function handleSubmit() {
    setFlag(true);
  }
  function reverse() {

    if(number === 3){
      setNumber(4)
    }else{
      setNumber(3)

    }
    if(number1 === 3){
      setNumber1(4)
    }else{
      setNumber1(3)
    }


  }
  return (
    <>
      {flag ? (
        <Render setFlag={setFlag} flag={flag}  />
      ) : (
        <React.Fragment>
          <div className="form">
            <button onClick={handleSubmit}> Select Countries </button>
          </div>
          <div>
            <button onClick={() => reverse()}>{number}</button>
            <button onClick={reverse}>{number1}</button>
          </div>
        </React.Fragment>
      )}
    </>
  );
}

export default Country;
