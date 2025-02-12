import mv from "../../mv.json" with { type: "json" };

interface Archive {
  items: {
    src: string;
    title: string;
  }[];
  title: string;
}

function Music({ items, title }: Archive) {
  return (
    <div class="pt-8">
      <h2 class="text-center text-xl text-white">{title}</h2>
      <article class="grid grid-cols-2 gap-4 pt-6">
        {items.map((item) => (
          <div
            key={item.src}
            class="border-2 border-double border-zinc-500"
          >
            <iframe
              class="w-full"
              src={item.src}
              title={item.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            >
            </iframe>
          </div>
        ))}
      </article>
    </div>
  );
}

export default function Archive() {
  return (
    <section class="max-w-[665px] mx-auto p-2 border border-black rounded-xl">
      <Music items={mv} title="VIDEOS" />
    </section>
  );
}
