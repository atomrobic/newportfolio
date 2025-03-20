import React from "react";

// Main Card Component
export function Card({ children }) {
  return (
    <div className="rounded-lg shadow-lg border border-gray-200 p-4 bg-black">
      {children}
    </div>
  );
}

// Card Content Component
export function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}

