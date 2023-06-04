import styled ,{css} from 'styled-components';
import {Instagram } from "@styled-icons/boxicons-logos/Instagram";
import {Github} from "@styled-icons/boxicons-logos/Github";
import { Discord} from '@styled-icons/remix-fill/Discord';
import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {Facebook} from "@styled-icons/boxicons-logos/Facebook";
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp"; 

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`; 

export const ContainerBlurBox = styled.div` 
    width: 100%;
    position:absolute;
    margin-top: 2rem;
    left: -2rem;
    z-index: 1;
    pointer-events: none;
`;
export const Box = styled.div`
    border: 1px solid #2d2c2e;
    width: 100%;
    background: linear-gradient(130.64deg, #0D0D0D 13.08%, #131315 74.27%);
    box-shadow: -12px -12px 20px rgba(18, 18, 18, 0.8), 10px 10px 24px rgba(0, 0, 0, 0.7);
    border-radius: 13px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    
`;
export const ContainerMiddle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    z-index: 2;
    width: 100%;
`;

export const ConImageText = styled.div`
    width: 100%;
`;
export const ContainerArrow = styled.div`
    display:flex;
    cursor:pointer;
`;
export const ContainerProfile = styled.div`
    margin: 0rem;
    width: 100%;

`;
export const ContainerText = styled.div`
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    h3{
        font-size: 1rem;
    }
    p{
        font-size: 2rem;
        font-weight: 700;
    }
    h4{
        font-size: 0.8rem;
    }
`;


export const StyledIcon = styled.div`
  color: red;
  font-size: 24px;
`;

export const ContainerIcons = styled.div`
    display: flex;
    gap: 0.5rem;
    :hover {
        color: #5a32e9;
    }
`;

const iconStyles = css`
  width: 1.8rem;
  height: 1.8rem;
  cursor:pointer;
`;

export const IconFacebook = styled(Facebook)`
  ${iconStyles}
`;
export const IconInstagram  = styled(Instagram)`
   ${iconStyles}
`;
export const IconDiscord = styled(Discord)`
  ${iconStyles}
`;
export const IconTwitter = styled(Twitter)`
  ${iconStyles}
`;
export const IconGithub = styled(Github)`
  ${iconStyles}
`;
export const IconWhatsapp = styled(Whatsapp)`
  ${iconStyles}
`;

