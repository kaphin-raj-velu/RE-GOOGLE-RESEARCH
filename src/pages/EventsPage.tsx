import React, { useState } from 'react';
import { EVENTS } from '../data';
import { Calendar, MapPin, Clock, Users, ArrowRight, ClipboardCheck, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const EVENT_IMAGES: { [key: string]: string } = {
  'event-icon-2026': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
  'event-talk-epigraphy': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
  'event-workshop-composites': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
};

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);

  const filteredEvents = EVENTS.filter((e) => e.status === activeTab);

  const toggleRegister = (id: string) => {
    if (registeredEvents.includes(id)) {
      setRegisteredEvents((prev) => prev.filter((itemUrl) => itemUrl !== id));
    } else {
      setRegisteredEvents((prev) => [...prev, id]);
    }
  };

  return (
    <div className="w-full font-sans text-[#202124]">
      {/* 1:1 Google Research Replica Editorial Title Header */}
      <PageHeader 
        category="ACADEMIC MEETING CONVENTIONS"
        title="Research Events"
        description="Participate in globally indexable conferences, physical materials science bootcamps, and weekly dialogues bridging student research with state historians."
        accentColor="yellow"
        gradientTheme="red"
        images={[
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=500&auto=format&fit=crop"
        ]}
      />

      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-20">

      {/* Tabs list selector */}
      <div className="flex items-center space-x-2 border-b border-[#DADCE0] pb-6 mb-10">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-5 py-2.5 rounded-lg text-[15px] font-semibold cursor-pointer transition-all ${
            activeTab === 'upcoming'
              ? 'bg-[#EA4335]/5 text-[#EA4335] border border-[#EA4335]/20'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Upcoming Forums Or Seminars
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-5 py-2.5 rounded-lg text-[15px] font-semibold cursor-pointer transition-all ${
            activeTab === 'past'
              ? 'bg-[#EA4335]/5 text-[#EA4335] border border-[#EA4335]/20'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Completed Activity Registry
        </button>
      </div>

      {/* Main rendering list */}
      <div className="space-y-10 max-w-[1020px]">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-[#F8F9FA] rounded-xl border border-[#DADCE0]">
            <p className="text-[#5F6368]">No events listed in this sector.</p>
          </div>
        ) : (
          filteredEvents.map((element) => {
            const isRegistered = registeredEvents.includes(element.id);
            return (
              <div
                key={element.id}
                className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row items-stretch"
                id={`event-item-${element.id}`}
              >
                {/* Event visual preview banner */}
                <div className="w-full md:w-[280px] shrink-0 min-h-[220px] relative select-none bg-gray-100">
                  <img 
                    src={EVENT_IMAGES[element.id] || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&auto=format&fit=crop"} 
                    alt={element.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Header block info */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[#DADCE0]">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-xs font-bold text-[#EA4335] uppercase tracking-wider">
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>Scientific {element.type}</span>
                        </div>

                        <h2 className="font-display text-[20px] md:text-[23px] font-bold text-[#202124] tracking-tight leading-snug">
                          {element.title}
                        </h2>
                      </div>

                      {element.status === 'upcoming' && (
                        <button
                          onClick={() => toggleRegister(element.id)}
                          className={`shrink-0 text-xs font-semibold px-4.5 py-3 rounded-lg tracking-wider uppercase flex items-center gap-1.5 cursor-pointer select-none transition-all ${
                            isRegistered 
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                              : 'bg-[#202124] hover:bg-black text-white'
                          }`}
                        >
                          <ClipboardCheck className="h-4 w-4" />
                          <span>{isRegistered ? 'Seat Reserved' : 'Secure Seat Slot'}</span>
                        </button>
                      )}
                    </div>

                    {/* Coordinates block */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[13px] text-gray-700 bg-[#F8F9FA] p-3 rounded-xl border border-[#DADCE0] mt-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-[#EA4335] shrink-0" />
                        <span>{element.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500 shrink-0" />
                        <span className="font-mono text-xs">{element.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-orange-600 shrink-0" />
                        <span className="truncate">{element.venue}</span>
                      </div>
                    </div>

                    {/* Key Speaker & Details */}
                    <div className="space-y-3 mt-4">
                      {element.speaker && (
                        <div className="text-[14px] font-medium text-gray-900 bg-gray-50 px-3 py-1.5 rounded border border-[#DADCE0] inline-block">
                          <span className="text-[10px] text-gray-400 block font-bold uppercase tracking-wide">DISTINGUISHED SPEAKER</span>
                          {element.speaker}
                        </div>
                      )}
                      
                      <p className="text-[15px] text-[#5F6368] leading-relaxed">
                        {element.description}
                      </p>
                    </div>
                  </div>

                  {/* Detailed Agenda */}
                  <div className="pt-4 border-t border-[#DADCE0]/60 space-y-2">
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">Session Plan Agenda</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[13px] text-gray-700 font-medium">
                      {element.agenda.map((ag, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-[#EA4335] mr-2 font-bold shrink-0">{idx + 1}.</span>
                          <span className="line-clamp-1">{ag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
    </div>
  );
}
