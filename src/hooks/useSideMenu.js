import { useState } from "react";

const useSideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log(`isOpen: ${isOpen}`);
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleMenu,
  };
};

export { useSideMenu };
