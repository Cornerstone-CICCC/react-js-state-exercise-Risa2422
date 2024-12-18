type Props = {
  handleLightClick: () => void;
};

const LightToggle = ({ handleLightClick }: Props) => {
  return <button onClick={handleLightClick}>Toggle Lights</button>;
};

export default LightToggle;
