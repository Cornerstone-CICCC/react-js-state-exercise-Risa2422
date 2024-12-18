import React from "react";

type Props = {
  handleIncreaseClick: () => void;
};

const ClickCounter = ({ handleIncreaseClick }: Props) => {
  return <button onClick={handleIncreaseClick}>Click Counter</button>;
};

export default ClickCounter;
