interface Youtube {
  link: string;
  title: string;
}

function Youtube({ link, title }: Youtube) {
  return (
    <iframe
      class="aspect-video w-full max-w-[1200px] max-h-[560px] mx-auto border-2 border-zinc-500 border-double"
      src={link}
      title={title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowFullScreen
    >
    </iframe>
  );
}

export default function Videos() {
  const YOUTUBE = [
    {
      id: 0,
      link: "https://www.youtube.com/embed/eMWB-sDBeFQ",
      title: "작은방",
    },
    {
      id: 1,
      link: "https://www.youtube.com/embed/9HV_NFqIamM",
      title: "소나기",
    },
  ];
  return (
    <section class="pt-10 col-span-3 px-10">
      {YOUTUBE.map((tube) => (
        <article class="w-full my-10">
          <Youtube key={tube.id} link={tube.link} title={tube.title} />
        </article>
      ))}
    </section>
  );
}
