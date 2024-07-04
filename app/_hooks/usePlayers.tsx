import { useEffect, useState } from "react";
import { getAllPlayers } from "../_services/data_service";
import { Player } from "../types";

function usePlayers() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      if (!API_KEY) {
        throw new Error("no api key");
      }
      try {
        const playersData = await getAllPlayers(API_KEY);
        setPlayers(playersData);
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        } else {
          throw new Error("An unknown error occurred");
        }
      }
    };

    fetchPlayers();
  }, []);

  return { players };
}

export default usePlayers;
