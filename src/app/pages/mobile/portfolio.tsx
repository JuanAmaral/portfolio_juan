"use client";
import Image from "next/image";
import * as S from "../style.ts/mobilePortfolio/style";
import portImage from "../../assets/images/IMG.png";
import Menu from "../components/menu";
import UseWindowSize from "../../utils/useWindowSize";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Copyright from "../components/copyright";
import { dataPortfolioMobile } from "../components/Data/portfolioMobile";
import ModalPortfolio from "../components/modalPortfolio";
import SocialNetwork from "../components/socialNetwork";

export default function PortfolioMobile() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [expandList, setExpandList] = useState<boolean>(false);
  const { width } = UseWindowSize();
  function openModalPortfolio() {
    setOpenModal(true);
  }

  return (
    <S.Container id="portfolio">
      <S.Box expand={expandList}>
        <S.BigContainerText>
          <div>
            <p>{"Portfolio"}</p>
          </div>
          <S.Text>
            {"Let me take you"}
            <S.Text colorText="#00c78b">{" further "}</S.Text>
            {"than"}
            <div />
            {"you’ve ever been."}
          </S.Text>
        </S.BigContainerText>

        <S.ContainerImages expand={expandList}>
          {dataPortfolioMobile.map((value, index) => (
            <S.BoxInsideImages key={index}>
              <Image
                onClick={() => setOpenModal(!openModal)}
                src={portImage}
                width="0"
                height="0"
                alt="port"
                style={{ width: "100%", height: "auto" }}
              />
            </S.BoxInsideImages>
          ))}
        </S.ContainerImages>
        <S.Degrade />
        <S.ContainerButton onClick={() => setExpandList(!expandList)}>
          <S.ButtonMore>
            {expandList ? (
              <>
                {"less"} <S.IconExpandLess />
              </>
            ) : (
              <>
                {"more"} <S.IconExpandMore />
              </>
            )}
          </S.ButtonMore>
        </S.ContainerButton>
      </S.Box>
    </S.Container>
  );
}
