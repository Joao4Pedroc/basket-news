import { useEffect, useState } from "react";
import { Player, getAllPlayers } from "../_services/data_service";

interface usePlayerResult {
  players: Player[];
  isLoading: boolean;
  error: string | null;
}

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
