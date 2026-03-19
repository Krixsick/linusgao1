import backgroundImg from "../assets/background/DP-15500-007.jpg";
import terminalIcon from "../assets/icons/Terminal 1.svg";
import finderIcon from "../assets/icons/Finder 1.svg";
export function Background() {
  return (
    <>
      <div className="w-screen h-screen m-0 p-0 relative ">
        <img
          src={backgroundImg}
          className="absolute w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 border border-1 border-black grid grid-flow-col grid-rows-10 grid-cols-16 z-10 gap-4 p-4 mt-8">
          <div>
            {/* Finder Icon*/}
            <button className="hover:scale-110 transition-transform cursor-pointer">
              <img src={finderIcon} />
            </button>
          </div>
          <div>
            {/* Terminal Icon*/}
            <button className="hover:scale-110 transition-transform cursor-pointer">
              <img src={terminalIcon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
