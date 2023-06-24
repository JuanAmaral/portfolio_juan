import styled ,{css} from 'styled-components';
import {Instagram } from "@styled-icons/boxicons-logos/Instagram";
import {Github} from "@styled-icons/boxicons-logos/Github";
import { Discord} from '@styled-icons/remix-fill/Discord';
import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {Facebook} from "@styled-icons/boxicons-logos/Facebook";
import {Whatsapp} from "@styled-icons/boxicons-logos/Whatsapp"; 
import {SendPlane} from "@styled-icons/remix-fill/SendPlane"
import {Email} from '@styled-icons/material-rounded/Email';
import {Phone} from '@styled-icons/boxicons-solid/Phone';
import {Location} from '@styled-icons/fluentui-system-filled/Location';

export const Container = styled.div`
    width: 100%;
    height: 85vh;
    margin-bottom: 2rem;
`; 

export const BoxForm = styled.form` 
    width: 100%;
    padding: 2rem;
    background: linear-gradient(130.64deg, #0D0D0D 13.08%, #131315 74.27%);
    box-shadow: -12px -12px 20px rgba(18, 18, 18, 0.8), 10px 10px 24px rgba(0, 0, 0, 0.7);
    border-radius: 13px;
    border: 1px solid #2d2c2e;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    button{
        background-color: #00c78b;
        padding: 1rem;
        border-radius: 10px;
        color: white;
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        width: 15rem;
        margin-top: 2rem;
    }

`;
export const ContainerBox = styled.div`
    width: 100%;
    max-height: 40rem;
    /* max-width: 50rem; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Text = styled.a<{colorText?: string}>`
    line-height: 1.2;
    font-size: 2rem;
    text-align: center;
    color: ${(props) => props.colorText ? props.colorText : "white"};
`;
export const Input = styled.input`
    border-bottom: 2px solid #9ca3af;
    color: #fff;
    background-color: transparent;
    width: 100%;
    margin-top: 3rem;
    font-size: 1rem;
    line-height:2rem;
    resize: vertical;
    &:focus{
        outline: none;
        caret-color: #00ffb2;
        border-bottom: 2px solid #00ffb2;
    }

`;
export const Textarea = styled.textarea`
     border-bottom: 2px solid #9ca3af;
    color: #fff;
    background-color: transparent;
    width: 100%;
    margin-top: 3rem;
    font-size: 1rem;
    line-height:2em;
    
    resize: vertical;
    &:focus{
        outline: none;
        caret-color: #00ffb2;
        border-bottom: 2px solid #00ffb2;
    }
`;

export const IconSendPlane = styled(SendPlane)`
    width: 2rem;
    height: 2rem;
    color: white;
`;




const iconContactStyles = css`
  width: 1.8rem;
  height: 1.8rem;
  color: #00c78b;
  cursor:pointer;
 
`;
export const IconEmail = styled(Email) `
    ${iconContactStyles}
`;
export const IconPhone = styled(Phone)`
    ${iconContactStyles}
`;
export const IconLocation =styled(Location)`
    ${iconContactStyles}
`;


export const ContainerMenu = styled.div`
    margin-top: 2rem;
`;