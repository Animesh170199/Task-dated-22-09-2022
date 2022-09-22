import React, { useState } from "react";

function Render({setFlag ,flag}) {
  const array = ["India", "newYork", "srilanka", "westIndies"];
  const [country, SetCountry] = useState(array);
  return (
    <div>
      <label onClick={()=>setFlag(!flag)}  >Countries</label>
      <ul>
        {array?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Render;
