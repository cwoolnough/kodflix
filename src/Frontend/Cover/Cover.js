import React from "react";


function Cover(props) {
   return (
      <div className="cover">
         <img src={props.src} alt={props.title} className="movie" />
         <div className="cover-title">
            <div>
               <h1>{props.title}</h1>
            </div>
         </div>
      </div>
   )
}

export default Cover;

