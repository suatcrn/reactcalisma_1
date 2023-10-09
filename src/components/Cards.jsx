import React from "react";
import Card from "./Card";

const Cards = ({ datas }) => {
  return (
    <div className="container">
      <div className="d-flex flex-wrap cardContainer">
        <div className="row g-3 justify-content-center align-items-center w-100">
          {datas.map((item, index) => {
            return (
              <div className=" col-lg-4 col-md-6 col-xl-3 " key={index}>
                <Card {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
