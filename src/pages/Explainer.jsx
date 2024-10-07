// // src/pages/Explainer.js
import React from "react";
import { Link } from "react-router-dom";
import { useExplainerTopics } from "../hooks/useExplainerTopics";
import ConceptCard from "../components/Explainer/ConceptCard";

const Explainer = () => {
  const { topics, loading, error } = useExplainerTopics();

  if (loading) return <div className='text-center'>Loading topics...</div>;
  if (error)
    return (
      <div className='text-center text-red-500'>
        Error loading topics: {error.message}
      </div>
    );

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-4xl font-retro mb-2'>Web3 Explainers</h1>
        <p className='text-lg text-mid-grey'>
          In the mood to contribute some awesome explainers?{" "}
          <a
            className='  underline'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/The-Web3-Compass/web3-compass-data-repository/tree/main/explainers'
          >
            Go right ahead
          </a>{" "}
          !
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {topics.map((topic) => (
          <ConceptCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Explainer;
