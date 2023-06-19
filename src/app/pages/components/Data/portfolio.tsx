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
      dateString: "Nov, 2022",
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
];
