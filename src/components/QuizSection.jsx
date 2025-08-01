
import React, { useState } from 'react';
import questions from '../data/quiz.json';

const QuizSection = () => {
  const [selected, setSelected] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleOption = (qid, index) => {
    setSelected({ ...selected, [qid]: index });
  };

  const checkAnswers = () => {
    setShowResult(true);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">📝 Technical Quiz</h2>
      {questions.map((q, idx) => (
        <div key={idx} className="mb-4">
          <p className="font-medium">{idx + 1}. {q.question}</p>
          <ul className="space-y-1">
            {q.options.map((opt, i) => (
              <li key={i}>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`q-${idx}`}
                    onChange={() => handleOption(idx, i)}
                  />
                  {opt}
                </label>
              </li>
            ))}
          </ul>
          {showResult && (
            <p className={`text-sm mt-1 ${selected[idx] === q.correct ? 'text-green-600' : 'text-red-600'}`}>
              {selected[idx] === q.correct ? '✅ Correct' : `❌ Incorrect (Correct: ${q.options[q.correct]})`}
            </p>
          )}
        </div>
      ))}
      <button onClick={checkAnswers} className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Answers
      </button>
    </div>
  );
};

export default QuizSection;
