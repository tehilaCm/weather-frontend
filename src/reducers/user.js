import produce from "immer";
import reducerHendler from "./reducerUtils";

const initialState = {
  searchHistory: [],
};

const user = {
  setSearchHistory(state, action) {
    state.searchHistory = action.payload;
  },
  deleteSearch(state, action) {
    state.searchHistory = state.searchHistory.filter(
      (search) => search._id !== action.payload
    );
  },
};

const reducer = produce((state, action) => {
  reducerHendler(state, action, user);
}, initialState);

export default reducer;
