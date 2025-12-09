import React, { useState } from 'react';
import { LayoutDashboard, FileCheck, Users, Briefcase, FileText, Mail, LogOut } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const AdminDashboard: React.FC = () => {
  const [activeModule, setActiveModule] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'approvals', label: 'Approvals', icon: FileCheck },
    { id: 'reports', label: 'Reports', icon: Users },
    { id: 'jobs', label: 'Job Posting', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'email', label: 'E-Mail Marketing', icon: Mail },
  ];

  const data = [
    { name: 'Jan', candidates: 400, jobs: 240 },
    { name: 'Feb', candidates: 300, jobs: 139 },
    { name: 'Mar', candidates: 200, jobs: 980 },
    { name: 'Apr', candidates: 278, jobs: 390 },
    { name: 'May', candidates: 189, jobs: 480 },
  ];

  const renderContent = () => {
    switch (activeModule) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Admin Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-slate-500 text-sm font-medium">Pending Corporate Approvals</h3>
                <p className="text-3xl font-bold text-orange-600 mt-2">12</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-slate-500 text-sm font-medium">Active Jobs</h3>
                <p className="text-3xl font-bold text-blue-900 mt-2">1,240</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-slate-500 text-sm font-medium">New Candidates (Today)</h3>
                <p className="text-3xl font-bold text-green-600 mt-2">45</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 h-80">
              <h3 className="text-slate-800 font-bold mb-4">Registration Trends</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="candidates" fill="#1e3a8a" />
                  <Bar dataKey="jobs" fill="#ea580c" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      case 'approvals':
        return (
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Pending Approvals</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
               <table className="w-full text-left border-collapse">
                 <thead className="bg-slate-50">
                   <tr>
                     <th className="p-4 text-sm font-bold text-slate-600">Entity</th>
                     <th className="p-4 text-sm font-bold text-slate-600">Type</th>
                     <th className="p-4 text-sm font-bold text-slate-600">Date</th>
                     <th className="p-4 text-sm font-bold text-slate-600">Action</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                   <tr>
                     <td className="p-4">Acme Corp Ltd.</td>
                     <td className="p-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Corporate</span></td>
                     <td className="p-4 text-slate-500">Oct 24, 2025</td>
                     <td className="p-4 flex gap-2">
                       <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium hover:bg-green-200">Approve</button>
                       <button className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm font-medium hover:bg-red-200">Reject</button>
                     </td>
                   </tr>
                   <tr>
                     <td className="p-4">Java Developer (Senior)</td>
                     <td className="p-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Job Post</span></td>
                     <td className="p-4 text-slate-500">Oct 23, 2025</td>
                     <td className="p-4 flex gap-2">
                       <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium hover:bg-green-200">Approve</button>
                       <button className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm font-medium hover:bg-red-200">Reject</button>
                     </td>
                   </tr>
                 </tbody>
               </table>
            </div>
          </div>
        );
      default:
        return <div className="p-8 text-center text-slate-500">Module {activeModule} placeholder.</div>;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold tracking-tight border-b border-blue-800">JN Admin</div>
        <nav className="flex-1 py-6 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`w-full flex items-center px-6 py-3 transition ${activeModule === item.id ? 'bg-orange-600' : 'hover:bg-blue-800'}`}
            >
              <item.icon size={18} className="mr-3"/>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-blue-800">
          <button className="flex items-center text-blue-300 hover:text-white transition">
            <LogOut size={18} className="mr-2"/> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {renderContent()}
      </main>
    </div>
  );
};
