"use client";
import Image from "next/image";
import * as S from "../../pages/style.ts/portfolio/style";
import portImage from "../../assets/images/IMG.png";
import Menu from "../components/menu";
import UseWindowSize from "../../utils/useWindowSize";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Copyright from "../components/copyright";
import { dataPortfolio } from "../components/Data/portfolio";
import ModalPortfolio from "../components/modalPortfolio";

export default function Portfolio() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { width } = UseWindowSize();
  function openModalPortfolio() {
    setOpenModal(true);
  }

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
        <ModalPortfolio
          project={dataPortfolio[0].project1}
          openModal={!openModal}
        />

        <S.ContainerImages>
          {dataPortfolio.map((value, index) => (
            <S.BoxInsideImages key={index}>
              <Image
                onClick={() => setOpenModal(!openModal)}
                src={portImage}
                width="300"
                height="150"
                alt="port"
              />
              <Image
                onClick={() => setOpenModal(!openModal)}
                src={portImage}
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
