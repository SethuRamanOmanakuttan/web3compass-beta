// src/components/Layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {} from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-retro-white text-retro-black py-4 border-t-3 border-retro-black'>
      <div className='container mx-auto px-4 text-center'>
        <p className='mb-2'>
          Dive into Web3 Compass — Tag along with us on{" "}
          <a
            href='https://x.com/the_web3compass'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-retro-accent'
          >
            twitter
          </a>{" "}
          , join the conversation in our{" "}
          <a
            href='https://t.me/+Bmec234RB3M3YTll'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-retro-accent'
          >
            telegram
          </a>{" "}
          group and contribute to our{" "}
          <a
            href='https://github.com/The-Web3-Compass/web3-compass-data-repository'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-retro-accent'
          >
            Github
          </a>
          . Together, Let's make Web3 even better!{" "}
        </p>
        <p>
          <span> All the content is curated by our </span>
          <Link to='/maintainers' className='underline hover:text-retro-accent'>
            fantastic team!
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
