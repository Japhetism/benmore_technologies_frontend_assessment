import React, { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectDropdownProps {
  options: Option[];
  onSelect?: (option: Option) => void;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="relative inline-block text-left w-full max-w-auto">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded border border-gray-300 flex justify-between items-center focus:outline-none"
      >
        <span>{selectedOption.label}</span>
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10 w-full">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
