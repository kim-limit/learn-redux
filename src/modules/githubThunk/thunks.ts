import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { ActionType } from "typesafe-actions";
import { RootState } from "..";
import { getUserProfile } from "../../api/github";
import {
  getUserProfileAsync,
  getUserProfileError,
  getUSerProfileSuccess,
} from "./actions";

export const getUserProfileThunk = (username: string): ActionType<any> => {
  console.log(username);
  return async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(getUserProfileAsync());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(getUSerProfileSuccess(userProfile));
    } catch (err) {
      const error = err as AxiosError;
      dispatch(getUserProfileError(error));
    }
  };
};
