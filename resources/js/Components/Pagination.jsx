import React from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({ meta }) {
  if (!meta || meta.last_page <= 1) return null;

  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: meta.last_page }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`?page=${page}`}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
            meta.current_page === page
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}
