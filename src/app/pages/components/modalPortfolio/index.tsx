"use client";
import { useEffect, useState } from "react";
import * as S from "../../style.ts/components/modalPortfolio/style";
import { usePathname } from "next/navigation";
import Image from "next/image";
type MenuType = {
  project: IProject;
};

export default function ModalPortfolio({ ...props }: MenuType) {
  return (
    <S.Container>
      <S.Box>
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
            src={props.project.imageNext}
            alt={"Imagem " + props.project.title}
            width={200}
            height={100}
          ></Image>
          <Image
            src={props.project.imageNext}
            alt={"Imagem " + props.project.title}
            width={200}
            height={100}
          ></Image>
          <Image
            src={props.project.imageNext}
            alt={"Imagem " + props.project.title}
            width={200}
            height={100}
          ></Image>
          <Image
            src={props.project.imageNext}
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
        </S.ContainerText>
      </S.Box>
    </S.Container>
  );
}
