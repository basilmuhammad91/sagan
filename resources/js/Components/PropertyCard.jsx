import React from "react";

export default function PropertyCard({ property }) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-4">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={property.images[0] ?? "https://via.placeholder.com/400x250"}
            alt={property.title}
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute bottom-3 left-3">
            <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-white/20">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ${property.price_per_night}
              </span>
              <span className="text-xs text-slate-600 ml-1">/night</span>
            </div>
          </div>

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/20 hover:bg-white transition-colors">
              <svg className="w-5 h-5 text-slate-600 hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <div>
            <h2 className="text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors line-clamp-1">
              {property.title}
            </h2>
            <p className="text-sm text-slate-500 line-clamp-2 mt-1 leading-relaxed">
              {property.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">{property.city?.name}</span>
            </div>

            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-slate-600">4.8</span>
            </div>
          </div>

          <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center justify-center py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-blue-500/25">
              <span>View Details</span>
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
