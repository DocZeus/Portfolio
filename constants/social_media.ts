import { BsFillEnvelopeOpenFill, BsGithub, BsLinkedin } from "react-icons/bs";

export interface SocialMediaItem {
  id: string;
  icon: React.ComponentType;
  title: string;
  url: string;
}

export const SOCIAL_MEDIA: SocialMediaItem[] = [
  {
    id: "linkedin",
    icon: BsLinkedin,
    title: "Visit LinkedIn profile",
    url: "https://www.linkedin.com/in/swapnil-toppo-b835787a/",
  },
  {
    id: "github",
    icon: BsGithub,
    title: "Visit Github profile",
    url: "https://github.com/DocZeus",
  },
  {
    id: "mail",
    icon: BsFillEnvelopeOpenFill,
    title: "Send me an email",
    url: "mailto://swapniltoppo@gmail.com",
  },
];
