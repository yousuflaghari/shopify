import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import cartReducer from "./redux/reducers/cartReduser";

const store = createStore(cartReducer, applyMiddleware(thunk));

export default store;
