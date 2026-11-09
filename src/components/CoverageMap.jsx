import React, { useState } from 'react';
import { MapPin, Check, Search, Navigation } from 'lucide-react';
import { BRUSSELS_COMMUNES, BELGIAN_CITIES } from '../data/communes';

export default function CoverageMap({ onSelectLocation }) {
  const [activeTab, setActiveTab] = useState('brussels');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCommunes = BRUSSELS_COMMUNES.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.zip.includes(searchTerm)
  );

  const filteredCities = BELGIAN_CITIES.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.zip.includes(searchTerm)
  );

  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Navigation className="w-3.5 h-3.5 text-sky-600" />
            <span>Belgian Coverage Zones</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Rapid Dispatch Across Brussels & Belgium
          </h3>
          <p className="text-slate-600 text-sm mt-2">
            Click your commune or city to automatically pre-fill your plumbing request.
          </p>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto mb-8">
          <div className="flex items-center bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('brussels')}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs font-bold transition ${
                activeTab === 'brussels'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              19 Brussels Communes
            </button>
            <button
              onClick={() => setActiveTab('belgium')}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-xs font-bold transition ${
                activeTab === 'belgium'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Other Belgian Cities
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search postcode or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-sky-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Communes / Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {(activeTab === 'brussels' ? filteredCommunes : filteredCities).map((item) => (
            <button
              key={item.zip + item.name}
              onClick={() => onSelectLocation(`${item.zip} ${item.name.split('/')[0].trim()}`)}
              className="p-3 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 rounded-xl text-left transition flex items-center justify-between group cursor-pointer"
            >
              <div className="truncate">
                <div className="text-xs font-bold text-slate-900 group-hover:text-sky-700 truncate">
                  {item.name.split('/')[0].trim()}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  {item.zip}
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            </button>
          ))}
        </div>

        <div className="text-center mt-6 text-xs text-slate-500">
          Looking for assistance in an unlisted Belgian municipality? We coordinate calls nationwide.
        </div>
      </div>
    </section>
  );
}

