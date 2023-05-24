import styled ,{css} from 'styled-components';


export const Menu = styled.div`
    width: calc(100% / 3);
    gap: 1.8rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    :hover {
    color: #5a32e9;
  }
    

`;
export const MenuItem = styled.h3<{isHighlighted : boolean}>`

  color: ${(props) => (props.isHighlighted ? '#5a32e9' : 'inherit')};
`;