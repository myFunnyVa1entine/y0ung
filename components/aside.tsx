export default function Aside() {
  return (
    <aside class="text-xl md:text-2xl p-2 text-white">
      <ul class="flex justify-center gap-6">
        <li>
          <a href="music" class="hover:text-red-600 duration-150">
            MUSIC + LYRICS
          </a>
        </li>
        <li>
          <a href="archive" class="hover:text-red-600 duration-150">
            ARCHIVE
          </a>
        </li>
      </ul>
    </aside>
  );
}
