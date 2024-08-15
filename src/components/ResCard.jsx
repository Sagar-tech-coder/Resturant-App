import React from "react";
import "./ResCard.css";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ResCard = (props) => {
  const { resList } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, sla, locality } =
    resList?.info;

  return (
    <>
      {/* {resList.map((restaurants) => ( */}
      <div className="res-card">
        <img
          className="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="res-logo"
        />
        <div className="card-desc">
          <h3>{name}</h3>
          <div className="star-line">
            <div className="ratings">
              <FaStar />
              &nbsp;{avgRating}
            </div>
            <div className="time">
              <b>&#183;</b> {sla?.slaString}
            </div>
          </div>
          <div className="cuisine">{cuisines.join(", ")}</div>
          <div className="locality">
            {locality}&nbsp;
            <FaLocationDot />
          </div>
        </div>
      </div>
      {/* ))} */}
    </>
  );
};

export default ResCard;
