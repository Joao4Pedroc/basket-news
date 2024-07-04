"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define the initial state
const initialState: UserState = {
  favoriteTeam: null,
};

// Define action types
type Action = { type: "SET_FAVORITE_TEAM"; payload: string };

// Create a reducer function to manage state changes
const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case "SET_FAVORITE_TEAM":
      return { ...state, favoriteTeam: action.payload };
    default:
      return state;
  }
};

// Create a context for the user state
const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => undefined });

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
