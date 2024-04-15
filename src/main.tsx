import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App.tsx";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SearchContextProvider } from "./context/SearchContext.tsx";
import { UnitContextProvider } from "./context/UnitsContext.tsx";
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UnitContextProvider>
      <SearchContextProvider>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </SearchContextProvider>
    </UnitContextProvider>
  </React.StrictMode>
);
