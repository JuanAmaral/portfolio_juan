import styled ,{css , keyframes} from 'styled-components';
// import { Home } from '@styled-icons/entypo/Home';
import {Home} from '@styled-icons/heroicons-solid/Home';
import { Contact } from '@styled-icons/boxicons-solid/Contact';
import {SendPlane} from "@styled-icons/remix-fill/SendPlane"
import { Mail } from '@styled-icons/fluentui-system-filled/Mail';
import {FolderOpen} from '@styled-icons/ionicons-solid/FolderOpen';
import {Phone} from '@styled-icons/boxicons-solid/Phone';

export const ContainerMenu = styled.div`
  width: 100%;
  bottom: 0rem;
  position: fixed;
  padding: 1.5rem;
  left: 0;
  
`;

export const Menu = styled.div`
  /* border-radius: 13px; */
  border-radius: 40px;
  background: #121215;
  border: 1px solid #2d2c2e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
`;
export const MenuItem = styled.h3<{isHighlighted : boolean}>`
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #35353b;
  color: ${(props) => (props.isHighlighted ? '#5a32e9' : 'inherit')};
  text-shadow: ${(props) => props.isHighlighted? "0px 0px 20px #6B47ED" : ""};
`;
export const MenuItemBorder = styled.button<{active: boolean, idButton: number,selectedButton: number}>`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: -webkit-linear-gradient(left top, #77757a 0%, #050606 100%);

  animation-name: ${props => (props.active && props.idButton == Number(props.selectedButton)? "jump" : "")};
  animation-duration: 1s; 

  @keyframes jump {
    0% { transform: translate(0, -10%) scale(1.15, 0.75); }
    50% { transform: translate(0, -70%) scale(1, 1); }
    55% { transform: translate(0, -60%) rotate(15deg); }
    60% { transform: translate(0, -50%) rotate(-15deg); }
    65% { transform: translate(0, -40%) rotate(15deg); }
    70% { transform: translate(0, -15%) rotate(1.15, 0.75); }
    100% { transform: translate(0, 0) scale(1, 1); }
  }
  -webkit-tap-highlight-color: transparent;

`;


const iconMenuStyle = css`
  width: 1.4rem;
  height: 1.4rem;
  color: white;
  cursor:pointer;
`;

export const IconHome = styled(Home)`
 ${iconMenuStyle};
`;
export const IconFolderOpen = styled(FolderOpen)`
 ${iconMenuStyle};
`;
export const IconContact = styled(Mail)`
 ${iconMenuStyle};
`;

export const IconPhone = styled(Phone)`
  ${iconMenuStyle};
  color: #00c78b;
`;