import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "cz", lang: "Czech" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
            className={lng.code === i18n.language ? "selected" : ""}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
