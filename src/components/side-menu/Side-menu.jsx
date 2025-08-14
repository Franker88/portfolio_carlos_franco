import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Side-menu.css";

const SideMenu = ({ isOpen, toggleMenu }) => {
  const handleBackdropClick = () => {
    if (isOpen) {
      toggleMenu();
    }
  };
  return (
    <div>
      <div className={`Side-menu ${isOpen ? "open" : ""}`}>
        <div className="Side-menu-close">
          <FontAwesomeIcon icon={faXmark} onClick={toggleMenu} />
        </div>
      </div>
      <div
        className={`backdrop ${
          isOpen ? "backdrop--visible" : "backdrop--hidden"
        }`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export { SideMenu };
