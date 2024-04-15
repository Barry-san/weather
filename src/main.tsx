import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App.tsx";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AppContextProvider from "./context/AppContext.tsx";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </AppContextProvider>
  </React.StrictMode>
);
