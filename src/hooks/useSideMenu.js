import { useState } from "react";

const useSideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(`isOpen: ${isOpen}`);
  };

  return {
    isOpen,
    toggleMenu,
  };
};

export { useSideMenu };
