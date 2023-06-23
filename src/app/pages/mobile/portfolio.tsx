"use client";
import Image from "next/image";
import * as S from "../style.ts/mobilePortfolio/style";
const portImage = require("../../assets/images/IMG.png");
import Menu from "../components/menu";
import UseWindowSize from "../../utils/useWindowSize";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Copyright from "../components/copyright";
import { dataPortfolio } from "../components/Data/portfolio";
import ModalPortfolioMobile from "../components/modalPortfolioMobile";
import SocialNetwork from "../components/socialNetwork";

export default function PortfolioMobile() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [expandList, setExpandList] = useState<boolean>(false);
  const [idProjetct, setidProjetct] = useState<number>(0);

  const { width } = UseWindowSize();
  const OnOpenModal = () => {
    setOpenModal(false);
  };

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
        <ModalPortfolioMobile
          project={dataPortfolio[idProjetct].project}
          isOpenModal={openModal}
          onCloseModal={OnOpenModal}
        />
        <S.ContainerImages expand={expandList}>
          {dataPortfolio.map((value, index) => (
            <S.BoxInsideImages key={index}>
              <Image
                onClick={() => {
                  setOpenModal(true);
                  setidProjetct(value.project.id);
                }}
                src={value.project.imageNext}
                width="300"
                height="200"
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
