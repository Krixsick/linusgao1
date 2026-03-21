import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type MouseEvent,
} from "react";
import type { WindowProps } from "../types/windowstype";
export function Window({
  title,
  isOpen,
  zIndex,
  onClose,
  onFocus,
  children,
  defaultPosition = { x: 200, y: 100 },
  defaultSize = { width: 600, height: 400 },
}: WindowProps) {
  const [position, setPosition] = useState(defaultPosition);
  const [size] = useState(defaultSize);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dragRef = useRef<{
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      // Only drag from title bar (not the buttons)
      if ((e.target as HTMLElement).closest(".window-btn")) return;
      if (isFullscreen) return;
      onFocus();
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        origX: position.x,
        origY: position.y,
      };
    },
    [position, onFocus, isFullscreen],
  );

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      setPosition({
        x: dragRef.current.origX + dx,
        y: dragRef.current.origY + dy,
      });
    };

    const handleMouseUp = () => {
      dragRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed overflow-hidden shadow-2xl border border-gray-300/50 transition-all duration-300 ${isFullscreen ? "rounded-none" : "rounded-xl"}`}
      style={
        isFullscreen
          ? {
              left: 0,
              top: 28,
              width: "100vw",
              height: "calc(100vh - 28px)",
              zIndex,
            }
          : {
              left: position.x,
              top: position.y,
              width: size.width,
              height: size.height,
              zIndex,
            }
      }
      onMouseDown={onFocus}
    >
      {/* Title bar */}
      <div
        className="h-[38px] bg-[#e8e8e8] flex items-center px-3 cursor-grab active:cursor-grabbing select-none relative"
        onMouseDown={handleMouseDown}
      >
        {/* Traffic light buttons */}
        <div className="flex gap-2 z-10">
          <button
            className="window-btn w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90 transition-all"
            onClick={onClose}
            aria-label="Close"
          />
          <button
            className="window-btn w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-90 transition-all"
            aria-label="Minimize"
          />
          <button
            className="window-btn w-3 h-3 rounded-full bg-[#28c840] hover:brightness-90 transition-all"
            onClick={toggleFullscreen}
            aria-label="Maximize"
          />
        </div>
        {/* Title */}
        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-700 pointer-events-none">
          {title}
        </span>
      </div>
      {/* Content */}
      <div className="h-[calc(100%-38px)] overflow-auto">{children}</div>
    </div>
  );
}
