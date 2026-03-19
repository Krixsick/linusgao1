import terminalIcon from "../assets/icons/Terminal 1.svg";
import finderIcon from "../assets/icons/Finder 1.svg";
export function BottomBar() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-3 bg-white/80 backdrop-blur-md w-[50%] h-[58px] rounded-2xl flex items-center justify-start gap-2 px-2">
      {/* Finder Icon*/}
      <button className="hover:scale-110 transition-transform cursor-pointer">
        <img src={finderIcon} />
      </button>
      {/* Terminal Icon*/}
      <button className="hover:scale-110 transition-transform cursor-pointer">
        <img src={terminalIcon} />
      </button>
    </div>
  );
}
