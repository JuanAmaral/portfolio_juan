import styled ,{css} from 'styled-components';


export const Container = styled.div<{showModal: boolean}>`
    width: 120%;
    left: -10rem;
    top: -5rem;
    height: 100vh;
    /* filter: blur(4px); */
    position: absolute;
    z-index: 999999999;
    justify-content: center;
    margin: 0rem;
    display: ${(props) => props.showModal? "flex" : "none"};
    align-items: center;
`; 

export const Box = styled.div`
    border: 1px solid #2d2c2e;
    width: 100%;
    max-width: 53rem;
    max-height: 40rem;
    background: linear-gradient(130.64deg, #0D0D0D 13.08%, #131315 74.27%);
    box-shadow: -12px -12px 20px rgba(18, 18, 18, 0.8), 10px 10px 24px rgba(0, 0, 0, 0.7);
    border-radius: 40px;
    display:flex;
    flex-direction: row;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    position: relative;
    margin: 0rem;
`;

export const DateString = styled.h4`
  width: 100%;
  color: white;
  font-size: 0.8rem;
`;
export const Tittle = styled.p`
  font-size: 2rem;
  color: white;
  font-weight: 700;
`;
export const Description = styled.h2`
  font-size: 1rem;
  color: white;
`;
export const Button = styled.div`
  color: white;
  border: 2px solid white;
`;
export const ContainerText = styled.div`
  width: 100%;
  padding: 1rem 1rem 1rem 0rem;
  margin-top: -8rem;
`;
export const ContainerImage = styled.div`
  width: 100%;
  display: flex;
`;
export const ContainerImages = styled.div`
  width: 100%;
  padding: 7px 0px 0px 0px;
  gap: 7px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: -23rem;
`;
