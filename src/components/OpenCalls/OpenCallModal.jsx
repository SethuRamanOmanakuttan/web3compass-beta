import React from "react";
import Modal from "../common/Modal";

const OpenCallModal = ({ isOpen, onClose, openCall }) => {
  if (!openCall) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className='text-2xl font-bold mb-4'>{openCall.name}</h2>
      <p className='mb-4'>{openCall.fullDescription}</p>
      <h3 className='text-xl font-bold mb-2'>Course Outline:</h3>
      <ul className='list-disc list-inside mb-4'>
        {openCall.outline.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className='mb-4'>Open Slots: {openCall.openSlots}</p>
      <div className='flex justify-between'>
        <a
          href={openCall.applyUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='retro-button'
        >
          Apply Now
        </a>
        <button onClick={onClose} className='retro-button'>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default OpenCallModal;
