import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" />
            <button className="search-btn"></button>
          </div>
          <button className="filter-top-btn"></button>
        </div>
        <div className="shimmer-container">
          <div className="card">
            <div className="res-img"></div>
            <div className="res-desc"></div>
          </div>
          <div className="card">
            <div className="res-img"></div>
            <div className="res-desc"></div>
          </div>
          <div className="card">
            <div className="res-img"></div>
            <div className="res-desc"></div>
          </div>
          <div className="card">
            <div className="res-img"></div>
            <div className="res-desc"></div>
          </div>
          <div className="card">
            <div className="res-img"></div>
            <div className="res-desc"></div>
          </div>
          <div className="card">
            <div className="res-img"></div>
            <div className="res-desc"></div>
          </div>
          <div className="card">
            <div className="res-img"></div>
            <div className="res-desc"></div>
          </div>
          <div className="card">
            <div className="res-img"></div>
            <div className="res-desc"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
