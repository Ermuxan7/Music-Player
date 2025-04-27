"use client";
import Image from "next/image";

const musics = [
  {
    id: 1,
    title: "Break Through",
    artist: "Seul hoseubg",
    image: "/Image.png",
  },
  {
    id: 2,
    title: "Break Through",
    artist: "Seul hoseubg",
    image: "/Image.png",
  },
  {
    id: 3,
    title: "Break Through",
    artist: "Seul hoseubg",
    image: "/Image.png",
  },
  {
    id: 4,
    title: "Break Through",
    artist: "Seul hoseubg",
    image: "/Image.png",
  },
  {
    id: 5,
    title: "Break Through",
    artist: "Seul hoseubg",
    image: "/Image.png",
  },
  {
    id: 6,
    title: "Break Through",
    artist: "Seul hoseubg",
    image: "/Image.png",
  },
  {
    id: 7,
    title: "Break Through",
    artist: "Seul hoseubg",
    image: "/Image.png",
  },
  {
    id: 8,
    title: "Break Through",
    artist: "Seul hoseubg",
    image: "/Image.png",
  },
];

export default function MusicPlaylist() {
  return (
    <div className="h-full flex flex-col p-6 ">
      <h2 className="text-2xl font-bold">My Playlist</h2>
      <div className="flex flex-col gap-3 mt-6 pr-2 overflow-y-auto ">
        {musics.map((music) => (
          <div
            key={music.id}
            className="flex items-center gap-5 bg-zinc-600/50 p-4 rounded-lg shadow-md cursor-pointer hover:bg-zinc-600 transition-all duration-200"
          >
            <Image
              src={music.image}
              alt="image"
              width={64}
              height={64}
              className="rounded-full w-16 h-16"
            />
            <div>
              <h3 className="text-lg font-bold">{music.title}</h3>
              <p className="text-sm text-gray-400">{music.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
