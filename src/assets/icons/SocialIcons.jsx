import CV from "../cv.pdf";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import EmailIcon from "./EmailIcon";
import CvIcon from "./CvIcon";
import GoodreadsIcon from "./GoodreadsIcon";
import SteamIcon from "./SteamIcon";

export const socials = {
  github: {
    label: "GitHub",
    link: "https://github.com/JacobsM14",
    type: "link",
    icon: GithubIcon,
  },
  linkedin: {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/m-esplugas/",
    type: "link",
    icon: LinkedinIcon,
  },
  email: {
    label: "Email",
    link: "mailto:marcel.esplu@gmail.com",
    type: "email",
    icon: EmailIcon,
  },
  cv: {
    label: "CV",
    link: CV,
    type: "cv",
    icon: CvIcon,
  },
  goodreads: {
    label: "Goodreads",
    link: "https://www.goodreads.com/user/show/179143029-jacob",
    type: "link",
    icon: GoodreadsIcon,
  },
  steam: {
    label: "Steam",
    link: "https://steamcommunity.com/profiles/76561198357047569/",
    type: "link",
    icon: SteamIcon,
  },
};
