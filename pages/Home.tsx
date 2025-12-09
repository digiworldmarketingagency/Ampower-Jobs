import React from 'react';
import { Search, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Office Collaboration" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>

        <div className="relative container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Find Your <span className="text-orange-500">Dream Job</span> Today
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Connecting professionals with industry leaders. Use our AI-powered portal to launch your career.
          </p>

          {/* Search Component */}
          <div className="bg-white p-4 rounded-xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center border border-slate-200 rounded-lg px-3 py-2">
              <Search className="text-slate-400 mr-2" size={20} />
              <input type="text" placeholder="Job Title, Keyword or Company" className="w-full outline-none text-slate-700" />
            </div>
            <div className="flex-1 flex items-center border border-slate-200 rounded-lg px-3 py-2">
              <MapPin className="text-slate-400 mr-2" size={20} />
              <input type="text" placeholder="City or Pin Code" className="w-full outline-none text-slate-700" />
            </div>
            <div className="w-full md:w-48">
              <select className="w-full h-full border border-slate-200 rounded-lg px-3 py-2 text-slate-700 outline-none bg-white">
                <option>All Categories</option>
                <option>IT / Software</option>
                <option>Finance</option>
                <option>Marketing</option>
              </select>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg">
              Find Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Stats / Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Live Jobs', val: '2,500+' },
              { label: 'Companies', val: '450+' },
              { label: 'Candidates', val: '15k+' },
              { label: 'Success Stories', val: '8,000+' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="text-3xl font-bold text-blue-900 mb-1">{stat.val}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">Featured Jobs</h2>
            <Link to="/jobs" className="text-orange-600 font-semibold hover:underline flex items-center">View All <ArrowRight size={16} className="ml-1"/></Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-slate-100 group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-lg overflow-hidden">
                     <img src={`https://picsum.photos/seed/${i + 10}/200`} alt="logo" className="w-full h-full object-cover"/>
                  </div>
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">Full Time</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-900">Senior React Developer</h3>
                <p className="text-slate-500 text-sm mb-4">TechSolutions Inc. • Bangalore</p>
                <div className="flex items-center text-slate-400 text-sm mb-6">
                  <Briefcase size={14} className="mr-1" /> 3-5 Years Exp
                </div>
                <button className="w-full py-2 border border-blue-900 text-blue-900 rounded-lg font-medium hover:bg-blue-900 hover:text-white transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog & Events Teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
           {/* Upcoming Events */}
           <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                 {[1, 2].map(i => (
                   <div key={i} className="flex gap-4 items-center bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold uppercase">Dec</span>
                        <span className="text-xl font-bold">{10 + i}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Global Tech Job Fair 2025</h4>
                        <p className="text-sm text-slate-500">Mumbai Convention Centre • 10:00 AM</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Latest News */}
           <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Latest Resources</h2>
              <div className="space-y-4">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="group cursor-pointer">
                      <h4 className="font-bold text-slate-800 group-hover:text-orange-600 transition">How AI is Reshaping the Recruitment Landscape</h4>
                      <p className="text-sm text-slate-500 line-clamp-1">Discover the tools and strategies that modern HR teams are using...</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
