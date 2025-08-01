import React, { useState } from 'react';

const behavioralQuestions = [
  "Tell me about yourself.",
  "Describe a challenging situation and how you overcame it.",
  "Why do you want to work at our company?",
  "What is your greatest strength?",
  "Tell me about a time you worked in a team.",
];

const BehavioralSection = () => {
  const [answers, setAnswers] = useState(Array(behavioralQuestions.length).fill(''));

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log('Submitted Answers:', answers);
    alert('📝 Your responses have been saved!');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-10 mt-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
        💬 Behavioral Interview Questions
      </h2>

      <form className="space-y-6">
        {behavioralQuestions.map((question, index) => (
          <div key={index}>
            <label className="block text-gray-700 font-semibold mb-2">
              {index + 1}. {question}
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[100px]"
              placeholder="Write your answer here..."
              value={answers[index]}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}

        <div className="text-center pt-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-colors"
          >
            Save Answers
          </button>
        </div>
      </form>
    </div>
  );
};

export default BehavioralSection;
