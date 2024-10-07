import React from "react";
import maintainers from "/public/maintainers.json";

const MaintainerCard = ({ name, role, bio, image, twitter, github }) => (
  <div className='retro-card mb-8 p-6 hover:shadow-retro-lg transition-shadow bg-retro-white rounded-lg max-w-md'>
    <div className='flex flex-col items-center'>
      <img
        src={image}
        alt={name}
        className='w-32 h-32 mb-4 rounded-lg shadow-lg border-3 border-retro-black object-cover'
      />
      <h3 className='text-2xl font-bold mb-2 text-retro-black'>{name}</h3>
      <p className='text-retro-accent text-lg mb-4'>{role}</p>
      <div className='flex justify-center mb-4 space-x-4'>
        {twitter && (
          <a href={twitter} target='_blank' rel='noopener noreferrer'>
            <img src='/icons/twitter.png' alt='Twitter' className='w-8 h-8' />
          </a>
        )}
        {github && (
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <img src='/icons/github.png' alt='GitHub' className='w-8 h-8' />
          </a>
        )}
      </div>
      <p className='text-gray-700 text-center text-sm mb-4'>{bio}</p>
    </div>
  </div>
);

const Maintainers = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-5xl font-bold mb-8 text-center text-retro-black'>
        Meet the Maintainers
      </h1>
      <p className='mb-12  text-center text-lg text-gray-700'>
        Web3 Compass is the brainchild of a team of web3 enthusiasts -
        developers, advocates, and designers who love building cool stuff in the
        web3.
      </p>
      <div className='flex justify-center gap-8 flex-wrap'>
        {maintainers.map((maintainer, index) => (
          <MaintainerCard key={index} {...maintainer} />
        ))}
      </div>
    </div>
  );
};

export default Maintainers;
