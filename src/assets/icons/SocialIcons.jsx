import CV from "./..//cv.pdf";
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import EmailIcon from './EmailIcon';
import CvIcon from './CvIcon';
import GoodreadsIcon from './GoodreadsIcon';
import SteamIcon from './SteamIcon';

export default function socials() {
  return {
    github: {
      link: "https://github.com/JacobsM14",
      type: "link",
      icon: GithubIcon,
    },
    linkedin: {
      link: "https://www.linkedin.com/in/m-esplugas/",
      type: "link",
      icon: LinkedinIcon,
    },
    email: {
      link: "",
      type: "email",
      icon: EmailIcon,
    },
    cv: {
      link: CV,
      type: "cv",
      icon: CvIcon,
    },
    goodreads: {
      link: "https://www.goodreads.com/user/show/179143029-jacob",
      type: "link",
      icon: GoodreadsIcon,
    },
    steam: {
      link: "https://steamcommunity.com/profiles/76561198357047569/",
      type: "link",
      icon: SteamIcon,
    },
  };
}
