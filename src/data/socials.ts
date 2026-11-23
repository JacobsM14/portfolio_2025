import GithubIcon from "../assets/icons/github.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import EmailIcon from "../assets/icons/email.svg";
import GoodreadsIcon from "../assets/icons/goodreads.svg";
import SteamIcon from "../assets/icons/steam.svg";

// "email" entries copy the address instead of opening a link
export const socials = [
  {
    type: "link",
    label: "GitHub",
    url: "https://github.com/JacobsM14",
    icon: GithubIcon,
  },
  {
    type: "link",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/m-esplugas/",
    icon: LinkedinIcon,
  },
  {
    type: "email",
    address: "marcel.esplu@gmail.com",
    icon: EmailIcon,
  },
  {
    type: "link",
    label: "Goodreads",
    url: "https://www.goodreads.com/user/show/179143029-jacob",
    icon: GoodreadsIcon,
  },
  {
    type: "link",
    label: "Steam",
    url: "https://steamcommunity.com/profiles/76561198357047569/",
    icon: SteamIcon,
  },
] as const;
