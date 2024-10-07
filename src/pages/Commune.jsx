import React, { useState } from "react";
import CommuneSearch from "../components/Commune/CommuneSearch";
import CommunityCard from "../components/Commune/CommunityCard";
import { useCommunities } from "../hooks/useCommunities";

const Commune = () => {
  const { communities, loading, error } = useCommunities();
  const [filteredCommunities, setFilteredCommunities] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = communities.filter(
      (community) =>
        community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        community.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCommunities(filtered);
  };

  if (loading) return <div className='text-center'>Loading communities...</div>;
  if (error)
    return (
      <div className='text-center text-red-500'>
        Error loading communities: {error.message}
      </div>
    );

  return (
    <div>
      <div className='mb-8'>
        <h1 className='text-4xl font-retro mb-2'>Compass Connect</h1>
        <p className='text-lg text-mid-grey'>
          Building the biggest Web3 community directory. Feel free to{" "}
          <a
            className=' italic underline'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/The-Web3-Compass/web3-compass-data-repository'
          >
            contribute
          </a>{" "}
          !
        </p>
      </div>

      <CommuneSearch onSearch={handleSearch} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {(filteredCommunities.length > 0
          ? filteredCommunities
          : communities
        ).map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </div>
    </div>
  );
};

export default Commune;
