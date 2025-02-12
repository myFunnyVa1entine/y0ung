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
      <footer class="text-center text-white pb-12">
        <section class="flex justify-center items-center">
          <a
            href="https://soundcloud.com/user-985114807-571729742"
            target="_blank"
          >
            <img
              class="w-6 sm:w-8 md:w-10 lg:w-auto"
              src="icons/soundcloud.svg"
              alt="sound cloud"
            />
          </a>
        </section>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          Forever Young Studio. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
}
