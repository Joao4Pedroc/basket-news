"use client";

import { useUser } from "../_context/UserContext";
import useTeams from "../_hooks/useTeams";
import usePlayers from "../_hooks/usePlayers";
import { Team } from "../types";
import Error from "../error";

function User() {
  //fix this
  const { teams, error } = useTeams();
  const { state, dispatch } = useUser();

  const handleSetFavoriteTeam = (team: Team) => {
    console.log(`Favorite Team: ${team.full_name}, ${state.favoriteTeam}`);
    dispatch({ type: "SET_FAVORITE_TEAM", payload: team.full_name });
  };

  if (error) {
    return <Error />;
  }

  return (
    <div>
      {teams.length > 0 ? (
        teams.map(function (team: Team) {
          if (!team.division) return;

          return (
            <div key={team.id}>
              <button onClick={() => handleSetFavoriteTeam(team)}>
                <p>{`Team ID: ${team.id}, Name: ${team.full_name}, City: ${team.city}, Conference: ${team.conference}, Division: ${team.division}`}</p>
              </button>
            </div>
          );
        })
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default User;
