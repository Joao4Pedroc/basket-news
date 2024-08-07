import { useEffect, useState } from "react";
import { getAllTeams } from "../_services/data_service";
import { Team } from "../types";

function useTeams() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      if (!API_KEY) {
        throw new Error("no api key");
      }
      try {
        const teamsData = await getAllTeams(API_KEY);
        setTeams(teamsData);
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        } else {
          throw new Error("An unknown error occurred");
        }
      }
    };

    fetchTeams();
  }, []);

  return { teams, error };
}

export default useTeams;
