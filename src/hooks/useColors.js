import { useState } from "react";
import { colors } from "../vars/color-vars";

const useColors = () => {
  const [isDark, setColors] = useState(false);
  const varColors = colors;

  const toggleColors = () => {
    console.log(`isDark: ${isDark}`);

    if (isDark) {
      document.documentElement.style.setProperty(
        "--primary-color",
        varColors.primary.dark
      );
    } else {
      document.documentElement.style.setProperty(
        "--primary-color",
        varColors.primary.light
      );
    }
    setColors(!isDark);
  };

  return { isDark, toggleColors };
};

export { useColors };
