"use client";

import { Team } from "../_services/data_service";
import useTeams from "../_hooks/useTeams";
import Loading from "./loading";
import usePlayers from "../_hooks/usePlayers";

function User() {
  //fix this
  const { teams } = useTeams();
  const { players } = usePlayers();
  console.log(players);

  return (
    <div>
      {teams.length > 0 ? (
        teams.map((team: Team) => (
          <div key={team.id}>
            <p>{`Team ID: ${team.id}, Name: ${team.full_name}, City: ${team.city}, Conference: ${team.conference}, Division: ${team.division}`}</p>
          </div>
        ))
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default User;
