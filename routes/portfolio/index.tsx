function Articles({ href }: { href: string }) {
  return (
    <article class="w-full py-4">
      <img class="h-full object-fill" src={href} alt="home image" />
    </article>
  );
}

export default function portfolio() {
  return (
    <section class="mx-10 md:max-w-[665px] md:mx-auto text-white md:grid md:grid-cols-2 md:gap-4">
      <Articles href="https://pray.deno.dev/poster.gif" />
      <Articles href="portfolio/paperground.png" />
      <p class="pt-20 text-3xl w-full col-span-2 text-center md:h-[36vh]">
        coming soon...
      </p>
    </section>
  );
}
