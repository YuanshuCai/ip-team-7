import React, { useState, useEffect, useRef } from "react";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";
import "./CategoriesDropDown.scss";

const CategoriesDropDown = ({ categories, setCategoryId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const updatedCategories = [
    { category_id: null, category_name: "Choose the category" },
    ...categories,
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (category) => {
    setCategoryId(category.category_id);
    setSelectedOption(category.category_name);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown__btn" onClick={toggleDropdown}>
        {selectedOption || "Choose the category"}
        <span>{isOpen ? <RiArrowUpWideFill /> : <RiArrowDownWideFill />}</span>
      </button>
      {isOpen && (
        <ul className="dropdown__list">
          {updatedCategories.map((category) => (
            <li
              key={category.category_id || 0}
              className="dropdown__item"
              onClick={() => handleOptionClick(category)}
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesDropDown;
