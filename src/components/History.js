import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BsSearch } from "react-icons/bs";

import $ from "jquery";

import useUserId from "../utility/useUserId";
import { getSearches, deletAllSearches } from "../api";
import actions from "../actions";

import WeatherCard from "./WeatherCard";
import Spinner from "./Spinner";
import ClearHistoryPopup from "./ClearHistoryPopup";

const History = ({ setSearchHistory, searchHistory }) => {
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const getUserDetails = useUserId();

  useEffect(() => {
    $("body").css("background-image", "linear-gradient(#0a58ca, #0dcaf0)");
  }, []);

  useEffect(async () => {
    setIsLoading(true);

    const { userId, token } = await getUserDetails();

    if (token) {
      setUserId(userId);
      if (userId) setSearches();
    }
  }, [userId]);

  const setSearches = async () => {
    if (userId) {
      try {
        const { data } = await getSearches(userId);
        const { searches } = data;
        setSearchHistory(searches);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const clearHistory = async () => {
    if (userId) {
      setSearchHistory([]);
      try {
        await deletAllSearches(userId);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (isLoading) return <Spinner />;

  if (searchHistory.length === 0 && isLoading === false)
    return (
      <div style={{ display: "grid", flexWrap: "wrap" }}>
        <h1 className="header">You have no searches</h1>
        <BsSearch className="search-icon" />
      </div>
    );

  return (
    <>
      <ClearHistoryPopup
        modalIsOpen={isOpen}
        setIsOpen={setIsOpen}
        clearHistory={clearHistory}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 className="header">Searches history</h1>
        <button
          className="btn clear-history-btn"
          onClick={() => setIsOpen(true)}
        >
          Clear history
        </button>
        <div className="searches-container">
          {searchHistory.map((item, index) => (
            <WeatherCard key={index} weatherDetails={item} isHistory={true} />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchHistory: state.user.searchHistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchHistory: (data) => dispatch(actions.setSearchHistory(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
