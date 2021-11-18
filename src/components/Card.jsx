import React from "react";
import { Link } from "react-router-dom";

const Card = ({ candidate }) => {
  const { Image, name, id } = candidate;

  return (
    <Link to={`/candidate/${id}`}>
      <div className="card">
        <div className="card_base">
          <div className="card_img">
            <img src={Image} alt={name} />
          </div>
          <div className="card_content">
            <small className="small_text">
              id: <strong>#{id}</strong>{" "}
            </small>
            <h2 className="card_title">{name}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
