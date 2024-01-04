import styled from 'styled-components';

export default function Ptext({ children }) {
    return (
        <PText>{ children }</PText>
    );
};
const PText =styled.p`
    font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        color:black;
        margin:0.5%
`;

