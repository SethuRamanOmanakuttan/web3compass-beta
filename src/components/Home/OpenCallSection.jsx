import React from "react";
import { Link } from "react-router-dom";

const OpenCallSection = () => {
  return (
    <section
      className='py-6 bg-retro-white border-t-3 border-retro-black'
      id='starter-pack'
    >
      <div className='container mt-16 mb-8 flex flex-col items-center text-center'>
        <h2 className='text-3xl font-retro mb-4'>
          Open Calls for Collaboration
        </h2>
        <p className='text-lg text-mid-grey mb-4'>
          Join us in creating cutting-edge Web3 courses! We're looking for
          passionate individuals to collaborate on developing educational
          content for the community.
        </p>
        <Link to='/open-calls' className='retro-button hover:text-black'>
          View Open Calls
        </Link>
      </div>
    </section>
  );
};

export default OpenCallSection;
