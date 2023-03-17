import { AxiosError } from "axios";
import { GithubProfile } from "../../api/github";

export const GET_USER_PROFILE = "github/GET_USER_PROFILE" as const;
export const GET_USER_PROFILE_SUCCESS =
  "github/GET_USER_PROFILE_SUCCESS" as const;
export const GET_USER_PROFILE_ERROR = "github/GET_USER_PROFILE_ERROR" as const;

export const getUserProfileAsync = (username: string) => ({
  type: GET_USER_PROFILE,
  payload: username,
});
export const getUSerProfileSuccess = (data: GithubProfile) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: data,
});
export const getUserProfileError = (err: AxiosError) => ({
  type: GET_USER_PROFILE_ERROR,
  payload: err,
});
