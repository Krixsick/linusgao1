import backgroundImg from "../assets/background/DP-15500-007.jpg";
import terminalIcon from "../assets/icons/Terminal 1.svg";
import finderIcon from "../assets/icons/Finder 1.svg";
import { useWindows } from "../hooks/windowHelper";
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
              onClick={() => openWindow("finder")}
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <img src={finderIcon} />
              <span className="text-white text-xs drop-shadow-md">Finder</span>
            </button>
          </div>
          <div>
            {/* Terminal Icon*/}
            <button
              onClick={() => openWindow("terminal")}
              className="hover:scale-110 transition-transform cursor-pointer"
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
