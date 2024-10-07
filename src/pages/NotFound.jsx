import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const NotFound = () => {
  return (
    <div className='container mx-auto px-4 py-8 bg-retro-white'>
      <h1 className='text-5xl font-bold mb-8 text-center font-roboto'>
        404: Page Not Found
      </h1>
      <div className='w-full max-w-3xl mx-auto bg-retro-white border-3 border-retro-black p-8 shadow-retro-lg text-center'>
        <p className='text-2xl mb-4'>
          Oops! Looks like you’ve taken a wrong turn.
        </p>
        <p className='text-2xl mb-4'>This page doesn’t exist... yet.</p>
      </div>
    </div>
  );
};

export default NotFound;
