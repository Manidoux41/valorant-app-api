// components/ValorantLayoutPage.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getValorantData } from "@/lib/valorant-api";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

interface Agent {
  uuid: string;
  displayName: string;
  displayIcon: string;
  role?: {
    displayName: string;
  };
}

interface Season {
  uuid: string;
  displayName: string;
  startTime: string;
  endTime: string;
}

interface Map {
  uuid: string;
  displayName: string;
  splash: string;
  coordinates: string;
}

export default function ValorantLayoutPage() {
  const [data, setData] = useState<{
    days: Season[];
    agents: Agent[];
    maps: Map[];
  }>({ days: [], agents: [], maps: [] });

  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    getValorantData().then(setData);
  }, []);

  const filteredAgents = data.agents.filter((a) =>
    a.displayName.toLowerCase().includes(search.toLowerCase())
  );
  const filteredMaps = data.maps.filter((m) =>
    m.displayName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-300`}>
      <AnimatePresence>
        <motion.header
          key="header"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-valorant text-white flex justify-between items-center shadow-md"
        >
          <h1 className="text-3xl font-bold tracking-wide">Valorant UI</h1>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            {theme === "dark" ? "Mode clair" : "Mode sombre"}
          </button>
        </motion.header>
      </AnimatePresence>

      <main className="p-6 space-y-8">
        <SearchBar value={search} onChange={setSearch} />

        <section>
          <h2 className="text-2xl mb-4 font-semibold text-valorant">Jours / Épisodes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.days.map((day) => (
              <div key={day.uuid} className="p-4 bg-gray-800 rounded shadow">
                <p className="font-bold">{day.displayName}</p>
                <p className="text-sm opacity-70">Début : {new Date(day.startTime).toLocaleDateString()}</p>
                <p className="text-sm opacity-70">Fin : {new Date(day.endTime).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl mb-4 font-semibold text-valorant">Agents</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredAgents.map((agent) => (
              <motion.div
                key={agent.uuid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-gray-700 rounded shadow text-center"
              >
                <Image src={agent.displayIcon} alt={agent.displayName} width={64} height={64} className="mx-auto mb-2" />
                <p className="font-medium">{agent.displayName}</p>
                <p className="text-sm opacity-60">{agent.role?.displayName}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl mb-4 font-semibold text-valorant">Maps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMaps.map((map) => (
              <motion.div
                key={map.uuid}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <Image src={map.splash} alt={map.displayName} width={800} height={192} className="w-full h-48 object-cover" />
                <div className="bg-gray-800 p-4">
                  <p className="font-semibold">{map.displayName}</p>
                  <p className="text-sm opacity-70">{map.coordinates}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
