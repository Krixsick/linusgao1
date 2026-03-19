import { createFileRoute } from "@tanstack/react-router";
import { Background } from "../screen/background";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Background></Background>
    </>
  );
}
