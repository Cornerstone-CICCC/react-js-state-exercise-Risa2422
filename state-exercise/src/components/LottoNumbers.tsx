import React from "react";

type Props = {
  handleLottoClick: () => void;
};

const LottoNumbers = ({ handleLottoClick }: Props) => {
  return <div onClick={handleLottoClick}>LottoNumbers</div>;
};

export default LottoNumbers;
