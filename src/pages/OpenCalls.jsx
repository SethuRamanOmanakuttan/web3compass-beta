import React, { useState, useEffect } from "react";
import OpenCallCard from "../components/OpenCalls/OpenCallCard";
import OpenCallModal from "../components/OpenCalls/OpenCallModal";

const OpenCalls = () => {
  const [openCalls, setOpenCalls] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/open-calls.json")
      .then((response) => response.json())
      .then((data) => setOpenCalls(data))
      .catch((error) => console.error("Error loading open calls:", error));
  }, []);

  const handleCardClick = (openCall) => {
    setSelectedCall(openCall);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCall(null);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-retro mb-8'>Open Calls for Collaboration</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {openCalls.map((openCall) => (
          <OpenCallCard
            key={openCall.id}
            openCall={openCall}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <OpenCallModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        openCall={selectedCall}
      />
    </div>
  );
};

export default OpenCalls;
