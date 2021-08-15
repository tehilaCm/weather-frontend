import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";

import actions from "../actions";

const Navbar = ({ setUser, user, logout }) => {
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  const closeNav = () => {
    let display = $(".collapse").css("display");
    if (display === "block") $("#navbarNav").hide("slow");
  };

  const history = useHistory();

  const handelLogout = () => {
    logout();
    history.push("/");
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand brand"
            to="/home"
            onClick={() => closeNav()}
          >
            Weather
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => $("#navbarNav").toggle("slow")}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                  onClick={() => closeNav()}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/history"
                  onClick={() => closeNav()}
                >
                  History
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-primary logout-btn"
              onClick={handelLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
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
    setUser: (user) => dispatch(actions.setUser(user)),
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
