import { useState } from "react";

const useColors = () => {
  const [isDark, setColors] = useState(false);

  const toggleColors = () => {
    console.log(`isDark: ${isDark}`);
    setColors(!isDark);
  };

  return { isDark, toggleColors };
};

export { useColors };
