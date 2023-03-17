import { ChangeEvent, FormEvent, useState } from "react";

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

export const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [value, setValue] = useState("");
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };

  return (
    <div>
      <input onChange={handleValue} value={value} />
      <button onClick={handleSubmit}>create</button>
    </div>
  );
};
