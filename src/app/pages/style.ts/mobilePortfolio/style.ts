import styled ,{css} from 'styled-components';
import Image from "next/image";

export const Container = styled.div`
margin-top: 2rem;
    width: 100%;
    position: relative;
`; 

export const Box = styled.div`
    /* background: linear-gradient(130.64deg, #0D0D0D 13.08%, #131315 74.27%); */
    /* background: red; */
    /* box-shadow: -12px -12px 20px rgba(18, 18, 18, 0.8), 10px 10px 24px rgba(0, 0, 0, 0.7); */
    border-radius: 40px;
    /* border: 1px solid #2d2c2e; */
    width: 100%;
    display:flex;
    flex-direction: column;
    /* padding: 1rem 5rem 1rem 5rem; */
    height: 80vh;
    max-height: 40rem;

`;
export const BigContainerText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align    : center;

    p{
        color:#00ffb2;
        font-size: 2.3rem;
        font-weight: 700;
        text-shadow: 0px 0px 10px rgba(0, 255, 178, 0.4);
    }
`;

export const Text = styled.a<{colorText?: string}>`
    line-height: 1.2;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.colorText ? props.colorText : "white"};
`;

export const BoxInsideImages = styled.div`
    .image {
        object-fit: contain;
        width: 100% !important;
        position: relative !important;
        height: unset !important;
  }
`;
export const ContainerImages = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: hidden;
`;
export const ContainerMenu = styled.div`
    /* margin-top: 15.5rem; */
    color: white;
` ;