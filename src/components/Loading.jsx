import React from "react";

export default function Loading() {
  return (
    <div className="text-center my-6">
      <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
      <p className="mt-2 text-gray-600">Loading...</p>
    </div>
  );
}
