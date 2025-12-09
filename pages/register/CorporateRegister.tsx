import React from 'react';

export const CorporateRegister: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl border border-slate-100 p-8">
          <h1 className="text-2xl font-bold text-blue-900 mb-6 border-b pb-4">Corporate Registration</h1>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
                  <input type="text" className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"/>
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">GST No *</label>
                  <input type="text" className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"/>
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Contact Person *</label>
                  <input type="text" className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"/>
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Official Email *</label>
                  <input type="email" className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"/>
               </div>
            </div>

            <div>
               <label className="block text-sm font-medium text-slate-700 mb-1">Company Address *</label>
               <textarea className="w-full border p-2.5 rounded-lg h-24 focus:ring-2 focus:ring-blue-900 outline-none"></textarea>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
               <input type="checkbox" id="terms" className="w-5 h-5 text-blue-900 rounded"/>
               <label htmlFor="terms" className="text-sm text-slate-600">I agree to the Terms & Conditions and certify the information is authentic.</label>
            </div>

            <button type="button" className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition">
              Submit for Approval
            </button>
          </form>
       </div>
    </div>
  );
};
