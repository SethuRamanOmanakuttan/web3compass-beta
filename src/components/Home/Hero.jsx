// src/components/Home/Hero.js
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className='bg-retro-white text-retro-black py-18 px-3 border-b-3 mb-2 border-retro-black'>
      <div className='container mx-auto flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 mb-8  md:mb-0'>
          <h1 className=' text-7xl md:text-8xl sm:text-4xl font-Tourney  mb-4'>
            FIND YOUR WAY IN WEB3
          </h1>
          <p className='text-xl mb-8 font-thin'>
            Guiding developers into the web3 ecosystem
          </p>
          <button
            className='retro-button'
            onClick={() =>
              document
                .getElementById("starter-pack")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
          </button>
          <div className=' mt-8 font-thin italic'>
            <span>New to blockchain? Give this a </span>
            <Link
              to={`/explainer/the-blockchain-class`}
              className=' mt-6 font-bold underline'
            >
              {" "}
              Read
            </Link>
            <span>!</span>
          </div>
        </div>
        <div className='md:w-1/2'>
          <div className='bg-retro-white h-82 w-82 mx-auto mb-2 flex items-center justify-center text-retro-black '>
            <img src='/illustrations/hero-illustration.png' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
