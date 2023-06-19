import Image from "next/image";
const Profile = require("../../assets/svg/juan.svg");
const juanmobile = require("../../assets/svg/juanmobile.svg");
const blurbox = require("../../assets/svg/blurblox.svg");
const arrow = require("../../assets/svg/arrow.svg");

import * as S from "../style.ts/mobileAbout/style";
import SocialNetwork from "../components/socialNetwork";
import Copyright from "../components/copyright";
import Menu from "../components/menu";

export default function AboutMobile() {
  return (
    <S.Container id="home">
      <S.ContainerBlurBox>
        <Image src={blurbox} alt="blur" width="950" height="950" />
      </S.ContainerBlurBox>
      <S.Box>
        <S.ContainerMiddle>
          <S.ContainerText>
            <h4>Hey, my name is</h4>
            <p>Juan Amaral</p>
          </S.ContainerText>
          <S.ContainerProfile>
            <Image
              src={juanmobile}
              alt="profile picture"
              width={300}
              height={350}
              style={{
                width: "fit-content !important",
                objectFit: "contain",
              }}
            ></Image>
          </S.ContainerProfile>
          <S.ContainerText>
            <h3>Front-End Developer. Unity, Java</h3>
            <h3>C#, React/Next expert and</h3>
            <h3>technology enthusiast.</h3>
          </S.ContainerText>
        </S.ContainerMiddle>
      </S.Box>
    </S.Container>
  );
}
