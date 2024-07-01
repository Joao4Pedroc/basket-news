export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface Game {
  id: number;
  date: string;
  home_team: Team;
  visitor_team: Team;
  home_team_score: number;
  visitor_team_score: number;
  season: number;
  period: number;
  status: string;
}

export interface Player {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  team: Team;
}

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
