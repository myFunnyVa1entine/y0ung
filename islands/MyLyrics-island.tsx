import { useState } from "preact/hooks";
// import lyrics from '../lyrics.json' with { type: "json"};

export default function MyLyricsIsland() {
  const [isLyrics, setIsLyrics] = useState(false);

  const handleClick = () => setIsLyrics((curr) => !curr);

  return (
    <div>
      <h2 class="text-center text-xl pt-8">LYRICS</h2>
      <div class="flex justify-center items-center gap-4 py-4">
        <div class="hover:cursor-pointer" onClick={handleClick}>small room</div>
        <div class="hover:cursor-pointer" onClick={handleClick}>someday</div>
      </div>
      {isLyrics ? "smallroom" : "someday"}
      <section class="text-center">
        <h3 class="text-lg my-4"></h3>
        <div>늘 마음속 한 가운데</div>
        <div>그 누구에게나 있다는 방</div>
        <div>채워지지 않는 작은 방이 있어</div>

        혹, 새로운 누군가가 작은 내 방에 문을 열고 낡고 오래된 기억들을 모두
        정리 해준다면 얼마나 좋을까?

        오래전 그날 넌 나에게 하고 싶은 말이 있던 건 아니었을까? 무심 했던 나의
        그 말들이 상처는 아니었을까

        큰 슬픔이 찾아올 때, 그 작은방 안으로 숨어 언젠간 아픈 기억들도 추억이
        될거란 너의 마지막 그 말

        오래전 그날 넌 나에게 하고 싶은 말이 있던 건 아니었을까? 무심 했던 나의
        그 말들이 상처는 아니었을까

        스쳐 가는 봄날의 바람처럼 서로를 아끼고 사랑했던 기억도 계절을 따라
        흩어져가 더욱더 희미해져 가

        지금의 아픔도 너의 시련도 추억이 될 거야 먼 훗날 언젠가 시간이 흐르면
        추억이 될 거야 괜찮아 질 거야

        오래전 그날 넌 나에게 하고 싶은 말이 있던 건 아니었을까? 무심 했던 나의
        그 말들이 상처는 아니었을까

        스쳐 가는 봄날의 바람처럼 서로를 아끼고 사랑했던 기억도 계절을 따라
        흩어져가 더욱 더 희미해져 가
      </section>
    </div>
  );
}
