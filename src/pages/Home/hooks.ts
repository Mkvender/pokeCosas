import { ChangeEvent, useState } from "react";

export const OnSetStateName = () => {
  const [name, setName] = useState("");

  const onSetName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return {
    name,
    onSetName,
  };
};

export default OnSetStateName;
