function Articles({ href, link }: {
  href: string;
  link: string;
}) {
  return (
    <article class="w-full py-4">
      <a href={link} target="_blank">
        <img class="md:h-full object-cover" src={href} alt="home image" />
      </a>
    </article>
  );
}

const portfolios = [
  { href: "https://pray.deno.dev/poster.gif", link: "https://pray.deno.dev" },
  { href: "portfolio/paperground.png", link: "https://paperground.deno.dev" },
];

export default function portfolio() {
  return (
    <section class="mx-10 md:max-w-[665px] md:mx-auto text-white md:grid md:grid-cols-2 md:gap-4">
      {portfolios.map((portfolio) => (
        <Articles href={portfolio.href} link={portfolio.link} />
      ))}
      <p class="pt-20 text-3xl w-full col-span-2 text-center md:h-[36vh]">
        coming soon...
      </p>
    </section>
  );
}
