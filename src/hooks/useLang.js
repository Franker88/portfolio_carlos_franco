import { useState } from "react";

const useLang = () => {
  const [isLangEn, setIsLangEn] = useState(true);

  const toggleLang = () => {
    console.log(`isLangEn: ${isLangEn}`);
    setIsLangEn(!isLangEn);
  };

  return { isLangEn, toggleLang };
};

export { useLang };
