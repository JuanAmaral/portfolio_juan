const IMG = require("../../../assets/images/IMG.png");
const imageJDS = require("../../../assets/images/imageJDS.png");
const imageHUB = require("../../../assets/images/imageHUB.png");
import Image, { ImageProps } from "next/image";

const jds1 = require("../../../assets/images/jds/jds1.jpg");
const jds2 = require("../../../assets/images/jds/jds2.jpg");
const jds3 = require("../../../assets/images/jds/jds3.jpg");
const jds4 = require("../../../assets/images/jds/jds4.jpg");
const jds5 = require("../../../assets/images/jds/jds5.jpg");

const bingot1 = require("../../../assets/images/bingot/bingot1.jpg");
const bingot2 = require("../../../assets/images/bingot/bingot2.png");
const bingot3 = require("../../../assets/images/bingot/bingot3.jpg");
const bingot4 = require("../../../assets/images/bingot/bingot4.jpg");
const bingot5 = require("../../../assets/images/bingot/bingot5.jpg");

const tryedu1 = require("../../../assets/images/tryedu/tryedu1.jpg");
const tryedu2 = require("../../../assets/images/tryedu/tryedu2.jpg");
const tryedu3 = require("../../../assets/images/tryedu/tryedu3.jpg");
const tryedu4 = require("../../../assets/images/tryedu/tryedu4.jpg");
const tryedu5 = require("../../../assets/images/tryedu/tryedu5.jpg");

const umpraum1 = require("../../../assets/images/umpraum/umpraum1.jpg");
const umpraum2 = require("../../../assets/images/umpraum/umpraum2.jpg");
const umpraum3 = require("../../../assets/images/umpraum/umpraum3.jpg");
const umpraum4 = require("../../../assets/images/umpraum/umpraum4.jpg");
const umpraum5 = require("../../../assets/images/umpraum/umpraum5.jpg");

const ecommerce1 = require("../../../assets/images/ecommerce/ecommerce1.jpg");
const ecommerce2 = require("../../../assets/images/ecommerce/ecommerce2.jpg");
const ecommerce3 = require("../../../assets/images/ecommerce/ecommerce3.jpg");
const ecommerce4 = require("../../../assets/images/ecommerce/ecommerce4.png");
const ecommerce5 = require("../../../assets/images/ecommerce/ecommerce5.png");

const quina1 = require("../../../assets/images/quina/quina1.jpg");
const quina2 = require("../../../assets/images/quina/quina2.jpg");
const quina3 = require("../../../assets/images/quina/quina3.jpg");
const quina4 = require("../../../assets/images/quina/quina4.jpg");
const quina5 = require("../../../assets/images/quina/quina5.jpg");

export const dataPortfolio = [
  {
    project: {
      id: 0,
      dateString: "Jan, 2023",
      title: "Gambling platform",
      description:
        "A gambling platform with authentication, CPF validation with tax revenue, password recovery, and multiple payment options. I participated by creating the project's kickoff documentation and also in its front-end development.",
      linkUrl: "",
      imageNext: jds1 as StaticImageData,
      image2: jds2 as StaticImageData,
      image3: jds3 as StaticImageData,
      image4: jds4 as StaticImageData,
      image5: jds5 as StaticImageData,
      typeProduct: "Website",
      tecnologies: "Typecript nextjs",
    },
  },
  {
    project: {
      id: 1,
      dateString: "may, 2022",
      title: "BINGOT",
      description:
        "Online bingo game developed in conjunction with its management platform, allowing the modification of themes, winning sequences, and other currency and betting-related information.",
      linkUrl: "",
      imageNext: bingot1 as StaticImageData,
      image2: bingot2 as StaticImageData,
      image3: bingot3 as StaticImageData,
      image4: bingot4 as StaticImageData,
      image5: bingot5 as StaticImageData,
      typeProduct: "Website",
      tecnologies: "Typecript nextjs",
    },
  },
  {
    project: {
      id: 2,
      dateString: "out, 2022",
      title: "TRYEDU",
      description:
        "Interactive educational platform where students can respond to multiple quizzes inside a 3D school. Teachers can access the log to analyze the student's progress through statistics and provide feedback. There's also a teacher's area, with numerous resources so they can improve didatics and teaching techniques.",
      linkUrl: "",
      imageNext: tryedu1 as StaticImageData,
      image2: tryedu2 as StaticImageData,
      image3: tryedu3 as StaticImageData,
      image4: tryedu4 as StaticImageData,
      image5: tryedu5 as StaticImageData,
      typeProduct: "Website and app",
      tecnologies: "Typecript nextjs reactjs and native",
    },
  },
  {
    project: {
      id: 3,
      dateString: "july, 2022",
      title: "One for one",
      description:
        "Responsive and interactive website with 3D elements, developed for the largest football fair in Brazil to showcase the gameplay of the game 'One for One', featuring partnerships with 'Luva de Pedreiro' and 'Falcão'",
      linkUrl: "",
      imageNext: umpraum1 as StaticImageData,
      image2: umpraum2 as StaticImageData,
      image3: umpraum3 as StaticImageData,
      image4: umpraum4 as StaticImageData,
      image5: umpraum5 as StaticImageData,
      typeProduct: "Website",
      tecnologies: "Typecript reactjs spline",
    },
  },
  {
    project: {
      id: 4,
      dateString: "out, 2022",
      title: "E-commerce One for One",
      description:
        "Responsive e-commerce developed for the sale of packages for the game One for One, featuring an authentication system, password recovery (via email and SMS), and purchases using bank transfers (PIX) and credit cards.",
      linkUrl: "",
      imageNext: ecommerce1 as StaticImageData,
      image2: ecommerce2 as StaticImageData,
      image3: ecommerce3 as StaticImageData,
      image4: ecommerce4 as StaticImageData,
      image5: ecommerce5 as StaticImageData,
      typeProduct: "Website",
      tecnologies: "Typecript reactjs",
    },
  },
  {
    project: {
      id: 5,
      dateString: "nov, 2021",
      title: "QUINA",
      description:
        "Platform developed in partnership with credit card machines for real-time and up-to-date horse racing results integration into the system, featuring authentication, prize validation, and even statistics.",
      linkUrl: "",
      imageNext: quina1 as StaticImageData,
      image2: quina2 as StaticImageData,
      image3: quina3 as StaticImageData,
      image4: quina4 as StaticImageData,
      image5: quina5 as StaticImageData,
      typeProduct: "Website",
      tecnologies: "Typecript reactJs",
    },
  },
];
