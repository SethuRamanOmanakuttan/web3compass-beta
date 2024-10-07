import React from "react";

const OpenCallCard = ({ openCall, onClick }) => {
  const statusColor =
    openCall.status === "active" ? "text-green-500" : "text-red-500";
  const cardOpacity =
    openCall.status === "active" ? "opacity-100" : "opacity-50";
  const cardCursor =
    openCall.status === "active" ? "cursor-pointer" : "cursor-not-allowed";

  return (
    <div
      className={`retro-card ${cardOpacity} ${cardCursor}`}
      onClick={() => openCall.status === "active" && onClick(openCall)}
    >
      <h3 className='text-xl font-bold mb-2'>{openCall.name}</h3>
      <p className='text-sm mb-4'>{openCall.shortDescription}</p>
      <div className='flex justify-between items-center'>
        <span>Open Slots: {openCall.openSlots}</span>
        <span className={`font-bold ${statusColor}`}>
          {openCall.status.charAt(0).toUpperCase() + openCall.status.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default OpenCallCard;
