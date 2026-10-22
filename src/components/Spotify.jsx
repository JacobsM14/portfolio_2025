import { useState } from "react";
import getSong, { songCount } from "./Songs";
import SpotifyLogo from "../assets/SpotfyLogo";
import { getLabel } from "./Texts";

export default function Spotify({ language }) {
  const [songIndex] = useState(() => Math.floor(Math.random() * songCount));
  const song = getSong(songIndex);

  return (
    <div className="flex flex-col xl:flex-row items-center w-full xl:w-fit min-w-0 p-4 gap-2 xl:gap-0">
      <div className="w-16 shrink-0 xl:w-[37%] bg-gray-600 flex items-center justify-center rounded-xl p-2 relative overflow-hidden">
        <div
          className="w-1 h-[50%] bg-white top-0 right-2 rotate-30 absolute z-20 rounded-md"
          style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}
        ></div>
        <img
          src={song.image}
          alt={song.title + " - " + song.artist}
          className="rounded-full motion-safe:animate-vinyl"
          style={{ boxShadow: "0 4px 16px rgba(0,0,0,1.25)" }}
        />
      </div>
      <div className="flex items-center justify-between gap-10 w-full xl:w-fit min-w-0 p-2">
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left xl:ml-4 w-full min-w-0">
          <div className="flex items-center justify-center xl:justify-start gap-2 mb-2 w-full">
            <p className="w-fit text-sm">
              {getLabel(language, "recentlyPlayed")}
            </p>
            <SpotifyLogo />
          </div>
          <p className="text-lg font-bold">{song.title}</p>
          <p className="text-sm text-gray-light">{song.artist}</p>
        </div>
      </div>
    </div>
  );
}
