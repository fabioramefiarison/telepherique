
import React, { useState} from 'react';

const Dropdown = ({ options, selectedOption, onOptionSelect, defaultOption }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onOptionSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button onMouseUp={toggleDropdown}>
                {selectedOption || defaultOption}  {<i className='fas fa-chevron-circle-down'></i>}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
