import { useEffect, useState } from "react";
import { Team, getAllTeams } from "../_services/data_service";

function useTeams() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [teams, setTeams] = useState<Team[]>([]);

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

  return { teams };
}

export default useTeams;
