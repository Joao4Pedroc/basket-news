"use client";

import { useEffect, useState } from "react";
import { getAllGames, Game } from "../_services/data_service";

function Games() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  // important basketball games
  // nba schedule
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGames() {
      try {
        if (!API_KEY) {
          throw new Error("no api key");
        }
        const gamesData = await getAllGames(API_KEY);
        setGames(gamesData);
      } catch (e) {
        console.log((e as Error).message);
      }
    }

    fetchGames();
  }, []);

  /* FIX LATER */

  return <div></div>;
}

export default Games;
