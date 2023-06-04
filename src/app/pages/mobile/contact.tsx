import Image from "next/image";
import * as S from "../style.ts/mobileContact/style";
import SocialNetworkMobile from "../components/socialNetworkMobile";
import Copyright from "../components/copyright";
import Menu from "../components/menu";
export default function ContactMobile() {
  return (
    <S.Container id="contact">
      <S.ContainerBox>
        <S.Box>
          <S.Text>
            {"Let’s"} <S.Text colorText={"#00c78b"}>{"create"}</S.Text>
            {" something cool together"}
          </S.Text>
          <S.Input placeholder="Your name"></S.Input>
          <S.Input placeholder="Your e-mail"></S.Input>
          <S.Input placeholder="Your message"></S.Input>
          <button>
            <S.IconSendPlane />
            {"Send Mensage"}
          </button>
        </S.Box>
      </S.ContainerBox>
      <SocialNetworkMobile />
      <Copyright />
    </S.Container>
  );
}
