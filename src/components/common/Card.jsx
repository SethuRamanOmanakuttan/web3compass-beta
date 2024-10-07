// src/components/common/Card.js
import React from "react";

const Card = ({ title, description, onClick }) => {
  return (
    <div
      className='bg-mid-grey p-6 rounded border-3 border-off-white cursor-pointer hover:bg-light-grey transition-colors'
      onClick={onClick}
    >
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
