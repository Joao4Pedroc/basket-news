import { Game, Team, Player } from "../types";

export async function getAllGames(API_KEY: string): Promise<Game[]> {
  const response = await fetch("https://api.balldontlie.io/v1/games/1", {
    headers: { Authorization: `${API_KEY}` },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await response.json();
  console.log(data.data);
  return data.data;
}

export async function getAllTeams(API_KEY: string): Promise<Team[]> {
  const response = await fetch("https://api.balldontlie.io/v1/teams", {
    headers: { Authorization: `${API_KEY}` },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch teams");
  }

  const data = await response.json();
  return data.data;
}

export async function getAllPlayers(API_KEY: string): Promise<Player[]> {
  const response = await fetch("https://api.balldontlie.io/v1/players", {
    headers: { Authorization: `${API_KEY}` },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch players");
  }

  const data = await response.json();
  return data.data;
}
