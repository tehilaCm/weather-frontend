import React from "react";
import { useState, useEffect } from "react";

import { RiCelsiusFill } from "react-icons/ri";

import { getWeatherByCityForSystem } from "../api";

const PopularCities = React.forwardRef((props, ref) => {
  const cities = [
    "Ashdod",
    "Beer sheva",
    "Ashkelon",
    "Bnei brak",
    "Herzliya",
    "Holon",
    "Hadera",
    "Jerusalem",
    "Haifa",
    "kfar Saba",
    "Petah Tikva",
    "Netanya",
    "Rehovot",
    "Rishon LeZion",
    "Tel Aviv",
    "Ramat Gan",
  ];

  const { handleClick } = props;

  const [citiesTemp, setCitiesTemp] = useState([]);

  useEffect(() => {
    setCitiesTempFunc(citiesTemp);
  }, []);

  const setCitiesTempFunc = async () => {
    let { data } = await getWeatherByCityForSystem(cities);
    let { resultAllCities } = data;

    setCitiesTemp([...resultAllCities]);
  };

  const clickCity = (city) => {
    ref.current.value = city;
    handleClick();
  };

  if (citiesTemp) {
    return (
      <div className="cities-container">
        <h4>Popular cities in Israel</h4>
        {citiesTemp.map((city, index) => {
          return (
            <div
              className="popular-city"
              key={index}
              onClick={() => clickCity(city.city)}
            >
              <p>{city.city}</p>
              <p className="temp">
                {parseInt(city.temp - 273.15) + " "}
                <RiCelsiusFill />
              </p>
            </div>
          );
        })}
      </div>
    );
  }
});

export default PopularCities;
