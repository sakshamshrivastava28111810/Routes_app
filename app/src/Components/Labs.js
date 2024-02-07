import React from 'react'
import { useNavigate } from 'react-router-dom'


const Labs = () => {

  const navigate = useNavigate();

  function clickHandler(){
    navigate("/aboutPage"); 
  }
  return (
    <div>
       labs page
       <button onClick={clickHandler}>Move to about Page</button>
    </div>
  )
}

export default Labs
