interface Image {
  name: string;
  a: string;
}

function Image({ name, a }: Image) {
  return (
    <a href={a} target="_blank">
      <img
        src={`/album-cover/${name}.jpeg`}
        class="w-full"
        alt={`${name} album cover`}
      />
    </a>
  );
}

export default function Albums() {
  const albums = [
    { id: 0, title: "smallroom", link: "https://linksalad.net/ywS2HpUHWY" },
    { id: 1, title: "someday", link: "https://linksalad.net/RlAtoLMxrT" },
    {
      id: 2,
      title: "rocksinn",
      link: "https://www.melon.com/album/detail.htm?albumId=347708",
    },
  ];
  return (
    <section class="grid m-10 md:mx-10 gap-10 md:gap-3 xl:gap-5 sm:grid-cols-1 md:grid-cols-3 xl:max-w-[1200px] xl:mx-auto">
      {albums.map((album) => (
        <Image key={album.id} name={album.title} a={album.link} />
      ))}
    </section>
  );
}
