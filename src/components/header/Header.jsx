import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSideMenu } from "../../hooks/useSideMenu";
import { SideMenu } from "../../components/side-menu/Side-menu";

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
          <FontAwesomeIcon
            className="faBars"
            icon={faBars}
            onClick={handleToggleMenu}
          />
        </div>
      </header>
      <div className="Toggle-switch-div">
        <SideMenu isOpen={isOpen} toggleMenu={handleToggleMenu} />
      </div>
    </div>
  );
};

export { Header };
