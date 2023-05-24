import Image from "next/image";
import * as S from "../pages/style.ts/portfolio/style";
import portImage from "../assets/images/IMG.png";
import Menu from "./components/menu";

export default function portfolio() {
  return (
    <S.Container>
      <S.Box>
        <S.BigContainerText>
          <div>
            <p>{"Portfolio"}</p>
            <S.Text>
              {"Let me take you"}
              <S.Text colorText="#00c78b">{" further "}</S.Text>
              <div />
              {"than you’ve ever been."}
            </S.Text>
          </div>
          <S.ContainerMenu>
            <Menu selected={"portfolio"} />
          </S.ContainerMenu>
        </S.BigContainerText>
        <S.ContainerImages>
          <S.BoxInsideImages>
            <Image src={portImage} width="250" height="150" alt="port" />
            <Image src={portImage} width="250" height="150" alt="port" />
          </S.BoxInsideImages>
          <S.BoxInsideImages>
            <Image src={portImage} width="250" height="150" alt="port" />
            <Image src={portImage} width="250" height="150" alt="port" />
          </S.BoxInsideImages>{" "}
          <S.BoxInsideImages>
            <Image src={portImage} width="250" height="150" alt="port" />
            <Image src={portImage} width="250" height="150" alt="port" />
          </S.BoxInsideImages>{" "}
        </S.ContainerImages>
      </S.Box>
    </S.Container>
  );
}
