import React, { useState } from 'react';
import RoadmapForm from '../components/RoadmapForm';
import RoadmapTimeline from '../components/RoadmapTimeline';
import roadmaps from '../data/roadmaps.json';

const RoadmapPage = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  const handleSubmit = (key) => {
    const data = roadmaps[key];
    setSelectedRoadmap(data || []);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <RoadmapForm onSubmit={handleSubmit} />
      <RoadmapTimeline roadmap={selectedRoadmap} />
    </div>
  );
};

export default RoadmapPage;
