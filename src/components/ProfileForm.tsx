import { ChangeEvent, FormEvent, useState } from "react";
import "./ProfileForm.css";

type ProfileFormProps = {
  onSubmitUsername: (username: string) => void;
};
export const ProfileForm = ({ onSubmitUsername }: ProfileFormProps) => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(value);
    setValue("");
  };

  return (
    <form className="GithubUsernameForm" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        placeholder="Github 계정명을 입력하세요."
      />
      <button type="submit">조회</button>
    </form>
  );
};
