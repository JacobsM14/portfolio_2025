import { useState } from "react";

interface Song {
  title: string;
  artist: string;
  image: string;
}

interface Props {
  label: string;
  songs: Song[];
}

export default function NowPlaying({ label, songs }: Props) {
  const [song] = useState(
    () => songs[Math.floor(Math.random() * songs.length)],
  );

  return (
    <div className="flex flex-col xl:flex-row items-center w-full xl:w-fit min-w-0 p-4 desktop:p-3 gap-2 xl:gap-0">
      <div className="w-16 desktop:max-xl:w-12 shrink-0 xl:w-[37%] desktop:max-w-[calc(100cqh-2.5rem)] bg-gray-600 flex items-center justify-center rounded-xl p-2 relative overflow-hidden">
        <div className="w-1 h-[50%] bg-white top-0 right-2 rotate-30 absolute z-20 rounded-md shadow-[0_4px_16px_rgba(0,0,0,0.25)]" />
        <img
          src={song.image}
          alt={`${song.title} - ${song.artist}`}
          className="rounded-full motion-safe:animate-vinyl shadow-[0_4px_16px_rgba(0,0,0,1)]"
        />
      </div>
      <div className="flex flex-col items-center text-center xl:items-start xl:text-left xl:ml-4 w-full xl:w-fit min-w-0 p-2 desktop:p-1">
        <div className="flex items-center justify-center xl:justify-start gap-2 mb-2 desktop:mb-1 w-full">
          <p className="w-fit text-sm">{label}</p>
          <SpotifyLogo />
        </div>
        <p className="text-lg desktop:max-xl:text-base font-bold">{song.title}</p>
        <p className="text-sm text-gray-light">{song.artist}</p>
      </div>
    </div>
  );
}

function SpotifyLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fill="currentColor"
        d="M16 0C7.197 0 0 7.197 0 16s7.197 16 16 16s16-7.197 16-16S24.88 0 16 0m7.36 23.12c-.319.479-.881.64-1.36.317c-3.76-2.317-8.479-2.797-14.083-1.52c-.557.165-1.037-.235-1.199-.72c-.156-.557.24-1.036.719-1.197c6.084-1.36 11.365-.803 15.521 1.76c.563.24.64.88.401 1.36zm1.921-4.401c-.401.563-1.12.803-1.683.401c-4.317-2.641-10.88-3.437-15.916-1.839c-.641.156-1.365-.161-1.521-.803c-.161-.64.156-1.359.797-1.52c5.844-1.761 13.041-.876 18 2.161c.484.24.724 1.041.323 1.599zm.162-4.479c-5.125-3.043-13.683-3.36-18.563-1.839c-.801.239-1.599-.24-1.839-.964c-.239-.797.24-1.599.959-1.839c5.683-1.681 15.041-1.359 20.964 2.161c.719.401.957 1.36.557 2.079c-.401.563-1.36.801-2.079.401z"
      />
    </svg>
  );
}
