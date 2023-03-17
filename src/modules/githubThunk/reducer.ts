import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERROR,
  GET_USER_PROFILE_SUCCESS,
} from "./actions";
import { GithubAction, GithubState } from "./types";

const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null,
  },
};

const githubThunk = (
  state: GithubState = initialState,
  action: GithubAction
) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case GET_USER_PROFILE_ERROR:
      return {
        ...state,
        userProfile: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    default:
      return state;
  }
};

export default githubThunk;
