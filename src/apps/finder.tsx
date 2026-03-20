import { useState } from "react";

export function FinderContent() {
  const [fileOptions, setFileOptions] = useState<Record<string, boolean>>({
    Desktop: true,
    Downloads: false,
  });
  return (
    <div className="w-full h-full flex">
      {/* Left Side*/}
      <div className="flex flex-col p-2 bg-[#e8e8e8] w-[20%] h-full border-l">
        <p className="font-mono text-light opacity-60 text-[gray-300] text-black text-[clamp(8px,2vw,10px)]">
          Favorites
        </p>
        {Object.entries(fileOptions).map(([option, state]) => {
          return (
            <button
              onClick={() =>
                setFileOptions((prev) => {
                  const updated: Record<string, boolean> = {};
                  for (const key of Object.keys(prev)) {
                    updated[key] = key === option;
                  }
                  return updated;
                })
              }
              key={option}
              className={`p-1 rounded-xl w-full text-left font-mono text-light text-black text-[clamp(8px,2vw,14px)] cursor-pointer transition-colors active:bg-white/60 ${state ? "bg-black/10" : ""}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div className="bg-white w-[80%] h-full">
        {fileOptions["Desktop"] === true ? <div></div> : <div></div>}
      </div>
    </div>
  );
}
