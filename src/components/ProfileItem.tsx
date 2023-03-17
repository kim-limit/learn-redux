import "./ProfileItem.css";

type ProfileItemProps = {
  name: string;
  thumbnail: string;
  bio: string | null;
  blog: string;
};

export const ProfileItem = ({
  name,
  thumbnail,
  bio,
  blog,
}: ProfileItemProps) => {
  return (
    <div className="GithubProfileInfo">
      <div className="profile-head">
        <img src={thumbnail} alt="user thumbnail" />
        <div className="name">{name}</div>
      </div>
      <p>{bio}</p>
      <div>{blog !== "" && <a href={blog}>블로그</a>}</div>
    </div>
  );
};
