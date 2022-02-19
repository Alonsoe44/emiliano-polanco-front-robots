import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";

export const rootReducer = combineReducers({
  robots: robotsReducer,
});
