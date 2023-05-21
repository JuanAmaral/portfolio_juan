import styled ,{css} from 'styled-components';
import Image from "next/image";

export const Container = styled.div`
    margin-top: 2rem;
    width: 80%;
    position: relative;
`; 


export const Box = styled.div`
    background: linear-gradient(130.64deg, #0D0D0D 13.08%, #131315 74.27%);
    box-shadow: -12px -12px 20px rgba(18, 18, 18, 0.8), 10px 10px 24px rgba(0, 0, 0, 0.7);
    border-radius: 40px;
    border: 1px solid #2d2c2e;
    height: 100vh;
    display:flex;
    flex-direction: row;
    padding: 5rem;
`;
export const BigContainerText = styled.div`
    width: 60%;
    padding: 2rem;
    margin: 2rem 0rem 0rem 4rem;
    p{

        color:white;
        font-size: 2rem;
    }
`;


export const Text = styled.a<{colorText?: string}>`
    line-height: 1.2;
    font-size: 1rem;
    color: ${(props) => props.colorText ? props.colorText : "white"};
`;

export const BoxInsideImages = styled.div`
    display: flex;
    align-items: row;
    width: 300px;
    height: 150px;
`;
export const ContainerImages = styled.div`
    width: 40%;
    display:flex;
    flex-direction: column;
    
    
`;