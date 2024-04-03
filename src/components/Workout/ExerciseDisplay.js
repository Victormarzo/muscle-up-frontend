import styled from 'styled-components';

export default function ExerciseDisplay( { name, sets }) {
    return(
        <>
            <ExerciseDiv>
                <Container>{name}
                </Container>
                <Container> {sets}
                </Container>
               
            </ExerciseDiv>
            
        </>
    );
};
const ExerciseDiv=styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    min-height:58px;
    width: 85vw;
    border-radius: 10px;
    margin-top:10%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 23px;
    color:white;
    background:#476C7C;
    padding: 0 5% 0 5%;
`;
const Container=styled.div`

`;
