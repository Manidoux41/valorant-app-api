import React from "react";

export default function SearchBar({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  return (
    <input
      type="text"
      placeholder="Rechercher un agent ou une map"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-md border border-gray-300 text-sm text-black"
    />
  );
}