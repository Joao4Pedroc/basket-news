import { useEffect, useState } from "react";
import { Team, getAllTeams } from "../_services/data_service";

function useTeams() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (isLoading) {
    return <div>Loading teams...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return { teams };
}

export default useTeams;
