import { PageProps } from "$fresh/server.ts";
import Aside from "../components/aside.tsx";
import Logo from "../components/logo.tsx";

export default function layout({ Component }: PageProps) {
  return (
    <section class="bg-black">
      <nav class="px-4 py-2">
        <Logo />
        <Aside />
      </nav>
      <div class="pb-12">
        <Component />
      </div>
      <footer class="text-center text-white py-8">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          Forever Young Studio. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
}
