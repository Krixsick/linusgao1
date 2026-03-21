import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type WindowState = {
  isOpen: boolean;
  zIndex: number;
};

type WindowContextType = {
  windows: Record<string, WindowState>;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  isWindowOpen: (id: string) => boolean;
};

const WindowContext = createContext<WindowContextType | null>(null);
let nextZIndex = 100;

export function WindowProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<Record<string, WindowState>>({});

  const openWindow = useCallback((id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { isOpen: true, zIndex: ++nextZIndex },
    }));
  }, []);

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], zIndex: ++nextZIndex },
    }));
  }, []);

  const isWindowOpen = useCallback(
    (id: string) => !!windows[id]?.isOpen,
    [windows],
  );

  return (
    <WindowContext.Provider
      value={{ windows, openWindow, closeWindow, focusWindow, isWindowOpen }}
    >
      {children}
    </WindowContext.Provider>
  );
}

export function useWindows() {
  const ctx = useContext(WindowContext);
  if (!ctx) throw new Error("useWindows must be used within WindowProvider");
  return ctx;
}
