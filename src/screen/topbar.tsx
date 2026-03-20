import { useState, useRef, useEffect } from "react";
//make sure to change wifi and battery to icons
export function TopBar() {
  const [formatted_date, set_formatted_date] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      (set_formatted_date(new Date()), 1000);
    });
    return () => clearInterval(timer);
  }, []);

  const date = formatted_date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  // 5. Format the time (e.g., "3:14 PM")
  const time = formatted_date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <div className="w-screen h-[30px] opacity-86 fixed bg-white flex items-center justify-between p-2 z-10">
      <div className="flex ml-4 gap-3 items-center">
        <button
          //   onClick={}
          className="hover:opacity-70 transition-opacity cursor-default flex items-center"
          aria-label="Apple menu"
        >
          <svg width="17" height="17" viewBox="0 0 170 170" fill="black">
            <path d="M150.4 130.2c-2.8 6.5-6.1 12.4-10 17.8-5.3 7.4-9.6 12.5-13 15.3-5.2 4.7-10.7 7.1-16.7 7.2-4.3 0-9.5-1.2-15.5-3.7-6.1-2.5-11.6-3.7-16.7-3.7-5.3 0-11 1.2-17.1 3.7-6.1 2.5-11 3.8-14.8 3.9-5.7.2-11.4-2.3-17-7.4-3.6-3.1-8.2-8.4-13.6-16-5.8-8.2-10.5-17.6-14.2-28.4C-2 107.4-4 96.3-4 85.5c0-12.4 2.7-23.1 8-32.1 4.2-7.2 9.8-12.9 16.8-17 7-4.2 14.6-6.3 22.7-6.4 4.6 0 10.5 1.4 17.9 4.2 7.3 2.8 12 4.2 14 4.2 1.5 0 6.7-1.6 15.4-4.9 8.3-3 15.3-4.3 21-3.8 15.5 1.3 27.2 7.4 35 18.5-13.9 8.4-20.7 20.2-20.5 35.3.2 11.8 4.4 21.6 12.6 29.4 3.8 3.6 8 6.3 12.6 8.3-1 2.9-2.1 5.7-3.2 8.5zM116.3 7.8c0 9.2-3.4 17.8-10.1 25.8-8.1 9.5-17.9 14.9-28.5 14.1-.1-1.1-.2-2.3-.2-3.5 0-8.9 3.8-18.3 10.6-26.1 3.4-3.9 7.7-7.2 12.9-9.8 5.2-2.5 10.1-3.9 14.7-4.2.1 1.3.2 2.5.2 3.7z" />
          </svg>
        </button>
        <span className="font-mono font-bold text-black cursor-pointer">
          Finder
        </span>
        {/* File Button*/}
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="font-mono font-normal text-black cursor-pointer"
          >
            File
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* Edit Button*/}
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="font-mono font-normal text-black cursor-pointer"
          >
            Edit
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* View Button*/}
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="font-mono font-normal text-black cursor-pointer"
          >
            View
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* Windows Button*/}
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="font-mono font-normal text-black cursor-pointer"
          >
            Windows
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* Help Button*/}
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="font-mono font-normal text-black cursor-pointer"
          >
            Help
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex mr-4 gap-4">
        <span className="font-mono font-normal text-black">Wi-Fi</span>
        <span className="font-mono font-normal text-black">100%</span>
        <span className="font-mono font-normal text-black">{date}</span>
        <span className="font-mono font-normal text-black">{time}</span>
      </div>
    </div>
  );
}
