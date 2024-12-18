import LightToggle from "./components/LightToggle";
import LottoNumbers from "./components/LottoNumbers";
import ClickCounter from "./components/ClickCounter";
import { useState } from "react";

const App = () => {
  const [isLightOn, setIsLightOn] = useState<boolean>(true);
  const [lottoNum, setLottoNum] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleLightClick = () => {
    setIsLightOn(!isLightOn);
  };

  const handleLottoClick = () => {
    const numbers = new Set();

    while (numbers.size < 7) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      numbers.add(randomNumber);
    }

    setLottoNum([...numbers]);
  };

  const handleIncreaseClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle handleLightClick={handleLightClick} />
      {isLightOn ? (
        <div style={{ background: "#ffe4e1" }}>
          Change this background color using the style attribute
        </div>
      ) : (
        <div style={{ backgroundColor: "lightgray" }}>
          Change this background color using the style attribute
        </div>
      )}

      <h2>Lotto Numbers</h2>
      <LottoNumbers handleLottoClick={handleLottoClick} />
      <div className="output">
        {lottoNum.length > 0
          ? lottoNum.join(", ")
          : "Click to generate numbers"}
      </div>

      <h2>Click Counter</h2>
      <ClickCounter handleIncreaseClick={handleIncreaseClick} />
      <div className="output">{count}</div>
    </div>
  );
};

export default App;
