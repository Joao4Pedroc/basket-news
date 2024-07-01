"use client";

import { Team } from "../_services/data_service";
import useTeams from "../_hooks/useTeams";

function User() {
  const { teams } = useTeams();

  return (
    <div>
      {teams.length > 0 ? (
        teams.map((team: Team) => (
          <div key={team.id}>
            <p>{`Team ID: ${team.id}, Name: ${team.full_name}, City: ${team.city}, Conference: ${team.conference}, Division: ${team.division}`}</p>
          </div>
        ))
      ) : (
        <p>No teams found.</p>
      )}
    </div>
  );
}

export default User;
