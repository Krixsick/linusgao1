export function Apple({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[30px] left-2 w-[250px] bg-white/90 backdrop-blur-xl rounded-lg shadow-xl border border-gray-200/50 py-1 z-50">
      <MenuItem label="About This Mac" />
      <Divider />
      <MenuItem label="System Settings..." />
      <MenuItem label="App Store..." />
      <Divider />
      <MenuItem label="Recent Items" hasArrow />
      <Divider />
      <MenuItem label="Force Quit..." shortcut="⌥⌘⎋" />
      <Divider />
      <MenuItem label="Sleep" />
      <MenuItem label="Restart..." />
      <MenuItem label="Shut Down..." />
      <Divider />
      <MenuItem label="Lock Screen" shortcut="⌃⌘Q" />
      <MenuItem label="Log Out..." shortcut="⇧⌘Q" />
    </div>
  );
}

function MenuItem({
  label,
  shortcut,
  hasArrow,
}: {
  label: string;
  shortcut?: string;
  hasArrow?: boolean;
}) {
  return (
    <button className="w-full flex items-center justify-between px-3 py-0.5 text-[13px] text-gray-800 hover:bg-blue-500 hover:text-white cursor-default transition-colors">
      <span>{label}</span>
      {shortcut && <span className="text-gray-400 text-xs">{shortcut}</span>}
      {hasArrow && <span className="text-gray-400">▸</span>}
    </button>
  );
}

function Divider() {
  return <div className="h-px bg-gray-200 my-1 mx-2" />;
}
