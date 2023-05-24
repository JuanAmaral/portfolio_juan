"use client";
import * as S from "../../style.ts/components/socialNetwork/style";

export default function SocialNetwork() {
  return (
    <S.ContainerIcons>
      <S.IconFacebook
        onClick={() =>
          window.open("https://www.facebook.com/juanamaral.com.br", "_blank")
        }
      />
      <S.IconInstagram
        onClick={() =>
          window.open("https://www.instagram.com/juan.amaral_/", "_blank")
        }
      />
      <S.IconDiscord
        onClick={() => window.open("https://discord.gg/jt9ffsYt", "_blank")}
      />
      <S.IconTwitter
        onClick={() => window.open("https://twitter.com/HuoAn_", "_blank")}
      />
      <S.IconGithub
        onClick={() => window.open("https://github.com/JuanAmaral", "_blank")}
      />
    </S.ContainerIcons>
  );
}
