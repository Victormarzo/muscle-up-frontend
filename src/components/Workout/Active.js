import dayjs from 'dayjs';
import styled from 'styled-components';

export default function Active({ length, name }) {
    const now = dayjs();
    return(
        <ActiveDiv>
            <h1>{name}</h1>
            <p>{length} exercicios</p>
        </ActiveDiv>
    );
};
const ActiveDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85vw;
    border-radius: 10px;
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color:white;
    }
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 23px;
        color:white;
    }
    background-color: #262A35;
`;
