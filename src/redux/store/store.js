import { createStore } from "redux";
import cartReducers from "../reduces/cartReducers";

export const store = createStore(cartReducers)