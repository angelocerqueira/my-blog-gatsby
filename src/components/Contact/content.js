import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io'

const links = [
  {
    label: "Github",
    url: "https://github.com/angelocerqueira",
    icon: <FaGithub size={50} />
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/_angelDev",
    icon: <FaInstagram size={50} />

  },
  {
    label: "Linkedin",
    url:"https://www.linkedin.com/in/angelo-cerqueira",
    icon: <FaLinkedin size={50}/>
  },
  {
    label: "WhatsApp",
    url:"https://wa.me/5565981624739",
    icon: <FaWhatsapp size={50}/>
  },
];

export default links;
