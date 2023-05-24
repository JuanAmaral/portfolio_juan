import Image from "next/image";
import Profile from "../assets/svg/juan.svg";
import blurbox from "../assets/svg/blurblox.svg";
import * as S from "../../app/pages/style.ts/about/style";
import arrow from "../assets/svg/arrow.svg";
import SocialNetwork from "./components/socialNetwork";
import Copyright from "./components/copyright";
import Menu from "./components/menu";

export default function About() {
  function goPage(page: number) {
    const documentContainer = document.getElementById("container");
    if (documentContainer) {
      const scrollOffset = (page - 2) * 100;
      documentContainer.scrollBy({ left: scrollOffset });
    }
  }
  return (
    <S.Container>
      <div>
        <S.ContainerBlurBox>
          <Image src={blurbox} alt="blur" width="950" height="950"></Image>
        </S.ContainerBlurBox>
        <S.Box>
          <S.ContainerMiddle>
            <S.ContainerArrow onClick={() => goPage(1)}>
              <Image
                src={arrow}
                alt="arrow left"
                width="30"
                height="30"
              ></Image>
            </S.ContainerArrow>
            <S.ContainerProfile>
              <Image
                src={Profile}
                alt="profile picture"
                width="500"
                height="500"
              ></Image>
            </S.ContainerProfile>
            <S.ContainerText>
              <h4>Hey, my name is</h4>
              <p>Juan Amaral</p>
              <h3>Front-End Developer. Unity, Java</h3>
              <h3>C#, React/Next expert and</h3>
              <h3>technology enthusiast.</h3>
            </S.ContainerText>
            <S.ContainerArrow onClick={() => goPage(3)}>
              <Image
                style={{ transform: "scaleX(-1)" }}
                src={arrow}
                alt="arrow right"
                width="30"
                height="30"
                color="red"
              ></Image>
            </S.ContainerArrow>
          </S.ContainerMiddle>
          <S.ContainerFooter>
            <div>dev 🫡</div>
            <Menu selected={"home"} />
            <SocialNetwork />
          </S.ContainerFooter>
        </S.Box>
      </div>

      <Copyright />
    </S.Container>
  );
}
