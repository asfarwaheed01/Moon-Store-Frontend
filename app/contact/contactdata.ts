import fb from "../../public/assets/Facebook.png";
import twitter from "../../public/assets/Twitter.png";
import insta from "../../public/assets/Instagram.png";
import linkedIn from "../../public/assets/LinkedIn.png";
import yt from "../../public/assets/YouTube.png";

export const socials = [
  { key: "facebook", imgSrc: fb, link: "#" },
  { key: "twitter", imgSrc: twitter, link: "#" },
  { key: "insta", imgSrc: insta, link: "#" },
  { key: "linkedin", imgSrc: linkedIn, link: "#" },
  { key: "youtube", imgSrc: yt, link: "#" },
];

interface Info {
  heading: string;
  text: string;
}

export const infoData: Info[] = [
  {
    heading: "Office Hours:",
    text: "Monday - Friday 8:00 am to 5:00 pm",
  },
  {
    heading: "Email:",
    text: "contact@company.com",
  },
  {
    heading: "Phone:",
    text: "(414) 687 - 5892",
  },
  {
    heading: "Location:",
    text: "59 Middle Point Rd\nSan Francisco, 80412",
  },
];

export const formFields = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    label: "Company",
    name: "company",
    type: "text",
    placeholder: "Enter your company name",
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Enter your message",
    rows: 4,
  },
];
