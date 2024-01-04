import styled from 'styled-components';

export default function Button({ children, ...props }) {
    return (
        <ButtonBox {...props }>{ children }</ButtonBox>
    );
};
const ButtonBox= styled.button`
    width: 326px;
    height: 58px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid #ffffff;
    background: #000A05;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;    
    color: white;
`;
