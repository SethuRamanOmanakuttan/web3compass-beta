// src/pages/StarterPackDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { useStarterPacks } from "../hooks/useStarterPacks";

const Roadmap = ({ resources }) => (
  <div className='mt-8 bg-retro-white shadow-retro p-8 border-3 border-retro-black'>
    <h3 className='text-2xl font-bold mb-6 text-retro-black'>
      Learning Roadmap
    </h3>
    {resources.map((level, index) => (
      <div key={index} className='mb-8'>
        <h4 className='text-xl font-semibold mb-4 text-retro-accent'>
          {level.level}
        </h4>
        <ul className='space-y-4'>
          {level.items.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className='bg-retro-white p-4 border-2 border-retro-black shadow-retro-sm'
            >
              <a
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg font-medium text-retro-black hover:text-retro-accent transition-colors'
              >
                {item.title}
              </a>
              <p className='text-sm text-gray-600 mt-2'>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const StarterPackDetail = () => {
  const { id } = useParams();
  const { starterPacks, loading, error } = useStarterPacks();

  if (loading)
    return <div className='text-center'>Loading starter pack...</div>;
  if (error)
    return (
      <div className='text-center text-red-500'>
        Error loading starter pack: {error.message}
      </div>
    );

  const starterPack = starterPacks.find((pack) => pack.id === id);

  if (!starterPack)
    return <div className='text-center'>Starter pack not found</div>;

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto bg-retro-white shadow-retro p-8 border-3 border-retro-black'>
        <h1 className='text-4xl font-bold mb-4 text-retro-black'>
          {starterPack.name} Starter Pack
        </h1>
        <p className='text-xl mb-8 text-gray-700'>{starterPack.description}</p>
        <Roadmap resources={starterPack.resources} />
      </div>
    </div>
  );
};

export default StarterPackDetail;
