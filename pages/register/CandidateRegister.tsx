import React, { useState } from 'react';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';

export const CandidateRegister: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 7;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const renderProgressBar = () => (
    <div className="flex justify-between mb-8 relative">
       <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 transform -translate-y-1/2"></div>
       {Array.from({ length: totalSteps }).map((_, i) => (
         <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${i + 1 <= step ? 'bg-blue-900 text-white' : 'bg-slate-200 text-slate-500'}`}>
           {i + 1 <= step && step > i + 1 ? <Check size={14}/> : i + 1}
         </div>
       ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl border border-slate-100 p-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2 text-center">Candidate Registration</h1>
        <p className="text-center text-slate-500 mb-8">Join thousands of professionals finding work daily.</p>
        
        {renderProgressBar()}

        <div className="min-h-[300px]">
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-bold text-slate-700">Authentication</h3>
              <input type="text" placeholder="Mobile Number" className="w-full border p-3 rounded-lg" />
              <button className="text-orange-600 text-sm font-medium">Send OTP</button>
              <input type="text" placeholder="Enter OTP" className="w-full border p-3 rounded-lg" />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-bold text-slate-700">Basic Details</h3>
              <div className="grid grid-cols-3 gap-2">
                <input type="text" placeholder="First Name" className="border p-3 rounded-lg" />
                <input type="text" placeholder="Middle" className="border p-3 rounded-lg" />
                <input type="text" placeholder="Last Name" className="border p-3 rounded-lg" />
              </div>
              <input type="email" placeholder="Email ID" className="w-full border p-3 rounded-lg" />
              <select className="w-full border p-3 rounded-lg bg-white">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input type="date" className="w-full border p-3 rounded-lg" />
            </div>
          )}

          {step === 3 && (
             <div className="space-y-4 animate-fade-in">
             <h3 className="text-lg font-bold text-slate-700">Location</h3>
             <select className="w-full border p-3 rounded-lg bg-white"><option>Select State</option></select>
             <select className="w-full border p-3 rounded-lg bg-white"><option>Select City</option></select>
             <input type="text" placeholder="Pin Code" className="w-full border p-3 rounded-lg" />
           </div>
          )}

          {/* Steps 4, 5, 6, 7 would follow similar patterns. Simplified for brevity in this output. */}
          {step >= 4 && step < 7 && (
             <div className="space-y-4 animate-fade-in text-center pt-10">
                <p className="text-slate-500">Placeholder for Step {step}: Education/Experience Details</p>
                <p className="text-xs text-slate-400">Forms for Education, Experience, and Skills go here.</p>
             </div>
          )}

          {step === 7 && (
            <div className="space-y-6 animate-fade-in">
               <h3 className="text-lg font-bold text-slate-700">Upload & Finalize</h3>
               <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50">
                 <p className="text-slate-500 mb-2">Drag and drop your resume here or click to browse</p>
                 <input type="file" className="hidden" id="file-upload" />
                 <label htmlFor="file-upload" className="bg-white border border-slate-300 px-4 py-2 rounded shadow-sm cursor-pointer hover:bg-slate-50">Browse Files</label>
               </div>
               
               <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between">
                 <span className="text-blue-900 font-medium">Use AI to generate resume from my data?</span>
                 <button className="bg-orange-600 text-white px-4 py-1.5 rounded text-sm">Generate</button>
               </div>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8 pt-4 border-t border-slate-100">
           <button 
             onClick={prevStep} 
             disabled={step === 1}
             className={`flex items-center px-6 py-2 rounded-lg font-medium ${step === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'}`}
            >
             <ChevronLeft size={18} className="mr-1"/> Back
           </button>
           
           {step < totalSteps ? (
             <button onClick={nextStep} className="flex items-center bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800">
               Next <ChevronRight size={18} className="ml-1"/>
             </button>
           ) : (
             <button className="bg-green-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-green-700 shadow-lg">
               Submit Registration
             </button>
           )}
        </div>
      </div>
    </div>
  );
};
