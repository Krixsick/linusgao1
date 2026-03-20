import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { TopBar } from "../screen/topbar";
import { BottomBar } from "../screen/bottombar";
import { WindowProvider, useWindows } from "../context/WindowContext";
import { Window } from "../components/Window";
import { TerminalContent } from "../apps/terminal";
import { FinderContent } from "../apps/finder";

function WindowLayer() {
  const { windows, closeWindow, focusWindow } = useWindows();

  return (
    <>
      <Window
        title="Terminal"
        isOpen={!!windows["terminal"]?.isOpen}
        zIndex={windows["terminal"]?.zIndex ?? 0}
        onClose={() => closeWindow("terminal")}
        onFocus={() => focusWindow("terminal")}
        defaultPosition={{ x: 250, y: 120 }}
        defaultSize={{ width: 640, height: 420 }}
      >
        <TerminalContent />
      </Window>

      <Window
        title="Finder"
        isOpen={!!windows["finder"]?.isOpen}
        zIndex={windows["finder"]?.zIndex ?? 0}
        onClose={() => closeWindow("finder")}
        onFocus={() => focusWindow("finder")}
        defaultPosition={{ x: 180, y: 80 }}
        defaultSize={{ width: 700, height: 450 }}
      >
        <FinderContent />
      </Window>
    </>
  );
}

const RootLayout = () => (
  <WindowProvider>
    <TopBar />
    <Outlet />
    <WindowLayer />
    <TanStackRouterDevtools />
    <BottomBar />
  </WindowProvider>
);

export const Route = createRootRoute({ component: RootLayout });
