import React from "react";
import Tour from "./Tour";
import { useState, useEffect } from "react";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;

// return (
//   <>
//     <img src={tour.image} alt="" />
//     <div>
//       <h4>{tour.name}</h4>
//     </div>
//   </>
// );
// for (var key of Object.keys(detailFromApi)) {
//   console.log(key + "-> " + detailFromApi[key]);
// }
