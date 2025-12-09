import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const Events: React.FC = () => {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');

  const events = [
    { id: 1, title: 'Mega Job Fair 2025', date: '2025-12-15', location: 'Mumbai', type: 'upcoming', desc: 'Over 50 companies recruiting on spot.' },
    { id: 2, title: 'Tech Skills Workshop', date: '2026-01-20', location: 'Online', type: 'upcoming', desc: 'Learn the latest in AI and React.' },
    { id: 3, title: 'Finance Summit', date: '2024-10-10', location: 'Delhi', type: 'past', desc: 'Networking for finance professionals.' },
  ];

  const filteredEvents = events.filter(e => e.type === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800">Events Calendar</h1>
        <select 
          className="border border-slate-300 rounded-lg px-4 py-2 bg-white text-slate-700"
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'upcoming' | 'past')}
        >
          <option value="upcoming">Upcoming Events</option>
          <option value="past">Past Events</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 flex flex-col">
            <div className="h-40 bg-blue-900 flex items-center justify-center relative overflow-hidden">
               <img src={`https://picsum.photos/seed/${event.id + 50}/400/200`} alt="Event" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
               <div className="relative z-10 text-white text-center">
                 <h3 className="text-2xl font-bold">{new Date(event.date).getDate()}</h3>
                 <span className="uppercase tracking-widest text-sm">
                    {new Date(event.date).toLocaleString('default', { month: 'short' })}
                 </span>
               </div>
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
              <p className="text-slate-500 mb-4 text-sm">{event.desc}</p>
              
              <div className="space-y-2 text-sm text-slate-600 mb-6">
                <div className="flex items-center"><MapPin size={16} className="mr-2 text-orange-500"/> {event.location}</div>
                <div className="flex items-center"><Clock size={16} className="mr-2 text-orange-500"/> 10:00 AM - 5:00 PM</div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100">
               <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition">
                 {filter === 'upcoming' ? 'Register Now' : 'View Highlights'}
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
