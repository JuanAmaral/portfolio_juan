"use client";
import { useEffect, useState } from "react";
import * as S from "../../style.ts/components/modalPortfolioMobile/style";
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
export default function ModalPortfolioMobile({ ...props }: MenuType) {
  const [selectedImage, setselectedImage] = useState<number>(0);
  const listImage = [
    { id: 0, image: props.project.imageNext as StaticImageData },
    { id: 1, image: props.project.image2 as StaticImageData },
    { id: 2, image: props.project.image3 as StaticImageData },
    { id: 3, image: props.project.image4 as StaticImageData },
    { id: 4, image: props.project.image5 as StaticImageData },
  ];

  function handleCloseModal(
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) {
    if (event.target === event.currentTarget) {
      props.onCloseModal();
    }
  }

  return (
    <>
      <S.Container showModal={props.isOpenModal}>
        {props.project.imageNext && (
          <S.Box onClick={(event) => handleCloseModal(event)}>
            <S.ContainerImage>
              {listImage && (
                <Image
                  src={listImage[selectedImage].image}
                  alt={"Imagem " + props.project.title}
                  width={300}
                  height={200}
                ></Image>
              )}
            </S.ContainerImage>
            <S.ContainerButton>
              {listImage.map((value, index) => (
                <S.SlideButton
                  selected={selectedImage == value.id ? true : false}
                  key={index}
                  onClick={() => setselectedImage(index)}
                />
              ))}
            </S.ContainerButton>

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
