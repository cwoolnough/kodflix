import React from "react";
import { Link } from "react-router-dom";


function Cover(props) {
   return (
      
         <Link to={props.id} className="cover">
            <img src={props.src} alt={props.title} id={props.id} className="movie" />
            <div className="cover-title">
               <div>
                  <h1>{props.title}</h1>
               </div>
            </div>
         </Link>
   )
}

export default Cover;

