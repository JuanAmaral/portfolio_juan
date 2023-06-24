import styled ,{css} from 'styled-components';
import Image from "next/image";
import {ExpandMore} from '@styled-icons/material-outlined/ExpandMore';
import {ExpandLess} from '@styled-icons/material-outlined/ExpandLess';
export const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
    position: relative;
`; 

export const Box = styled.div<{expand: boolean}>`
    /* background: linear-gradient(130.64deg, #0D0D0D 13.08%, #131315 74.27%); */
    /* background: red; */
    /* box-shadow: -12px -12px 20px rgba(18, 18, 18, 0.8), 10px 10px 24px rgba(0, 0, 0, 0.7); */
    border-radius: 40px;
    /* border: 1px solid #2d2c2e; */
    width: 100%;
    display:flex;
    flex-direction: column;
    /* padding: 1rem 5rem 1rem 5rem; */
    height: ${(props) => props.expand ? '100%' : "70vh"};

`;
export const BigContainerText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    p{
        color:#00ffb2;
        font-size: 1.5rem;
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
    cursor: pointer;
    .image {
        object-fit: contain;
        width: 100% !important;
        position: relative !important;
        height: unset !important;
  }
`;
export const ContainerImages = styled.div<{expand: boolean}>`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    height: 100vh;
    overflow-y: ${(props) => props.expand ? "scroll" : "hidden"};
`;
export const Degrade = styled.div`
    background: linear-gradient(360deg, #0b0c0d 0%, #0b0c0d 0.05%, rgba(0, 0, 0, 0.13) 68.68%, rgba(0, 0, 0, 0) 100%);
    z-index: 2;
    height: 10rem;
    margin-top: -4.7rem;
`; 


export const ContainerMenu = styled.div`
    /* margin-top: 15.5rem; */
    color: white;
` ;
export const ContainerButton = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`;
export const ButtonMore = styled.div`
    color: white;
    border: 2px solid white;
    border-radius: 40px;
    width: 5.5rem;
    padding: 0.1rem 0.5rem;
    display: flex;
    justify-content: center;
`;
export const IconExpandMore = styled(ExpandMore)`
    width: 1.5rem;
    height: 1.5rem;
    color: white;
`;
export const IconExpandLess = styled(ExpandLess)`
    width: 1.5rem;
    height: 1.5rem;
    color: white;
`;

