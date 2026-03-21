export type WindowState = {
  isOpen: boolean;
  zIndex: number;
};

export type WindowContextType = {
  windows: Record<string, WindowState>;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  isWindowOpen: (id: string) => boolean;
};

export type WindowProps = {
  title: string;
  isOpen: boolean;
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
  children: ReactNode;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
};
