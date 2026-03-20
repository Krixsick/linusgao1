import backgroundImg from "../assets/background/DP-15500-007.jpg";
import terminalIcon from "../assets/icons/Terminal 1.svg";
import finderIcon from "../assets/icons/Finder 1.svg";
import { useWindows } from "../context/WindowContext";

export function Background() {
  const { openWindow } = useWindows();

  return (
    <>
      <div className="w-screen h-screen m-0 p-0 relative ">
        <img
          src={backgroundImg}
          className="absolute w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 grid grid-flow-col grid-rows-10 grid-cols-16 z-10 gap-4 p-4 mt-8">
          <div>
            {/* Finder Icon*/}
            <button
              className="hover:scale-110 transition-transform cursor-pointer flex flex-col items-center gap-1"
              onClick={() => openWindow("finder")}
            >
              <img src={finderIcon} />
              <span className="text-white text-xs drop-shadow-md">Finder</span>
            </button>
          </div>
          <div>
            {/* Terminal Icon*/}
            <button
              className="hover:scale-110 transition-transform cursor-pointer flex flex-col items-center gap-1"
              onClick={() => openWindow("terminal")}
            >
              <img src={terminalIcon} />
              <span className="text-white text-xs drop-shadow-md">
                Terminal
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
