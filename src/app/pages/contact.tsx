import Image from "next/image";
import * as S from "../pages/style.ts/contact/style";
import SocialNetwork from "./components/socialNetwork";
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
        </S.Box>

        <S.BigTextBox>
          <S.Text>
            Let’s discuss on something{" "}
            <S.Text colorText={"#00c78b"}>cool</S.Text> together
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
    </S.Container>
  );
}
