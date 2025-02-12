import Albums from "../components/album.tsx";
import Videos from "../components/video.tsx";

export default function Home() {
  return (
    <main class="text-white">
      <Albums classname="grid m-10 md:mx-10 gap-10 md:gap-3 xl:gap-5 sm:grid-cols-1 md:grid-cols-2 xl:max-w-[1200px] xl:mx-auto" />
      <Videos />
    </main>
  );
}
