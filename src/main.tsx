import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu.tsx";
import { Options } from "./pages/Options/Options.tsx";
import { JoinRoom } from "./pages/JoinRoom/JoinRoom.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Lobby } from "./pages/Lobby/Lobby.tsx";
import { FavoriteFilms } from "./pages/FavoriteFilms/FavoriteFilms.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/options/:userName",
    element: <Options />,
  },
  {
    path: "/joinRoom/:userName",
    element: <JoinRoom />,
  },
  {
    path: "/lobby/:roomId",
    element: <Lobby />,
  },
  {
    path: "/favoriteFilms/:roomId",
    element: <FavoriteFilms />,
  },
]);
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 3, refetchOnWindowFocus: false } },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
