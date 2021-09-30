import React from "react"
import { FaCode, FaSketch, FaPaintBrush } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I provide professional web Development services with splendid graphics to create high quality websites for your corporate business identity.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Web design is an extremely important part of any project/brand.I will make a clean, unique an professional looking website, it's must be respinsive, pixel perfect. w3c valid.`,
  },
  {
    id: 3,
    icon: <FaPaintBrush className="service-icon" />,
    title: "Graphic Design",
    text: `Graphic design is the process of visual communication and problem-solving using one or more of typography, photography, and illustration.`,
  },
]

export default services
