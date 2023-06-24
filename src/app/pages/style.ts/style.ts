import styled from 'styled-components' 

export const Container = styled.div`
  height: 100vh;
  scroll-snap-type: both mandatory;
  overflow-y: hidden;
  overflow-x: scroll;
 
 
  display: flex;
  scroll-behavior: smooth;
  /* scroll-direction: horizontal; */
    h1{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 5rem;
    }
`;
export const ContainerRotate = styled.div`
transform: rotate(90deg);
`;
export const ContainerMobile = styled.div`
    margin: 0%;
    width: 100%;
    padding: 1.5rem;
    background: linear-gradient(153.92deg, #111315 -4.51%, #050505 100.48%);
`;
export const SectionTest = styled.section<{bg?: string}>`
    display: flex;
    flex: none;

    /* scroll-margin-left: 100px; */
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.bg ? props.bg : "linear-gradient(153.92deg, #111315 -4.51%, #050505 100.48%)"}
`;