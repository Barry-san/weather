import React, { createContext, useContext, useState } from "react";

type LocationContextType = {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

const LocationContext = createContext<LocationContextType | null>(null);

export function LocationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [location, setLocation] = useState<string>("");
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationContext() {
  return useContext(LocationContext);
}
