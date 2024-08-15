import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import "./Body.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import cardData from "./cardData";
// import cardData from "./cardData";
// import cardData from "./cardData";

const Body = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5691389&lng=88.4338776&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.resturants
    // );

    // Optional Chaning
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];
    setFilteredData(restaurants);
    setFilteredResturant(restaurants);
  };

  // Conditional Rendering
  //   if (filteredData.length === 0) {
  //     <h1>Loading...</h1>;
  //   }

  return filteredData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              placeholder="Search Resturant"
              className="search-box"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                // Filter the resturant cards and update the UI
                console.log(searchText);
                const filteredRes = filteredData.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                // setFilteredData(filteredData);
                setFilteredResturant(filteredRes);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filterList = filteredData.filter(
                (res) => res.info.avgRating > 4
              );
              //   console.log(filterList);
              setFilteredResturant(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {filteredResturant.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={"/resturants/" + resturant.info.id}
            >
              <ResCard resList={resturant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
