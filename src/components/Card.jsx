import React, { useState } from "react";

const Card = (item) => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="card w-100 h-100 " onClick={handleClick}>
      <div className="h-75 relative d-flex justify-content-center align-items-center flex-column">
        {toggle ? (
          <img
            src={item.img}
            className="card-img-top img-fluid img-thumbnail h-100"
            alt="cardPhoto"
          />
        ) : (
          <div>
            {item.statistics.map((ist, ind) => {
              return (
                <p key={ind} className="fs-5">
                  🏀 {ist}
                </p>
              );
            })}
          </div>
        )}
      </div>

      <div className="card-body text-center d-flex align-items-center justify-content-center">
        <h5 className="card-title fs-4">{item.name}</h5>
      </div>
    </div>
  );
};

export default Card;
