import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestroData, setlistOfRestroData] = useState([]);
  //whenever state variables update, react trigger a reconciliation cycle(re-render the component)

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log("Body rendered before useEffect");

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Body rendered");

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.246892&lng=72.917604&carousel=true&third_party_vendor=1"
      );
      const json = await data.json();
      setlistOfRestroData(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log("Restaurant ",
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error while fetching the data", error.message);
    }
  };

  return listOfRestroData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="bar">
        <div className="search">
          <input
            type="search"
            placeholder="Search your restaurant here..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              //filter the restaurant cards and update the UI
              console.log(searchText);
              const searchedRestro = listOfRestroData.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase())
              );
              setFilteredRestaurant(searchedRestro);
            }}
          >
            Search
          </button>
        </div>
        <div className="filters-area">
          <button
            className="filter-btn"
            onClick={() => {
              const filterData = listOfRestroData?.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRestaurant(filterData);
            }}
          >
            Top Rated Restaurant
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              setFilteredRestaurant(listOfRestroData);
            }}
          >
            Show All
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant?.map((res) => {
          return <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}><RestaurantCard data={res} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;