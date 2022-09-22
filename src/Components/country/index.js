import React, { useState } from 'react'
import Render from '../render';

function  Country(props) {
  const array = ['India' , 'newYork', 'srilanka' , 'westIndies']
const [number,setNumber]=useState({
  num_1:'3',
  num_2:'4'
});
const[flag,setFlag]=useState([])

function handleSubmit(){
    setFlag([...array])
    

}
  function reverse(){

       setNumber(prev =>({
        ...prev,
        num_1:prev.num_1 !== '3' ? '3' :'4',
        num_2:prev.num_2 === '4' ? '3' :'4'
       }))
  }
  return (
    <>
     {
      flag.length > 0 
      ?
      <Render />
      :


    <React.Fragment> 
    <div className='form'> 
        <button onClick={handleSubmit}> Select Countries </button>
    </div>
    <div>

     <button onClick={() => reverse()} >{number.num_1}</button>
     <button onClick={reverse}>{number.num_2}</button>

    </div>
    
    
    </React.Fragment>
    }
    </>
  )
}

export default Country