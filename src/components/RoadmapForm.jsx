import React, { useState } from 'react';

const RoadmapForm = ({ onSubmit }) => {
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = `${company}_${branch}`;
    onSubmit(key);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow max-w-lg mx-auto">
      <h2 className="text-xl font-semibold">🎯 Generate Your Preparation Roadmap</h2>

      <div>
        <label className="block font-medium">Branch</label>
        <select className="border p-2 rounded w-full" onChange={(e) => setBranch(e.target.value)}>
          <option value="">Select</option>
          <option value="Embedded">Embedded</option>
          <option value="SDE">SDE</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Year</label>
        <select className="border p-2 rounded w-full" onChange={(e) => setYear(e.target.value)}>
          <option value="">Select</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Target Company</label>
        <input
          type="text"
          className="border p-2 rounded w-full"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="e.g. Qualcomm, Microsoft"
        />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Generate Roadmap
      </button>
    </form>
  );
};

export default RoadmapForm;
