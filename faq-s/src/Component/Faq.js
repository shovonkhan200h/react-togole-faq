import React,{useState} from 'react'

const Faq = ({title,desc}) => {
    const[togol,setTogol]=useState(false)
  return (
    <div>
        <div><h1>{title}</h1></div>
        <div>{togol && <p>{desc}</p>}</div>
        <button onClick={()=>{setTogol(!togol)}}>{togol? `-`:`+`}</button>
    </div>
  )
}

export default Faq