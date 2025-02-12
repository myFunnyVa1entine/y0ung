import Albums from "../../components/album.tsx";
import MyLyricsIsland from "../../islands/MyLyrics-island.tsx";

function MUSIC({ title }: { title: string }) {
  return (
    <>
      <h2 class="text-center text-xl">{title}</h2>
      <Albums classname="grid grid-cols-2 gap-4 pt-6" />
    </>
  );
}

export default function Music() {
  return (
    <section class="mx-10 md:max-w-[665px] md:mx-auto text-white h-full">
      <MUSIC title="MUSIC" />
      <MyLyricsIsland />
    </section>
  );
}
