import Songs from "./Songs";
import SpotifyLogo from "../assets/SpotfyLogo";
import { useEffect, useState } from "react";
export default function Spotify() {
  const [song, setSong] = useState({});
  const length = 10;
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * length);
    setSong(Songs(randomIndex));
  }, []);
  
  return (
    <div className="flex items-center justify-even w-fit p-4">
      <div className="w-[37%] bg-gray-600 flex items-center justify-center rounded-xl p-2 relative overflow-hidden relative">
        <div
          className="w-1 h-[50%] bg-white top-0 right-2 rotate-30 absolute z-20 rounded-md"
          style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}
        ></div>
        <img
          src={song.image}
          alt={song.title + "-" + song.artist}
          className="rounded-[100%] animate-spin"
          style={{
            animation: "spin 10s linear infinite",
            boxShadow: "0 4px 16px rgba(0,0,0,1.25)",
          }}
        />
      </div>
      <div className="flex items-center justify-between gap-10 w-fit p-2">
        <div className="flex flex-col items-start flex-start ml-4 w-full">
          <div className="flex items-center gap-2 mb-2 w-full">
            <p className="w-fit text-sm">Recently played</p>
            <SpotifyLogo />
          </div>
          <p className="text-lg font-bold">{song.title}</p>
          <p className="text-sm text-gray-light">{song.artist}</p>
        </div>
      </div>
    </div>
  );
}
