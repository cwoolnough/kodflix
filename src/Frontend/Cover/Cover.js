import React from "react";
import { Link } from "react-router-dom";


function Cover(props) {
   return (
      
         <Link to="Details" className="cover">
            <img src={props.src} alt={props.title} className="movie" />
            <div className="cover-title">
               <div>
                  <h1>{props.title}</h1>
               </div>
            </div>
         </Link>
   )
}

export default Cover;

