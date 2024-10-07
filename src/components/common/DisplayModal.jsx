// src/components/common/Modal.js
import React from "react";
import { X } from "lucide-react";
const DisplayModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-retro-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-retro-white p-6 rounded border-3 border-retro-black shadow-retro-lg max-w-[80%] w-full'>
        <div className='flex justify-end'>
          <button
            onClick={onClose}
            className='text-retro-black hover:text-retro-accent'
          >
            <X size={25} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DisplayModal;
