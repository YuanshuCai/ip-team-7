import React, { useState, useEffect } from "react";
import i18next from "i18next";
import { PiGlobeHemisphereEastLight } from "react-icons/pi";
import Cookies from "js-cookie";
import "./LanguageSwitcher.scss";

const languages = [
  {
    code: "fr",
    name: "French",
    country_code: "fr",
    dir: "rtl",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
    dir: "",
  },
];

const LanguageSwitcher = () => {
  const getLanguageCookie = () => {
    return Cookies.get("i18next") || "en";
  };

  const [selectedLanguage, setSelectedLanguage] = useState(getLanguageCookie());
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (code) => {
    i18next.changeLanguage(code);
    setSelectedLanguage(code);
    Cookies.set("i18next", code);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div className="switcher">
      <button className="switcher__btn" onClick={toggleDropdown}>
        <PiGlobeHemisphereEastLight />
      </button>
      {dropdownVisible && (
        <ul className="switcher__content">
          {languages.map(({ code, name, country_code }) => (
            <li
              key={country_code}
              className={`switcher__language-item ${
                selectedLanguage === code
                  ? "switcher__language-item--selected"
                  : ""
              }`}
            >
              <a
                className="switcher__language-link"
                onClick={() => handleLanguageChange(code)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
