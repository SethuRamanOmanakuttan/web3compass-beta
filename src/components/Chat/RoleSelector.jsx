// src/components/Chat/RoleSelector.jsx
import React from "react";

const roles = [
  {
    category: "Technical Roles",
    roles: [
      "Solidity Developer/Smart Contract Engineer",
      "Blockchain Developer",
      "Frontend Web3 Developer",
      "Web3 Full-Stack Developer",
      "Blockchain Security Engineer/Auditor",
    ],
  },
  {
    category: "Non-Technical Roles",
    roles: [
      "Web3 Product Manager",
      "Web3 Community Manager",
      "Web3 Marketing Specialist",
      "Web3 UX/UI Designer",
      "Technical Writer for Web3",
    ],
  },
];

const RoleSelector = ({ selectedRole, setSelectedRole }) => {
  return (
    <select
      className='w-full border-3 border-retro-black p-2 bg-retro-white'
      value={selectedRole}
      onChange={(e) => setSelectedRole(e.target.value)}
    >
      <option value=''>Select a role</option>
      {roles.map((category) => (
        <optgroup key={category.category} label={category.category}>
          {category.roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
};

export default RoleSelector;
