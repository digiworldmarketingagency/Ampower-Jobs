import React, { useState } from 'react';
import { FileText, Video, Download, Edit, Wand2 } from 'lucide-react';
import { generateResumeContent } from '../services/geminiService';
import { ResumeData } from '../types';

export const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'resume' | 'tips'>('resume');
  
  // Resume Builder State
  const [resumeStep, setResumeStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResume, setGeneratedResume] = useState<string>('');
  
  const [formData, setFormData] = useState<ResumeData>({
    fullName: '', email: '', phone: '', summary: '', experience: [], education: [], skills: []
  });

  const handleResumeGenerate = async () => {
    setIsGenerating(true);
    const result = await generateResumeContent(formData);
    setGeneratedResume(result);
    setIsGenerating(false);
  };

  const MockVideoPlaceholder = ({ title }: { title: string }) => (
    <div className="bg-slate-900 aspect-video rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
      <div className="text-center">
        <Video size={48} className="mx-auto mb-2 opacity-50" />
        <p className="font-medium">{title}</p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200 inline-flex">
          <button 
            onClick={() => setActiveTab('resume')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'resume' ? 'bg-blue-900 text-white shadow' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            AI Resume Builder
          </button>
          <button 
            onClick={() => setActiveTab('tips')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === 'tips' ? 'bg-blue-900 text-white shadow' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            Interview Grooming
          </button>
        </div>
      </div>

      {activeTab === 'resume' && (
        <div className="max-w-4xl mx-auto">
          {!generatedResume ? (
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <Wand2 size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Build Your Resume with AI</h2>
                  <p className="text-slate-500">Fill in the details, and Gemini will craft a professional resume for you.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" placeholder="Full Name" className="border p-3 rounded-lg"
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                  <input 
                    type="email" placeholder="Email" className="border p-3 rounded-lg"
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    type="text" placeholder="Phone" className="border p-3 rounded-lg"
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                  <input 
                    type="text" placeholder="Top 3 Skills (comma separated)" className="border p-3 rounded-lg"
                    onChange={e => setFormData({...formData, skills: e.target.value.split(',')})}
                  />
                </div>
                <textarea 
                  placeholder="Professional Summary / Objectives (Draft)" 
                  className="w-full border p-3 rounded-lg h-24"
                  onChange={e => setFormData({...formData, summary: e.target.value})}
                ></textarea>
                
                {/* Simplified Experience Input for MVP */}
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-sm text-slate-700">Latest Experience</h3>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                     <input type="text" placeholder="Company" className="border p-2 rounded" 
                       onChange={e => {
                         const newExp = [...formData.experience];
                         if(!newExp[0]) newExp[0] = { company: '', role: '', duration: '', details: ''};
                         newExp[0].company = e.target.value;
                         setFormData({...formData, experience: newExp});
                       }}
                     />
                     <input type="text" placeholder="Role" className="border p-2 rounded" 
                       onChange={e => {
                        const newExp = [...formData.experience];
                        if(!newExp[0]) newExp[0] = { company: '', role: '', duration: '', details: ''};
                        newExp[0].role = e.target.value;
                        setFormData({...formData, experience: newExp});
                      }}
                     />
                  </div>
                  <input type="text" placeholder="Key Achievement" className="w-full border p-2 rounded" 
                     onChange={e => {
                      const newExp = [...formData.experience];
                      if(!newExp[0]) newExp[0] = { company: '', role: '', duration: '', details: ''};
                      newExp[0].details = e.target.value;
                      setFormData({...formData, experience: newExp});
                    }}
                  />
                </div>

                <button 
                  onClick={handleResumeGenerate}
                  disabled={isGenerating}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition flex items-center justify-center gap-2"
                >
                  {isGenerating ? 'Generating with Gemini...' : 'Generate Resume Now'}
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h3 className="text-xl font-bold text-slate-800">Your AI Generated Resume</h3>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-slate-50 text-sm">
                    <Edit size={16}/> Edit
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 text-sm">
                    <Download size={16}/> Download DOCX
                  </button>
                </div>
              </div>
              <div className="prose max-w-none bg-slate-50 p-6 rounded border font-mono text-sm whitespace-pre-wrap">
                {generatedResume}
              </div>
              <button 
                onClick={() => setGeneratedResume('')}
                className="mt-6 text-slate-500 text-sm hover:underline"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'tips' && (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Interview Grooming</h2>
            <div className="prose text-slate-600">
              <p>Prepare for your dream job with our curated video content and expert guides.</p>
              <ul className="list-disc ml-5 space-y-2 mt-4">
                <li>Body language basics</li>
                <li>Answering the "Tell me about yourself" question</li>
                <li>Virtual interview etiquette</li>
              </ul>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Google Meet Practice</h3>
              <p className="text-sm text-blue-800 mb-4">Generate a mock interview link to practice with a peer.</p>
              <div className="flex gap-2">
                <input type="text" placeholder="Topic (e.g. React Mock)" className="flex-1 border border-blue-200 rounded px-3 py-2" />
                <button className="bg-blue-900 text-white px-4 py-2 rounded text-sm font-medium">Generate Link</button>
              </div>
            </div>
          </div>
          <div>
            <MockVideoPlaceholder title="Mastering the HR Round" />
            <MockVideoPlaceholder title="Technical Interview Prep" />
          </div>
        </div>
      )}
    </div>
  );
};
