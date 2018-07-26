import React from "react";

function Cover(props) {
   return (
      <div className="image-row-movie" >
         <img src={props.src} alt={props.title} className="movie" />
         <div className="image-row-movie-title">
            <div>
               <h1>{props.title}</h1>
            </div>
         </div>
      </div >
   )
}

export default Cover;

