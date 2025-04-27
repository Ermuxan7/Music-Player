import Music from "./components/music/page";
import MusicPlaylist from "./components/music-playlist/page";
import MusicPlayer from "./components/music-player/page";

export default function Home() {
  return (
    <div className="grid grid-cols-10 grid-rows-8 gap-4 p-4 w-full h-screen">
      <div className="col-span-6 row-span-7 bg-zinc-700/50 text-white rounded-lg">
        <Music />
      </div>
      <div className="col-span-4 row-span-8 bg-zinc-700/50 text-white rounded-lg h-full flex flex-col">
        <MusicPlaylist />
      </div>
      <div className="col-span-6 row-span-1 bg-zinc-700/50 text-white rounded-lg">
        <MusicPlayer />
      </div>
    </div>
  );
}
