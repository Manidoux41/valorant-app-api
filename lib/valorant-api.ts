export const getValorantData = async () => {
  const [seasonsRes, agentsRes, mapsRes] = await Promise.all([
    fetch("https://valorant-api.com/v1/seasons", { next: { revalidate: 3600 } }),
    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true", { next: { revalidate: 3600 } }),
    fetch("https://valorant-api.com/v1/maps", { next: { revalidate: 3600 } })
  ]);

  const seasons = await seasonsRes.json();
  const agents = await agentsRes.json();
  const maps = await mapsRes.json();

  return {
    days: seasons.data,
    agents: agents.data,
    maps: maps.data
  };
};