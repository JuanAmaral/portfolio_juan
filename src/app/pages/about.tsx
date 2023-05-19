import Image from "next/image";
import Profile from "../assets/svg/juan.svg";
import blurbox from "../assets/svg/blurblox.svg";
import * as S from "../../app/pages/style.ts/about/style";
export default function About() {
  return (
    <S.Container>
      <div>
        <S.ContainerBlurBox>
          <Image src={blurbox} alt="blur" width="950" height="950"></Image>
        </S.ContainerBlurBox>
        <S.Box>
          <S.ContainerMiddle>
            <div>
              <Image
                src={Profile}
                alt="profile picture"
                width="500"
                height="500"
              ></Image>
            </div>
            <S.ContainerText>
              <h4>Hey, my name is</h4>
              <p>Juan Amaral</p>
              <a>Front-End Developer. Unity, Java</a>
              <a>C#, React/Next expert and</a>
              <a>technology enthusiast.</a>
            </S.ContainerText>
          </S.ContainerMiddle>
          <S.ContainerFooter>
            <div>dev 🫡</div>
            <S.Menu>
              <a>Contact</a>
              <a>Home</a>
              <a>Portfolio</a>
            </S.Menu>
            <S.ContainerIcons>
              <S.IconFacebook />
              <S.IconInstagram />
              <S.IconDiscord />
              <S.IconTwitter />
              <S.IconGithub />
            </S.ContainerIcons>
          </S.ContainerFooter>
        </S.Box>
      </div>

      <S.Copyright>Copyright © Juan Amaral. ‍All Rights Reserved.</S.Copyright>
    </S.Container>
  );
}
