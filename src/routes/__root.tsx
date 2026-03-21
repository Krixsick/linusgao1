import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { TopBar } from "../screen/topbar";
import { BottomBar } from "../screen/bottombar";
import { WindowProvider, useWindows } from "../hooks/windowHelper";
import { Window } from "../apps/window";
import { TerminalContent } from "../apps/terminal";
import { FinderContent } from "../apps/finder";
import { files } from "../components/finderFiles";
import { MarkUpFiles } from "../components/markupfiles";
function WindowLayer() {
  const { windows, closeWindow, focusWindow } = useWindows();

  return (
    <>
      <Window
        title="Terminal"
        isOpen={windows["terminal"]?.isOpen}
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
        isOpen={windows["finder"]?.isOpen}
        zIndex={windows["finder"]?.zIndex ?? 0}
        onClose={() => closeWindow("finder")}
        onFocus={() => focusWindow("finder")}
        defaultPosition={{ x: 180, y: 80 }}
        defaultSize={{ width: 700, height: 450 }}
      >
        <FinderContent />
      </Window>
      {/* The MD files and resume*/}
      {files.map((file, index) => (
        <Window
          key={file.id}
          title={file.name}
          isOpen={windows[file.id]?.isOpen}
          zIndex={windows[file.id]?.zIndex ?? 0}
          onClose={() => closeWindow(file.id)}
          onFocus={() => focusWindow(file.id)}
          defaultPosition={{ x: 220 + index * 30, y: 90 + index * 30 }}
          defaultSize={{ width: 650, height: 480 }}
        >
          {file.type === "md" && file.content ? (
            <MarkUpFiles content={file.content} />
          ) : (
            <iframe
              src={file.src}
              className="w-full h-full border-0"
              title={file.name}
            />
          )}
        </Window>
      ))}
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
