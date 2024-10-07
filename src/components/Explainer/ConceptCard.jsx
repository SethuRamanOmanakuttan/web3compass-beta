// src/components/Explainer/ConceptCard.js
import React from "react";
import { Link } from "react-router-dom";

const ConceptCard = ({ topic }) => (
  <Link to={`/explainer/${topic.id}`} className='retro-card block'>
    <h3 className='text-2xl font-bold mb-2'>{topic.title}</h3>
    <p className='mb-4'>{topic.summary}</p>
    <h4>{topic.author}</h4>
  </Link>
);
export default ConceptCard;
