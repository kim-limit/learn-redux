import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserProfile } from "../api/github";
import { ProfileForm } from "../components/ProfileForm";
import { ProfileItem } from "../components/ProfileItem";

import { RootState } from "../modules";
import { getUserProfileAsync } from "../modules/githubSaga";
import { getUserProfileThunk } from "../modules/githubThunk";

export const ProfileContainer = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.githubSaga.userProfile
  );

  const handleSubmit = (username: string) => {
    dispatch(getUserProfileThunk(username));
  };

  const handleSubmitSaga = (username: string) => {
    dispatch(getUserProfileAsync(username));
  };
  return (
    <>
      <ProfileForm onSubmitUsername={handleSubmitSaga} />
      {loading && <p style={{ textAlign: "center" }}>로딩중..</p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!</p>}
      {data && (
        <ProfileItem
          bio={data.bio}
          blog={data.blog}
          name={data.name}
          thumbnail={data.avatar_url}
        />
      )}
    </>
  );
};
