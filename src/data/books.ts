import IndignoDeSerHumano from "../assets/books/indigno_de_ser_humano.webp";
import ElCorazonDeLasTinieblas from "../assets/books/el_corazon_de_las_tinieblas.webp";
import ElFinDeLaInfancia from "../assets/books/el_fin_de_la_infancia.webp";
import LaNaranjaMecanica from "../assets/books/la_naranja_mecanica.webp";

export const books = [
  {
    id: "noLongerHuman",
    author: "Osamu Dazai",
    cover: IndignoDeSerHumano,
  },
  {
    id: "heartOfDarkness",
    author: "Joseph Conrad",
    cover: ElCorazonDeLasTinieblas,
  },
  {
    id: "childhoodsEnd",
    author: "Arthur C. Clarke",
    cover: ElFinDeLaInfancia,
  },
  {
    id: "clockworkOrange",
    author: "Anthony Burgess",
    cover: LaNaranjaMecanica,
  },
] as const;

