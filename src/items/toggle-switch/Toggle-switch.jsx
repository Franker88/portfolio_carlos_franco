import "./Toggle-switch.css";
import { useColors } from "../../hooks/useColors";

const ToggleSwitch = () => {
  const { isDark, toggleColors } = useColors();
  return (
    <button
      className={`toggle-switch${isDark ? " toggled" : ""}`}
      onClick={() => toggleColors()}
    >
      <div className="thumb"></div>
    </button>
  );
};

export { ToggleSwitch };
