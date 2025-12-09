import React from 'react';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">JN</div>
          <h2 className="text-2xl font-bold text-slate-800">Welcome Back</h2>
          <p className="text-slate-500">Login to access your dashboard</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input type="email" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-900" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-900" />
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center text-slate-600">
              <input type="checkbox" className="mr-2 rounded text-blue-900" /> Remember me
            </label>
            <a href="#" className="text-orange-600 hover:underline">Forgot Password?</a>
          </div>

          <button className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Don't have an account? <Link to="/register/candidate" className="text-blue-900 font-bold hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
};
