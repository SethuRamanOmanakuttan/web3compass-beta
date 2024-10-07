// src/components/StarterPack/Roadmap.js
import React from "react";

const Roadmap = ({ resources }) => (
  <div className='mt-8'>
    <h3 className='text-2xl font-bold mb-4'>Learning Roadmap</h3>
    {resources.map((level, index) => (
      <div key={index} className='mb-6'>
        <h4 className='text-xl font-semibold mb-2'>{level.level}</h4>
        <ul className='list-disc ml-6'>
          {level.items.map((item, itemIndex) => (
            <li key={itemIndex} className='mb-2'>
              <a
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-retro-accent'
              >
                {item.title}
              </a>
              <p className='text-sm text-gray-600 mt-1'>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Roadmap;
