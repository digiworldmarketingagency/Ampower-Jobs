import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">About JobNexus & The EAC</h1>
      
      <div className="prose prose-lg text-slate-600">
        <p className="mb-6">
          Welcome to JobNexus, a premier initiative driven by the **Employment Assistance Cell (EAC)**. 
          Our mission is to bridge the gap between skilled talent and visionary organizations worldwide.
        </p>
        
        <img 
          src="https://picsum.photos/800/400?grayscale" 
          alt="Team Meeting" 
          className="w-full rounded-xl shadow-lg mb-8"
        />

        <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
        <p className="mb-6">
          To empower individuals by providing accessible, high-quality career resources and connecting them with 
          ethical employers. We believe in transparency, skill development, and equal opportunity for all candidates.
        </p>

        <h3 className="text-2xl font-bold text-slate-800 mb-4">What is the EAC?</h3>
        <p className="mb-6">
          The Employment Assistance Cell acts as a central hub for coordinating placement activities. 
          We organize job fairs, conduct grooming sessions, and manage a robust database of verified corporate partners.
        </p>

        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 mt-8">
          <h4 className="font-bold text-orange-800 mb-2">Our Core Values</h4>
          <ul className="list-disc list-inside space-y-2 text-orange-900">
            <li>Integrity in Recruitment</li>
            <li>Innovation through Technology</li>
            <li>Inclusivity & Diversity</li>
            <li>Candidate-First Approach</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
