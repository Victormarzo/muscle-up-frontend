import styled from 'styled-components';

export default function SubTitle({ children }) {
    return (
        <SubTitleH2>{ children }</SubTitleH2>
    );
};
const SubTitleH2 = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    color: black;
`;
