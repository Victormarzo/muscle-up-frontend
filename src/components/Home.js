import UserContext from '../contexts/UserContext';
import useWorkoutCheck from '../hooks/api/useWorkoutCheck';
import buttonSet from './Form/Buttons';
import { useState, useEffect, useContext } from 'react';
import Title from './Workout/Title';
import styled from 'styled-components';
import useGetLastWorkout from '../hooks/api/useGetLastWorkout';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

export default function Home() {
    const [current, setCurrent] = useState();
    const [last, setLast] = useState();
    const { workoutCheck, workoutCheckError } = useWorkoutCheck();
    const { userData } = useContext(UserContext);
    const { lastWorkout } = useGetLastWorkout();
    const navigate = useNavigate();
    const userName = userData.name;

    useEffect(() => {
        if (workoutCheck) {
            setCurrent(workoutCheck.id);
        }
        if (workoutCheckError) {
            if (workoutCheckError.response.data === 'Not Found') {
                setCurrent(false);
            }
        }
    }, [workoutCheck, workoutCheckError]);

    useEffect(() => {
        if (lastWorkout) {
            setLast(lastWorkout);
        }
    }, [lastWorkout]);

    function redirect(option) {
        if (option === 1) {
            navigate(`/workout/${current}`);
        } else if (option === 2) {
            navigate('/active-workout');
        } else if (option === 3) {
            navigate('/toggle');
        }
    }
    function dataParse(date) {
        return dayjs(date).format('DD/MM/YYYY');
    }

    const currentNotification =
        <CurrentContainer >
            <NotificationP>Você possui um treino em andamento</NotificationP>
            <NotificationS onClick={() => redirect(1)} >Ir para treino</NotificationS>
        </CurrentContainer >;

    return (

        <Container>
            <Title>Olá, {userName}</Title>
            {last ? (<Last>
                <Title>Ultimo treino:</Title>
                <LastWorkout>{last.name}</LastWorkout>
                <p>{dataParse(last.updatedAt)}</p>
            </Last>) :
                (<SpaceDiv>
                </SpaceDiv>)}

            <ButtonContainer>
                <buttonSet.ConfigButton onClick={() => redirect(3)} size='60px'></buttonSet.ConfigButton>
                <buttonSet.WorkoutButton onClick={() => redirect(2)} size='60px'></buttonSet.WorkoutButton>
            </ButtonContainer>
            {current ? (currentNotification) : (<></>)}
        </Container>

    );
}

const CurrentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 15%;
    border: solid 2px white;
    border-radius: 10px;
    padding: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85vw;
    margin-top:60%;
`;

const NotificationP = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color:white;
`;

const NotificationS = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color:white;
    text-decoration: underline;
`;

const Container = styled.div`
    margin-top:10%;
    display: flex;
    flex-direction: column;   
    width: 85vw;     
`;

const Last = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        color:white; 
    }
`;

const LastWorkout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 10px;
    background:#476C7C;
    width: 100%;
    height: 58px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color:black; 
    margin-bottom: 7%;
`;

const SpaceDiv = styled.div`
    height:188px;
`;
