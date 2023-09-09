import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  const [istrue,setIsTrue] = useState(false);

  const updateButton = () =>{
    setIsTrue(!istrue);
  }

  return <article className='question'>
    <header>
    <h4 >{title}</h4>
     <button className='btn' onClick = {updateButton}>
      {istrue ? <AiOutlineMinus/> : <AiOutlinePlus/>}
     </button>
   
    </header>
    {istrue && <p>{info}</p> }
    </article>

};

export default Question;
