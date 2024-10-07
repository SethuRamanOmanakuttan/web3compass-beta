// src/components/StarterPack/ProtocolCard.js
import React from "react";
import { Link } from "react-router-dom";

const ProtocolCard = ({ protocol }) => (
  <Link
    to={`/starter-packs/${protocol.id}`}
    className='retro-card block transition-all hover:shadow-retro-xl'
  >
    <h3 className='text-xl font-bold mb-2'>{protocol.name}</h3>
    <p className='text-sm mb-4'>{protocol.description}</p>
    <span className='text-retro-accent font-bold'>View Starter Pack →</span>
  </Link>
);

export default ProtocolCard;
