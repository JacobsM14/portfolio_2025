import IndignoDeSerHumano from "../assets/books/indigno_de_ser_humano.jpg";
import ElCorazonDeLasTinieblas from "../assets/books/el_corazon_de_las_tinieblas.jpg";
import ElFinDeLaInfancia from "../assets/books/el_fin_de_la_infancia.jpg";
import LaNaranjaMecanica from "../assets/books/la_naranja_mecanica.jpg";
export default function Books(lang, index) {
  const books = {
    es: [
      {
        title: "Indigno de Ser Humano",
        author: "Osamu Dazai",
        cover: IndignoDeSerHumano,
        description:
          "Un descenso íntimo a la alienación y la autodestrucción de un hombre que no logra encajar en la sociedad.",
      },
      {
        title: "El Corazón de las Tinieblas",
        author: "Joseph Conrad",
        cover: ElCorazonDeLasTinieblas,
        description:
          "Una novela que narra un viaje al corazón oscuro del colonialismo y la naturaleza humana.",
      },
      {
        title: "El Fin de la Infancia",
        author: "Arthur C. Clarke",
        cover: ElFinDeLaInfancia,
        description:
          "Una novela sobre el fin de la humanidad tal como la conocemos y el inicio de una nueva evolución.",
      },
      {
        title: "La Naranja Mecánica",
        author: "Anthony Burgess",
        cover: LaNaranjaMecanica,
        description:
          "Una novela sobre la violencia, la libertad y las consecuencias de la manipulación social.",
      },
    ],
    en: [
      {
        title: "No Longer Human",
        author: "Osamu Dazai",
        cover: IndignoDeSerHumano,
        description:
          "An intimate descent into the alienation and self-destruction of a man who fails to fit into society.",
      },
      {
        title: "Heart of Darkness",
        author: "Joseph Conrad",
        cover: ElCorazonDeLasTinieblas,
        description:
          "A novella that narrates a journey into the dark heart of colonialism and human nature.",
      },
      {
        title: "Childhood's End",
        author: "Arthur C. Clarke",
        cover: ElFinDeLaInfancia,
        description:
          "A novel about the end of humanity as we know it and the beginning of a new evolution.",
      },
      {
        title: "A Clockwork Orange",
        author: "Anthony Burgess",
        cover: LaNaranjaMecanica,
        description:
          "A novel about violence, freedom, and the consequences of social control.",
      },
    ],
  };

  return books[lang][index];
}
