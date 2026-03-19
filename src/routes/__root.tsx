import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { TopBar } from "../screen/topbar";
import { BottomBar } from "../screen/bottombar";
const RootLayout = () => (
  <>
    <TopBar></TopBar>
    <Outlet />
    <TanStackRouterDevtools />
    <BottomBar />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
