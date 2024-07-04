"use client";

import { Team } from "../_services/data_service";
import { useUser } from "../_context/UserContext";
import useTeams from "../_hooks/useTeams";
import usePlayers from "../_hooks/usePlayers";

function User() {
  //fix this
  const { teams } = useTeams();
  const { state, dispatch } = useUser();

  const handleSetFavoriteTeam = (team: Team) => {
    console.log(`Favorite Team: ${team.full_name}, ${state.favoriteTeam}`);
    dispatch({ type: "SET_FAVORITE_TEAM", payload: team.full_name });
  };

  console.log("Current Favorite Team:", state.favoriteTeam);

  return (
    <div>
      {teams.length > 0 ? (
        teams.map((team: Team) => (
          <div key={team.id}>
            <button onClick={() => handleSetFavoriteTeam(team)}>
              <p>{`Team ID: ${team.id}, Name: ${team.full_name}, City: ${team.city}, Conference: ${team.conference}, Division: ${team.division}`}</p>
            </button>
          </div>
        ))
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default User;
