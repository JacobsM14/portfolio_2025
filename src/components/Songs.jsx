import SeaOfDreams from "../assets/songs/sea_of_dreams.webp";
import Sanctuary from "../assets/songs/sanctuary.webp";
import SmalltownBoy from "../assets/songs/smalltown_boy.webp";
import VeridisQuo from "../assets/songs/veridis_quo.webp";
import Bloom from "../assets/songs/bloom.webp";
import DontStopMeNow from "../assets/songs/dont_stop_me_now.webp";
import SonataAMinorPanigni from "../assets/songs/sonata_a_minor_panigni.webp";
import IAmTheAntichristToYou from "../assets/songs/i_am_the_antichrist_to_you.webp";
import MoneyForNothing from "../assets/songs/money_for_nothing.webp";
import Bossanova from "../assets/songs/bossanova.webp";
const songs = [
  {
    title: "Sea of Dreams",
    artist: "Oberhofer",
    image: SeaOfDreams,
    link: "https://open.spotify.com/track/58SUbSjtnenNKD14jA6cgw",
  },
  {
    title: "Sanctuary",
    artist: "Joji",
    image: Sanctuary,
    link: "https://open.spotify.com/track/4VQH4VluDUOsOuDxccTeyN",
  },
  {
    title: "Smalltown Boy",
    artist: "Bronski Beat",
    image: SmalltownBoy,
    link: "https://open.spotify.com/track/5vmRQ3zELMLUQPo2FLQ76x",
  },
  {
    title: "Veridis Quo",
    artist: "Daft Punk",
    image: VeridisQuo,
    link: "https://open.spotify.com/track/2LD2gT7gwAurzdQDQtILds",
  },
  {
    title: "Bloom",
    artist: "Paper Kites",
    image: Bloom,
    link: "https://open.spotify.com/track/1HMQmOWrkieKYWlFsjUP3D",
  },
  {
    title: "Don't Stop Me Now",
    artist: "Queen",
    image: DontStopMeNow,
    link: "https://open.spotify.com/track/5T8EDUDqKcs6OSOwEsfqG7",
  },
  {
    title: "Sonata in A Minor",
    artist: "Niccolò Paganini",
    image: SonataAMinorPanigni,
    link: "https://open.spotify.com/track/0Z8N2t2ESzixtZAOOiQYEu",
  },
  {
    title: "I Am The Antichrist To You",
    artist: "Kishi Bashi",
    image: IAmTheAntichristToYou,
    link: "https://open.spotify.com/track/3tnfHy341CDlAtcSmUtuOG",
  },
  {
    title: "Money for Nothing",
    artist: "Dire Straits",
    image: MoneyForNothing,
    link: "https://open.spotify.com/track/4bO6DljpuAeQh6HS20i0I5",
  },
  {
    title: "Bossanova",
    artist: "Estopa",
    image: Bossanova,
    link: "https://open.spotify.com/track/26PQ2HSYlky6lK9MrvMZB8",
  },
];

export const songCount = songs.length;

export default function getSong(index) {
  return songs[index];
}
