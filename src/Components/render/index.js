import React, { useState } from 'react'

function Render() {
    const array = ['India' , 'newYork', 'srilanka' , 'westIndies']
    const[country,SetCountry]=useState(array);
  return (
    <div>
<label>Countries</label>
<h1>{country}</h1>

</div>
)}
export default Render