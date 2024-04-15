import React, { createContext, useContext, useState } from "react";

type unitsType = "metric" | "imperial";

type unitsContextType = {
  unit: unitsType;
  setUnit: React.Dispatch<React.SetStateAction<unitsType>>;
};

const UnitContext = createContext<unitsContextType | null>(null);

export function UnitContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unit, setUnit] = useState<unitsType>("metric");
  return (
    <UnitContext.Provider value={{ unit, setUnit }}>
      {children}
    </UnitContext.Provider>
  );
}

export function useUnitContext() {
  return useContext(UnitContext);
}
