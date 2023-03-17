import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter from "./counter";
import githubSaga, { gitSaga } from "./githubSaga";
import githubThunk from "./githubThunk";
import todos from "./todos/index";

const rootReducer = combineReducers({
  counter,
  todos,
  githubThunk,
  githubSaga,
});
// export rootReducer, type
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([gitSaga()]);
}
