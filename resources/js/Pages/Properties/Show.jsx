import React from "react";
import { usePage } from "@inertiajs/react";

export default function Show() {
  const { property } = usePage().props;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images */}
        <div className="space-y-4">
          {property.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={property.title}
              className="rounded-xl shadow-md w-full object-cover"
            />
          ))}
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{property.title}</h1>
          <p className="text-gray-600 mb-4">{property.description}</p>

          <div className="mb-4">
            <span className="text-lg font-semibold text-gray-900">
              ${property.price_per_night}
            </span>{" "}
            <span className="text-gray-500">/ night</span>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Amenities</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {property.amenities.map((amenity, idx) => (
                <li
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-gray-500">
            <p>
              Located in <span className="font-medium">{property.city?.name}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
