"use client";
import * as S from "../../style.ts/components/socialNetworkMobile/style";
type SocialNetwork = {
  mobile?: boolean;
};
export default function SocialNetworkMobile() {
  return (
    <S.ContainerIcons>
      <S.IconGithub
        onClick={() => window.open("https://github.com/JuanAmaral", "_blank")}
      />
      <S.IconLinkedinSquare
        onClick={() => window.open("https://twitter.com/HuoAn_", "_blank")}
      />

      <S.IconInstagram
        onClick={() =>
          window.open("https://www.instagram.com/juan.amaral_/", "_blank")
        }
      />
      <S.IconDiscord
        onClick={() => window.open("https://discord.gg/jt9ffsYt", "_blank")}
      />
      <S.IconWhatsapp
        onClick={() =>
          window.open(
            "https://wa.me/5562992911658?text=Hi%2C+I+see+you+portfolio%2C+let%27s+create+something%21%21"
          )
        }
      />
    </S.ContainerIcons>
  );
}
