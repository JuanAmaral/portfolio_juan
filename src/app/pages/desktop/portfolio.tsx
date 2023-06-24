"use client";
import Image from "next/image";
import * as S from "../../pages/style.ts/portfolio/style";
import Menu from "../components/menu";
import UseWindowSize from "../../utils/useWindowSize";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Copyright from "../components/copyright";
import { dataPortfolio } from "../components/Data/portfolio";
import ModalPortfolio from "../components/modalPortfolio";
import { goPage } from "@/app/utils/navigatePages";
const arrow = require("../../assets/svg/arrow.svg");

type PortfolioType = {
  onFocusEnterPortfolio: () => void;
  onFocusLeavePortfolio: () => void;
};
export default function Portfolio({ ...props }: PortfolioType) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [idProjetct, setidProjetct] = useState<number>(0);
  const OnOpenModal = () => {
    setOpenModal(false);
  };

  return (
    <S.Container>
      <S.Box>
        <S.ContainerArrow onClick={() => goPage(1)}>
          <Image src={arrow} alt="arrow left" width="30" height="30"></Image>
        </S.ContainerArrow>
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

        <ModalPortfolio
          project={dataPortfolio[idProjetct].project}
          isOpenModal={openModal}
          onCloseModal={OnOpenModal}
        />
        <S.ContainerImages
          id="containerImage"
          onMouseLeave={props.onFocusLeavePortfolio}
          onMouseEnter={props.onFocusEnterPortfolio}
        >
          {dataPortfolio.map((value, index) => (
            <S.BoxInsideImages key={index}>
              <Image
                onClick={() => {
                  setOpenModal(true);
                  setidProjetct(value.project.id);
                }}
                src={value.project.imageNext}
                width="300"
                height="150"
                alt="port"
              />
            </S.BoxInsideImages>
          ))}
        </S.ContainerImages>
      </S.Box>
      <Copyright />
    </S.Container>
  );
}
