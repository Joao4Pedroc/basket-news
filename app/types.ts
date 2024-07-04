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

export interface UserState {
  favoriteTeam: string | null;
}
