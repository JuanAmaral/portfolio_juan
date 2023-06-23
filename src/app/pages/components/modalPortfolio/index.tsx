"use client";
import { useEffect, useState } from "react";
import * as S from "../../style.ts/components/modalPortfolio/style";
import { usePathname } from "next/navigation";
import Image from "next/image";
type MenuType = {
  project: IProject;
  isOpenModal: boolean;
  onCloseModal: () => void;
};
const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};
export default function ModalPortfolio({ ...props }: MenuType) {
  return (
    <>
      <S.Container
        showModal={props.isOpenModal}
        onClick={() => props.onCloseModal()}
      >
        {props.project.imageNext && (
          <S.Box onClick={() => handleClick}>
            <S.ContainerImage>
              <Image
                src={props.project.imageNext}
                alt={"Imagem " + props.project.title}
                width={600}
                height={300}
              ></Image>
            </S.ContainerImage>
            <S.ContainerImages>
              <Image
                src={props.project.image2}
                alt={"Imagem " + props.project.title}
                width={200}
                height={100}
              ></Image>
              <Image
                src={props.project.image3}
                alt={"Imagem " + props.project.title}
                width={200}
                height={100}
              ></Image>
              <Image
                src={props.project.image4}
                alt={"Imagem " + props.project.title}
                width={200}
                height={100}
              ></Image>
              <Image
                src={props.project.image5}
                alt={"Imagem " + props.project.title}
                width={200}
                height={100}
              ></Image>
            </S.ContainerImages>
            <S.ContainerText>
              <S.DateString>{props.project.dateString}</S.DateString>
              <S.Tittle>{props.project.title}</S.Tittle>
              <S.Description>{props.project.description}</S.Description>
              {props.project.linkURL && (
                <S.Button onClick={() => window.open(props.project.linkURL)}>
                  Ir para o projeto
                </S.Button>
              )}
              <S.ContainerDescription>
                <S.DescriptionEdit>
                  {props.project.typeProduct + "ㅤ"}
                </S.DescriptionEdit>
                <S.DescriptionEdit colorEdit="#00c78b">
                  {props.project.tecnologies}
                </S.DescriptionEdit>
              </S.ContainerDescription>

              <S.Divisor />
            </S.ContainerText>
          </S.Box>
        )}
      </S.Container>
    </>
  );
}
