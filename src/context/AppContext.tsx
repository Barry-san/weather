type unitsType = "metric" | "imperial";

type AppContextType = {
  location: string;
  recentSearches: string[];
  unit: unitsType;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setRecentSearches: React.Dispatch<React.SetStateAction<string[]>>;
  setUnit: React.Dispatch<React.SetStateAction<unitsType>>;
};

import React, { createContext, useContext, useState } from "react";

const appContext = createContext<null | AppContextType>(null);

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cachedSearches = localStorage.getItem("recent_searches") ?? "[]";

  const storedSearches: string[] = JSON.parse(cachedSearches) as string[];

  const [recentSearches, setRecentSearches] = useState(storedSearches);
  const [unit, setUnit] = useState<unitsType>("metric");
  const [location, setLocation] = useState<string>("");
  return (
    <appContext.Provider
      value={{
        recentSearches,
        location,
        unit,
        setLocation,
        setUnit,
        setRecentSearches,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export function useAppContext() {
  return useContext(appContext);
}
