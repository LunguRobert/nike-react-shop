import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./Cart/CartReducer";
import { userReducer } from "./User/UserReducer";
import favoritesReducer from "./Favorites/FavoritesReducer";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import filterReducer from "./Filter/FilterReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  favorites: favoritesReducer,
  filtered: filterReducer,
});

const middlewares = [ReduxThunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
