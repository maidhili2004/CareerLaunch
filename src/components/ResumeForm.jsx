import React from 'react';
import { useResume } from '../data/resumeDataContext';

const ResumeForm = () => {
  const { formData, setFormData } = useResume();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Fill Your Resume Details</h2>
      {[
        { label: 'Name', name: 'name' },
        { label: 'Email', name: 'email' },
        { label: 'Phone', name: 'phone' },
        { label: 'Summary', name: 'summary' },
        { label: 'Education', name: 'education' },
        { label: 'Experience', name: 'experience' },
        { label: 'Skills', name: 'skills' }
      ].map((field) => (
        <div key={field.name}>
          <label className="block font-medium">
            {field.label}
            <span className="text-sm text-gray-500 ml-2">
              {/* 🧠 Tooltip as inline text for now */}
              (e.g., Enter a brief {field.label.toLowerCase()})
            </span>
          </label>
          <textarea
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={field.name === 'summary' ? 4 : 2}
          />
        </div>
      ))}
    </div>
  );
};

export default ResumeForm;
