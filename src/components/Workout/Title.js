import styled from 'styled-components';

export default function Title({ children }) {
    return (
        <TitleH1>{ children }</TitleH1>
    );
};
const TitleH1 = styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`;
