import Albums from "../components/album.tsx";
import Videos from "../components/video.tsx";

export default function Home() {
  return (
    <main class="text-white">
      <Albums />
      <Videos />
    </main>
  );
}
