import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import $ from "jquery";

import { BsSearch } from "react-icons/bs";

import actions from "../actions";
import { weatherByCity } from "../api";

import useUserId from "../utility/useUserId";

import WeatherCard from "./WeatherCard";
import PopularCities from "./PopularCities";

const Home = ({ user, logout }) => {
  const cityRef = useRef(null);

  const [userId, setUserId] = useState("");
  const [details, setDetails] = useState({});
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();

  const getUserDetails = useUserId();

  useEffect(() => {
    $("body").css("background-image", "linear-gradient(#0a58ca, #0dcaf0)");
  }, []);

  useEffect(async () => {
    const { userId, token } = await getUserDetails();

    if (token) {
      setUserId(userId);
    }
  }, [user]);

  const handelSubmit = async (e) => {
    if (e) e.preventDefault();

    const city = cityRef.current.value;
    if (!city) {
      return alert("You must search a city");
    }

    cityRef.current.value = "";
    if (city && userId) {
      try {
        setError(false);
        const { data } = await weatherByCity(city, userId);
        const { result } = data;
        const { weather } = result;
        setDetails(weather);
        setShowCard(true);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          logout();
          history.push("/");
        }
        setError(true);
      }
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      {error && (
        <div className="alert alert-danger home-alert" role="alert">
          No city were found! Try again
        </div>
      )}
      <form className="search-form center" onSubmit={handelSubmit}>
        <BsSearch className="serach-icon" />
        <input type="text" placeholder="Search a city" ref={cityRef} />
      </form>
      {showCard && <WeatherCard weatherDetails={details} />}
      <PopularCities handleClick={handelSubmit} ref={cityRef} />
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
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
