import React from "react";
import { usePage, Link } from "@inertiajs/react";
import PropertyCard from "@/Components/PropertyCard";
import Pagination from "@/Components/Pagination";
import AppLayout from "@/Layouts/AppLayout";

export default function Index() {
  const { properties, filters } = usePage().props;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Available Properties</h1>

      {properties.data.length === 0 ? (
        <p className="text-gray-500">No properties found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.data.map((property) => (
            <Link href={route("properties.show", property.id)} key={property.id}>
              <PropertyCard property={property} />
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8">
        <Pagination meta={properties.meta} />
      </div>
    </div>
  );
}

// Apply layout like Vue pages
Index.layout = (page) => <AppLayout children={page} />;
