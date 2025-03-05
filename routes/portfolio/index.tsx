function Articles({ href }: { href: string }) {
  return (
    <article class="w-full">
      <img class="h-full object-fill" src={href} alt="home image" />
    </article>
  );
}

export default function portfolio() {
  return (
    <section class="mx-10 md:max-w-[665px] md:mx-auto text-white min-h-full grid grid-cols-2 gap-4 p-4">
      <Articles href="https://pray.deno.dev/poster.gif" />
      <Articles href="portfolio/paperground.png" />
      <p class="h-[36vh] pt-20 text-3xl w-full col-span-2 text-center">
        coming soon...
      </p>
    </section>
  );
}
