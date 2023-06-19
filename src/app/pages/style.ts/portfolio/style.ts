import styled from 'styled-components';
import Image from "next/image";

export const Container = styled.div`
    width: 80%;
    position: relative;
`; 

export const Box = styled.div`
    /* background: linear-gradient(130.64deg, #0D0D0D 13.08%, #131315 74.27%); */
    /* background: red; */
    box-shadow: -12px -12px 20px rgba(18, 18, 18, 0.8), 10px 10px 24px rgba(0, 0, 0, 0.7);
    border-radius: 40px;
    border: 1px solid #2d2c2e;
    width: 100%;
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem 5rem 1rem 5rem;
    height: 80vh;
    max-height: 40rem;

`;
export const BigContainerText = styled.div`
    width: 40%;
    padding: 2rem;
    margin: 1rem 0rem 0rem 2rem;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
    p{
        color:white;
        font-size: 2.3rem;
        font-weight: 700;
    }
`;

export const Text = styled.a<{colorText?: string}>`
    line-height: 1.2;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.colorText ? props.colorText : "white"};
`;
export const ContainerImages = styled.div`
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(2,  1fr);
    max-width: 38rem;
    grid-gap: 0;
    gap: 0rem;
    width: 54%;
    flex-direction: row;
    justify-content: start;
    justify-items: center;
    align-content: center;
    align-items: start;
    overflow-y: scroll;
    flex-wrap: wrap;
`;
export const BoxInsideImages = styled.div`
    display: flex;
    align-items: row;
    justify-items: flex-end;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    .image {
        object-fit: contain;
        min-width: 100%;
        width: 100% !important;
        position: relative !important;
        height: unset !important;
  }
`;

export const ContainerMenu = styled.div`
    /* margin-top: 15.5rem; */
    color: white;
` ;