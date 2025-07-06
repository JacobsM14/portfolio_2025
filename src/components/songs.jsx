import SeaOfDreams from "../assets/songs/sea_of_dreams.jpeg";
import Sanctuary from "../assets/songs/sanctuary.jpeg";
import SmalltownBoy from "../assets/songs/smalltown_boy.jpeg";
import VeridisQuo from "../assets/songs/veridis_quo.jpeg";
import Bloom from "../assets/songs/bloom.jpeg";
import DontStopMeNow from "../assets/songs/dont_stop_me_now.jpeg";
import SonataAMinorPanigni from "../assets/songs/sonata_a_minor_panigni.jpeg";
import IAmTheAntichristToYou from "../assets/songs/i_am_the_antichrist_to_you.jpeg";
import MoneyForNothing from "../assets/songs/money_for_nothing.jpeg";
import Bossanova from "../assets/songs/bossanova.jpeg";
export default function Songs(index) {
  const songs = [
    {
      title: "Sea of Dreams",
      artist: "Oberhofer",
      image: SeaOfDreams,
      link: "https://open.spotify.com/track/58SUbSjtnenNKD14jA6cgw?si=298067eba2574b27",
    },
    {
      title: "Sanctuary",
      artist: "Joji",
      image: Sanctuary,
      link: "https://open.spotify.com/track/4VQH4VluDUOsOuDxccTeyN?si=ea807f74a32c4f4c",
    },
    {
      title: "Smalltown Boy",
      artist: "Bronski Beat",
      image: SmalltownBoy,
      link: "https://open.spotify.com/track/5vmRQ3zELMLUQPo2FLQ76x?si=94d0543afa874b09",
    },
    {
      title: "Veridis Quo",
      artist: "Daft Punk",
      image: VeridisQuo,
      link: "https://open.spotify.com/track/2LD2gT7gwAurzdQDQtILds?si=b3ab686deebd48aa",
    },
    {
      title: "Bloom",
      artist: "Paper Kites",
      image: Bloom,
      link: "https://open.spotify.com/track/1HMQmOWrkieKYWlFsjUP3D?si=9cfb59fa5aec4791",
    },
    {
      title: "Don't Stop Me Now",
      artist: "Queen",
      image: DontStopMeNow,
      link: "https://open.spotify.com/track/5T8EDUDqKcs6OSOwEsfqG7?si=536d14e7dcbd4f35",
    },
    {
      title: "Sonata in A Minor",
      artist: "Niccolò Paganini",
      image: SonataAMinorPanigni,
      link: "https://open.spotify.com/track/0Z8N2t2ESzixtZAOOiQYEu?si=9d5b95f06be84577",
    },
    {
      title: "I Am The Antichrist To You",
      artist: "Kishi Bashi",
      image: IAmTheAntichristToYou,
      link: "https://open.spotify.com/track/3tnfHy341CDlAtcSmUtuOG?si=56be037cc9bc47fe",
    },
    {
      title: "Money for Nothing",
      artist: "Dire Straits",
      image: MoneyForNothing,
      link: "https://open.spotify.com/track/4bO6DljpuAeQh6HS20i0I5?si=a61c13362bfe4b5d",
    },
    {
      title: "Bossanova",
      artist: "Estopa",
      image: Bossanova,
      link: "https://open.spotify.com/track/26PQ2HSYlky6lK9MrvMZB8?si=ec2643fbef7e40f0",
    },
  ];

  return songs[index];
}
