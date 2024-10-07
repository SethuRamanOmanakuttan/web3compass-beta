// src/components/Home/StarterPackSection.js
import React from "react";
import { Link } from "react-router-dom";
import { useStarterPacks } from "../../hooks/useStarterPacks";
import ProtocolCard from "../StarterPack/ProtocolCard";

const StarterPackSection = () => {
  const { starterPacks, loading, error } = useStarterPacks();

  if (loading)
    return <div className='text-center'>Loading starter packs...</div>;
  if (error)
    return (
      <div className='text-center text-red-500'>
        Error loading starter packs: {error.message}
      </div>
    );

  return (
    <section className='py-12 bg-retro-white  ' id='starter-pack'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Protocol Starter Packs
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {starterPacks.slice(0, 3).map((protocol) => (
            <ProtocolCard key={protocol.id} protocol={protocol} />
          ))}
        </div>
        <div className='text-center mt-8'>
          <Link to='/starter-packs' className='retro-button hover:text-black'>
            View All Starters
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StarterPackSection;
