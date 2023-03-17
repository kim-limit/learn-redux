import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";
import { getUserProfile, GithubProfile } from "../../api/github";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUserProfileError, getUSerProfileSuccess } from "../githubThunk";
import { AxiosError } from "axios";

function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync>) {
  try {
    const userProfile: GithubProfile = yield call(
      getUserProfile,
      action.payload
    );
    yield put(getUSerProfileSuccess(userProfile));
  } catch (e) {
    yield put(getUserProfileError(e as AxiosError));
  }
}

export function* gitSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
