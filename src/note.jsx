import React,{useState} from "react";
 function Note(props)
 {
     function handleClick(event)
     {
         props.removingnote(props.id);
         event.preventDefault();
     }
     return (
         <div className="note" >
         <h1>{props.title}</h1>
         <p>{props.content}</p>
         <button onClick={handleClick}>-</button>
         </div>
     ); 
 };

 export default Note;