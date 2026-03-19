import backgroundImg from "../assets/background/DP-15500-007.jpg";

export function Background() {
  return (
    <>
      <div className="w-screen h-screen m-0 p-0">
        <img src={backgroundImg} className="w-full h-full " />
      </div>
    </>
  );
}
