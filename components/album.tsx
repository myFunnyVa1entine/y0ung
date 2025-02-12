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

export default function Albums({ classname }: { classname: string }) {
  const albums = [
    { title: "smallroom", src: "https://linksalad.net/ywS2HpUHWY" },
    { title: "someday", src: "https://linksalad.net/RlAtoLMxrT" },
  ];
  return (
    <section class={classname}>
      {albums.map((album) => (
        <Image key={album.title} name={album.title} a={album.src} />
      ))}
    </section>
  );
}
