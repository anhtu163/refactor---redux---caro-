
import { createStore } from "redux";
import setWinner from "../reducers";

const initialState = { tech: "React " };

const store = createStore(setWinner, initialState)

export default store