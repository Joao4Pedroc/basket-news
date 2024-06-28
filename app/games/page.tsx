"use client";

import { useEffect, useState } from "react";
import { getAllGames, Game } from "../_services/data_service";

function Games() {
  // important basketball games
  // nba schedule

  /* FIX LATER

  
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        if (!API_KEY) {
          throw new Error("API key is not defined");
        }
        const gamesData = await getAllGames(API_KEY);
        setGames(gamesData);
      } catch (e) {
        console.log((e as Error).message);
      }
    };

    fetchGames();
  }, [API_KEY]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      {games.length > 0 ? (
        games.map((game) => (
          <div key={game.id}>
            <p>{`Game ID: ${game.id}, Date: ${game.date}, Home Team: ${game.home_team.full_name}, Visitor Team: ${game.visitor_team.full_name}`}</p>
          </div>
        ))
      ) : (
        <p>Loading games...</p>
      )}
    </div>
  );
  */
  return <div>games</div>;
}

export default Games;
