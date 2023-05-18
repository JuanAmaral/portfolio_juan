import styled from 'styled-components' 

export const Container = styled.div`
  height: 100vh;
  scroll-snap-type: both mandatory;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;
  scroll-direction: horizontal;
    h1{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 5rem;
    }
`;
export const SectionTest = styled.section`
    display: flex;
    flex: none;
    /* scroll-margin-left: 100px; */
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(153.92deg, #111315 -4.51%, #050505 100.48%);

    
`;