import dayjs from 'dayjs';
import styled from 'styled-components';
import Title from './Title';

export default function LastWorkout({ name, date }) {
    const data = dayjs(date).format('DD/MM/YYYY');
    return(
        <>
            <Title>Ultimo treino</Title>
            <LastWorkoutDiv>
                <p>Dia:{data}</p>
                <p>Treino:{name}</p>
            </LastWorkoutDiv>
        </>
    );
};

const LastWorkoutDiv=styled.div`
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
    background-color: #262A35;
`;
