import Image from "next/image";
import * as S from "../pages/style.ts/contact/style";
import SocialNetwork from "./components/socialNetwork";
import Copyright from "./components/copyright";
import Menu from "./components/menu";
export default function Contact() {
  return (
    <S.Container>
      <S.ContainerBox>
        <S.Box>
          <S.Input placeholder="Your name"></S.Input>
          <S.Input placeholder="Your e-mail"></S.Input>
          <S.Input placeholder="Your message"></S.Input>
          <button>
            <S.IconSendPlane />
            {"Send Mensage"}
          </button>
          <S.ContainerMenu>
            <Menu selected={"contact"} />
          </S.ContainerMenu>
        </S.Box>

        <S.BigTextBox>
          <S.Text>
            {"Let’s"} <S.Text colorText={"#00c78b"}>{"create"}</S.Text>
            {" something cool together"}
          </S.Text>
          <S.ContainerContact>
            <S.Button>
              <S.IconEmail />
              {"contato@juanamaral.com.br"}
            </S.Button>
            <S.Button>
              <S.IconPhone />
              {"+55 62 99291 1658"}
            </S.Button>
            <S.Button>
              <S.IconLocation />
              {"Brazil to the whole world"}
            </S.Button>
          </S.ContainerContact>
          <S.ConstainerSocial>
            <SocialNetwork />
          </S.ConstainerSocial>
        </S.BigTextBox>
      </S.ContainerBox>
      <Copyright />
    </S.Container>
  );
}
