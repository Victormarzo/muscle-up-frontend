import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function ExerciseDisplay( { name, sets }) {
    return(
        <>
            <ExerciseDiv>
                {name}
            </ExerciseDiv>
            <P>{sets}</P> 
        </>
    );
};
const ExerciseDiv=styled.div`
    display: flex;
    justify-content: space-between;
    width: 85vw;
    border-radius: 10px;
    margin-top:10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color:white;
`;
const P=styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color:white;
`;
