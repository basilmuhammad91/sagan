import React from "react";

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <div className="relative">
        <img
          src={property.images[0] ?? "https://via.placeholder.com/400x250"}
          alt={property.title}
          className="rounded-lg w-full h-48 object-cover"
        />
        <span className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-lg text-sm font-semibold text-gray-800 shadow">
          ${property.price_per_night}/night
        </span>
      </div>
      <div className="mt-3 flex-1">
        <h2 className="text-lg font-semibold text-gray-800">{property.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{property.description}</p>
        <div className="mt-2 text-sm text-gray-600">
          {property.city?.name}
        </div>
      </div>
    </div>
  );
}
