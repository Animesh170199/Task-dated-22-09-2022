import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCountry } from "../../store/Country";

function Render() {
  const array = ["India", "newYork", "srilanka", "westIndies"];
  // ** hooks
  const dispatch = useDispatch();
  const store = useSelector((state) => state.country);
  const navigate=useNavigate()

  const handleChange = (e) => {
    let value = e.target.value;
    dispatch(selectCountry(value));
    navigate("/")
  };

  return (
    <div>
      <label>Countries</label>
      <select value={store.country} onChange={handleChange}>
        <option value="">Select Option</option>
        {array?.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}
export default Render;
