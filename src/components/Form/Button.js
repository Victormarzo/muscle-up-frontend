import styled from 'styled-components';

export default function Button({ children, ...props }) {
    return (
        <ButtonBox {...props }>{ children }</ButtonBox>
    );
};
const ButtonBox= styled.button`
    width: 326px;
    height: 58px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border:none;
    background:#90FBFF;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;    
    color:${props => props.status?'black':'#6E95A7'}
}
`;
