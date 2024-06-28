"use client";

import { useEffect } from "react";
import { getAllTeams } from "../_services/data_service";

function User() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  let teams;

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        if (!API_KEY) {
          throw new Error("API key is not defined");
        }
        const teams = await getAllTeams(API_KEY);
      } catch (e) {
        console.log((e as Error).message);
      }
    };

    fetchTeams();
  }, [API_KEY]);

  return <div>{teams}</div>;
}

export default User;
