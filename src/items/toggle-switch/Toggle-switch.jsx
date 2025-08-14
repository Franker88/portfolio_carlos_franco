import { useState } from "react";
import "./Toggle-switch.css";

const ToggleSwitch = () => {
  const [toggleState, setToggleState] = useState(false);
  return (
    <button
      className={`toggle-switch${toggleState ? " toggled" : ""}`}
      onClick={() => setToggleState(!toggleState)}
    >
      <div className="thumb"></div>
    </button>
  );
};

export { ToggleSwitch };
