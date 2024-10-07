import React from "react";
import { Link } from "react-router-dom";
import { useStarterPacks } from "../hooks/useStarterPacks";
import ProtocolCard from "../components/StarterPack/ProtocolCard";

const StarterPack = () => {
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
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-4xl font-retro mb-2'>Web3 Starter Packs</h1>
        <p className='text-lg text-mid-grey'>
          The Answer to "Where do i start in Web3?" Feel free to{" "}
          <a
            className='underline'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/The-Web3-Compass/web3-compass-data-repository/tree/main/starterpacks'
          >
            Contribute
          </a>{" "}
          !
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {starterPacks.map((protocol) => (
          <ProtocolCard key={protocol.id} protocol={protocol} />
        ))}
      </div>
    </div>
  );
};

export default StarterPack;
