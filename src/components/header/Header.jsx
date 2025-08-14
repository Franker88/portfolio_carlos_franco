import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSideMenu } from "../../hooks/useSideMenu";
import { SideMenu } from "../../components/side-menu/Side-menu";
import { ToggleSwitch } from "../../items/toggle-switch/Toggle-switch";

import "./Header.css";

const Header = () => {
  const { isOpen, toggleMenu } = useSideMenu();
  const handleToggleMenu = () => {
    toggleMenu();
  };
  return (
    <div>
      <header className="Header-container">
        <div className="Side-icon">
          <FontAwesomeIcon icon={faBars} onClick={handleToggleMenu} />
        </div>
        <ToggleSwitch />
      </header>
      <SideMenu isOpen={isOpen} toggleMenu={handleToggleMenu} />
    </div>
  );
};

export { Header };
