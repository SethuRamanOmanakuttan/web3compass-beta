// src/components/Chat/LearningPlanDisplay.jsx
import React from "react";
import ReactMarkdown from "react-markdown";
import Button from "../common/Button";
import { jsPDF } from "jspdf";

const LearningPlanDisplay = ({ learningPlan, onClose }) => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const splitText = doc.splitTextToSize(learningPlan, 180);
    doc.text(splitText, 15, 15);

    doc.save("learning-plan.pdf");
  };

  return (
    <div className='p-4'>
      <h2 className='text-4xl font-bold mb-6 font-Tourney'>
        3-week Learning Chart
      </h2>
      <div className='prose prose-lg prose-retro max-w-full overflow-y-auto max-h-[60vh]'>
        <ReactMarkdown>{learningPlan}</ReactMarkdown>
      </div>
      <div className='mt-8 flex justify-between'>
        <Button onClick={onClose} className='px-6 py-2 bg-retro-accent'>
          Close
        </Button>
        {/* <Button
          onClick={handleDownloadPDF}
          className='px-6 py-2 bg-retro-accent'
        >
          Download PDF
        </Button> */}
      </div>
    </div>
  );
};

export default LearningPlanDisplay;
