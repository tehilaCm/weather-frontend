import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import useUserId from "../utility/useUserId";

import { BsFillTrashFill } from "react-icons/bs";
import { RiCelsiusFill } from "react-icons/ri";

import { deletSearch } from "../api";
import actions from "../actions";

const WeatherCard = ({
  weatherDetails,
  isHistory,
  user,
  deleteHistorySearch,
  logout,
}) => {
  const {
    city,
    feelsLike,
    humidity,
    pressure,
    temp,
    tempMax,
    tempMin,
    wind,
    _id,
  } = weatherDetails;
  const { speed, deg } = wind;

  const [userId, setUserId] = useState("");
  const history = useHistory();
  const getUserDetails = useUserId();

  useEffect(async () => {
    const { userId, token } = await getUserDetails();

    if (token) {
      setUserId(userId);
    }
  }, [user]);

  const deleteSearch = async () => {
    if (userId && _id) {
      deleteHistorySearch(_id);
      try {
        await deletSearch(userId, _id);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          logout();
          history.push("/");
        }
      }
    }
  };

  return (
    <div
      className={
        isHistory
          ? "card center weather-card history-card"
          : "card center weather-card"
      }
    >
      <div className="card-body">
        <div className="container">
          <h5 className="city">{city}</h5>
          <div className="row">
            <div className="col sm-12 lg-6">
              <p>
                Temp: {parseInt(temp - 273.15) + " "} <RiCelsiusFill />
              </p>
              <p>
                Feels like: {parseInt(feelsLike - 273.15) + " "}{" "}
                <RiCelsiusFill />
              </p>
              <p>
                Temp max: {parseInt(tempMax - 273.15) + " "} <RiCelsiusFill />
              </p>
              <p>
                Temp min: {parseInt(tempMin - 273.15) + " "} <RiCelsiusFill />
              </p>
            </div>

            <div className="col sm-12 lg-6">
              <p>Humidity: {parseInt(humidity) + "%"}</p>
              <p>Pressure: {pressure}</p>
              <p>Wind:</p>
              <p>Speed: {speed}</p>
              <p>
                Degree: {parseInt(deg - 273.15) + " "} <RiCelsiusFill />
              </p>
            </div>
          </div>
        </div>

        {isHistory && (
          <BsFillTrashFill className="trash-icon" onClick={deleteSearch} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteHistorySearch: (id) => dispatch(actions.deleteSearch(id)),
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
