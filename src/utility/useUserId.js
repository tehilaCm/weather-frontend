import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import actions from "../actions";

const useUserId = () => {
  //   const [userId, setUserId] = useState("");
  let userId = "";

  const user = useSelector((state) => state.auth.user);

  const history = useHistory();

  const dispatch = useDispatch();

  const getUserDetails = async () => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      userId = decodedToken.id;
      const expirationTime = decodedToken.exp * 1000 - 60000;
      if (Date.now() >= expirationTime) {
        dispatch(actions.logout());
        history.push("/");
      }
    }

    return { userId, token };
  };

  return getUserDetails;
};

export default useUserId;
