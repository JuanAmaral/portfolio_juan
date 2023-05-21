import styled ,{css} from 'styled-components';
import {Instagram } from "@styled-icons/boxicons-logos/Instagram";
import {Github} from "@styled-icons/boxicons-logos/Github";
import { Discord} from '@styled-icons/remix-fill/Discord';
import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {Facebook} from "@styled-icons/boxicons-logos/Facebook";
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp"; 


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
  width: 1.7rem;
  height: 1.7rem;
  
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

