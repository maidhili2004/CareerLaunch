import React from 'react';

const RoadmapTimeline = ({ roadmap }) => {
  if (!roadmap) return null;

  return (
    <div className="mt-8 max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-bold mb-4">📚 Your Roadmap</h2>
      <ol className="border-l-4 border-blue-600 pl-4">
        {roadmap.map((item, index) => (
          <li key={index} className="mb-6">
            <div className="text-lg font-semibold">{item.topic}</div>
            <div className="text-sm text-gray-500">Duration: {item.duration}</div>
            {item.resources && (
              <ul className="list-disc list-inside mt-1 text-sm text-blue-700">
                {item.resources.map((res, i) => (
                  <li key={i}>
                    <a href={res} target="_blank" rel="noopener noreferrer" className="underline">
                      {res}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RoadmapTimeline;
