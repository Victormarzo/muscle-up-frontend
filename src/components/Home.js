import UserContext from '../contexts/UserContext';
import useWorkoutCheck from '../hooks/api/useWorkoutCheck';
import buttonSet from './Form/Buttons';
import { useState, useEffect, useContext } from 'react';
import Title from './Workout/Title';
import styled from 'styled-components';
import useGetLastWorkout from '../hooks/api/useGetLastWorkout';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Toast from './Toast';
import { toast } from 'react-toastify';
import useLogUserOut from '../hooks/api/useLogUserOut';
import Spinner from './Form/Spinner';

export default function Home() {
    const [current, setCurrent] = useState();
    const [last, setLast] = useState();
    const { workoutCheck, workoutCheckError } = useWorkoutCheck();
    const { userData } = useContext(UserContext);
    const { lastWorkoutLoading, lastWorkout } = useGetLastWorkout();
    const navigate = useNavigate();
    const userName = userData.name;
    const { logOut } = useLogUserOut();
    let currentWorkoutComponent;
    let lastWorkoutComponent;
    const currentNotification =
        <CurrentContainer >
            <NotificationP>Você possui um treino em andamento</NotificationP>
            <NotificationS onClick={() => redirect(1)} >Ir para treino</NotificationS>
        </CurrentContainer >;

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

    async function logout() {
        try {
            await logOut();
            toast('Deslogado com sucesso');
            localStorage.clear();
            setTimeout(() => {
                navigate('/sign-in');
            }, 2000);
        } catch (error) {
            toast('Não foi possivel deslogar');
        }
    }

    function renderLastWorkout() {
        if (lastWorkoutLoading || (lastWorkout && !last)) {
            lastWorkoutComponent = <StyleDiv>
                <Spinner />
            </StyleDiv>;
        } else if (lastWorkout && last) {
            if (last) {
                lastWorkoutComponent =
                    <Last>
                        <Title>Ultimo treino:</Title>
                        <LastWorkout>{last.Workout.name}</LastWorkout>
                        <p>{dataParse(last.updatedAt)}</p>
                    </Last>;
            }
        }
        else if (lastWorkout === false) {
            lastWorkoutComponent =
                <SpaceDiv>
                    <p>Parece que você ainda não fez nenhum treino</p>
                    <NotificationS onClick={() => redirect(2)}>Bora treinar?</NotificationS>
                </SpaceDiv >;
        }
    }

    function renderCurrentWorkout() {
        if (current) {
            currentWorkoutComponent = currentNotification;
        } else {
            currentWorkoutComponent = <></>;
        }
    }

    renderLastWorkout();
    renderCurrentWorkout();
    return (
        <Container>
            <LogoutDiv><buttonSet.LogoutButton onClick={logout} size='25px'></buttonSet.LogoutButton></LogoutDiv>
            <Title>Olá, {userName}</Title>
            <Content>
                {lastWorkoutComponent}
                {currentWorkoutComponent}
            </Content>
            <ButtonContainer>
                <buttonSet.ConfigButton onClick={() => redirect(3)} size='60px'></buttonSet.ConfigButton>
                <buttonSet.WorkoutButton onClick={() => redirect(2)} size='60px'></buttonSet.WorkoutButton>
            </ButtonContainer>
            <Toast />
        </Container >
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
const Content = styled.div`
    min-height:65vh;
`;
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85vw;
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
const StyleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;
const LogoutDiv = styled.div`
    height:5vh;
    display:flex;
    align-items: center;
    justify-content: end;
    `;
const Container = styled.div`
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
        font - family: 'Raleway';
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
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        font - size: 22px;
    margin-top:20px;
    color:white;
    text-align: center;
}
`;
