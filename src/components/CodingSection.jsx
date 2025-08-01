
import React from 'react';
import links from '../data/codingLinks.json';

const CodingSection = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">💻 Coding Practice</h2>
      <ul className="list-disc list-inside space-y-2">
        {links.map((item, idx) => (
          <li key={idx}>
            <a href={item.url} target="_blank" rel="noreferrer" className="text-blue-600 underline">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodingSection;
