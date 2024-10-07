import React, { useState } from "react";
import Modal from "../common/Modal";

const CommunityCard = ({ community }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className='retro-card cursor-pointer'
        onClick={() => setIsModalOpen(true)}
      >
        <h3 className='text-xl font-bold mb-2'>{community.name}</h3>
        <p className='mb-2'>{community.description}</p>
        <p className='text-md'>
          <strong>Location:</strong> {community.city}
        </p>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className='text-2xl font-bold mb-4'>{community.name}</h2>
        <p className='mb-4'>{community.description}</p>
        <p className='mb-2'>
          <strong>Location:</strong> {community.city}
        </p>
        <p className='mb-2'>
          <strong>Members:</strong> {community.members}
        </p>
        <p className='mb-2'>
          <strong>Focus:</strong> {community.focus}
        </p>
        <div className='mt-4'>
          {Object.entries(community.socials).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='retro-button mr-3 mb-2 inline-block hover:text-black'
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default CommunityCard;
