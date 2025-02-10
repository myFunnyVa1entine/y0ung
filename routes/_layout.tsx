import { PageProps } from "$fresh/server.ts";
import Aside from "../components/aside.tsx";
import Logo from "../components/logo.tsx";

export default function layout({ Component }: PageProps) {
  return (
    <section class="layout sm:grid sm:grid-cols-[220px_1fr] h-screen">
      <div class="p-4 flex gap-4 justify-between items-center sm:block">
        <Logo />
        <Aside />
      </div>
      <div class="px-4">
        <Component />
      </div>
    </section>
  );
}
