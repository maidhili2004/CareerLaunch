import React from 'react';
import { useResume } from '../data/resumeDataContext';
import html2pdf from 'html2pdf.js';

const ResumePreview = () => {
  const { formData } = useResume();

  const exportPDF = () => {
    const element = document.getElementById('resume-preview');
    html2pdf().from(element).save('My_Resume.pdf');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-end mb-4">
        <button onClick={exportPDF} className="bg-blue-600 text-white px-4 py-2 rounded">
          📥 Download PDF
        </button>
      </div>

      <div id="resume-preview" className="bg-white p-6 shadow rounded">
        <h1 className="text-2xl font-bold">{formData.name}</h1>
        <p>{formData.email} | {formData.phone}</p>
        <hr className="my-2" />
        <p><strong>Summary:</strong> {formData.summary}</p>
        <p><strong>Education:</strong> {formData.education}</p>
        <p><strong>Experience:</strong> {formData.experience}</p>
        <p><strong>Skills:</strong> {formData.skills}</p>
      </div>
    </div>
  );
};

export default ResumePreview;
