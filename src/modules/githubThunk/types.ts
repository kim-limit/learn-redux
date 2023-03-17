import { GithubProfile } from "../../api/github";
import {
  getUserProfileAsync,
  getUserProfileError,
  getUSerProfileSuccess,
} from "./actions";

export type GithubAction =
  | ReturnType<typeof getUserProfileAsync>
  | ReturnType<typeof getUSerProfileSuccess>
  | ReturnType<typeof getUserProfileError>;

export type GithubState = {
  userProfile: {
    loading: boolean;
    data: GithubProfile | null;
    error: Error | null;
  };
};
