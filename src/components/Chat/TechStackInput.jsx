import React, { useState } from "react";

const TechStackInput = ({ techStack, setTechStack }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Add technology when a comma is typed, if limit is not reached
    if (value.endsWith(",")) {
      const newTech = value.slice(0, -1).trim();
      if (newTech && techStack.length < 5) {
        setTechStack([...techStack, newTech]);
        setInputValue("");
      }
    }
  };

  const handleRemoveTech = (index) => {
    setTechStack(techStack.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    // Remove the last technology on backspace if the input is empty
    if (e.key === "Backspace" && inputValue === "" && techStack.length > 0) {
      handleRemoveTech(techStack.length - 1);
    }
  };

  return (
    <div className='flex flex-wrap items-center border-3 border-retro-black p-2 bg-retro-white'>
      {techStack.map((tech, index) => (
        <span
          key={index}
          className='bg-retro-accent text-retro-black px-2 py-1 rounded m-1 text-sm'
        >
          {tech}
          <button
            onClick={() => handleRemoveTech(index)}
            className='ml-2 font-bold'
          >
            ×
          </button>
        </span>
      ))}
      <input
        type='text'
        className={`flex-grow outline-none bg-transparent ${
          techStack.length >= 5 ? "opacity-50 cursor-not-allowed" : ""
        }`} // Add styling when limit is reached
        placeholder={
          techStack.length < 5
            ? "Add up to 5 technologies / skills, separated by a comma"
            : "You have reached the limit"
        }
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={techStack.length >= 5} // Disable input when limit is reached
      />
    </div>
  );
};

export default TechStackInput;
