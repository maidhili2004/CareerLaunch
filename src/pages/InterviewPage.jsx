
import React from 'react';
import QuizSection from '../components/QuizSection';
import BehavioralSection from '../components/BehavioralSection';
import CodingSection from '../components/CodingSection';

const InterviewPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <QuizSection />
      <BehavioralSection />
      <CodingSection />
    </div>
  );
};

export default InterviewPage;
