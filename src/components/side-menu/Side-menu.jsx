import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ToggleSwitch } from "../../items/toggle-switch/Toggle-switch";
import "./Side-menu.css";

const SideMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <div>
        <div className={`Side-menu ${isOpen ? "open" : ""}`}>
          <div className="Side-menu-close">
            <FontAwesomeIcon icon={faXmark} onClick={toggleMenu} />
          </div>
          <div className="dark-toggle-div">
            <span className="dark-text">Dark Mode</span>
            <ToggleSwitch />
          </div>
        </div>

        <div
          className={`backdrop ${
            isOpen ? "backdrop--visible" : "backdrop--hidden"
          }`}
          onClick={toggleMenu}
        ></div>
      </div>
    </div>
  );
};

export { SideMenu };
