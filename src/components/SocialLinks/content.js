import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram
} from 'react-icons/fa';


const links = [
  {
    label: "Github",
    url: "https://github.com/angelocerqueira",
    icon: <FaGithub size={30} />
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/_angelocerqueira",
    icon: <FaInstagram size={30} />

  },
  {
    label: "Linkedin",
    url:"https://www.linkedin.com/in/angelo-cerqueira",
    icon: <FaLinkedin size={30}/>

  },
];

export default links;
