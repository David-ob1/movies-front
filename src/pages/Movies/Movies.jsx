import React from "react";
import { Filter } from "../../components/Filter/Filter";
import CardContainer from "../../components/CardContainer/CardContainer";

import "./movies.css";

export const Movies = () => {
  return (
    <div className="main-container">
      <Filter />

      <div className="movies-container">
        <p>aca van las movies</p>
      
     <CardContainer></CardContainer>
       
      
        <div>
       
      
        </div>
      </div>
    </div>
  );
};
