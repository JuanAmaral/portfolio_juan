import styled ,{css} from 'styled-components';
import {Instagram } from "@styled-icons/boxicons-logos/Instagram";
import {Github} from "@styled-icons/boxicons-logos/Github";
import { Discord} from '@styled-icons/remix-fill/Discord';
import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {Facebook} from "@styled-icons/boxicons-logos/Facebook";
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp"; 
import {LinkedinSquare} from "@styled-icons/boxicons-logos/LinkedinSquare";
import {Phone} from '@styled-icons/boxicons-solid/Phone';

export const StyledIcon = styled.div`
  color: red;
  font-size: 24px;
`;

export const ContainerIcons = styled.div`
  width: 100%;
   margin-top: 2rem;
   display: flex;
   justify-content: center;
   gap: 1rem;
    
    :hover {
        color: #5a32e9;
    }
`;

const iconStyles = css`
  width: 2.5rem;
  height: 2.5rem;
  color: white;
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
export const IconLinkedinSquare = styled(LinkedinSquare)`
  ${iconStyles}
`;
export const IconPhone = styled(Phone)`
  ${iconStyles}
  color: #00c78b;
`;

