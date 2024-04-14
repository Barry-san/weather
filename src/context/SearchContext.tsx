type searchContextType = {
  recentSearches: string[];
  setRecentSearches: React.Dispatch<React.SetStateAction<string[]>>;
};

import React, { createContext, useContext, useState } from "react";

const searchContext = createContext<null | searchContextType>(null);

export function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storedSearches = JSON.parse(
    localStorage.getItem("recent_searches") || "[]"
  ) as string[];
  const [recentSearches, setRecentSearches] = useState(storedSearches);
  return (
    <searchContext.Provider value={{ recentSearches, setRecentSearches }}>
      {children}
    </searchContext.Provider>
  );
}

export function useSearchContext() {
  return useContext(searchContext);
}
