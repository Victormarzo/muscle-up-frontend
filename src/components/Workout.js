import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useWorkoutById from '../hooks/api/useWorkoutById';
import Button from './Form/Button';
import Exercise from './Workout/Exercise';
import Title from './Workout/Title';
import useCheckWorkout from '../hooks/api/useCheckWorkout';
import useFinishWorkout from '../hooks/api/useFinishWorkout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import buttonSet from './Form/Buttons';
import Toast from './Toast';
import { toast } from 'react-toastify';

export default function Workout() {
    const { workoutId } = useParams();
    const [workout, setWorkout] = useState([]);
    const { workoutById } = useWorkoutById(workoutId);
    const { checkWorkout } = useCheckWorkout();
    const { finishWorkoutC } = useFinishWorkout();
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();
    async function finishThisWorkout() {
        if (status === true) {
            try {
                await finishWorkoutC();
                toast('Treino finalizado com sucessos');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } catch (error) {
                toast('Não foi possivel finalizar o treino');
            }
        } else {
            toast('Preencha todos os campos');
        }
    }
    useEffect(() => {
        if (workoutById) {
            setWorkout(workoutById);
            setStatus(checkWorkout);
        }
    }, [workoutById, checkWorkout]);

    function redirect() {
        navigate('/active-workout');
    }
    return (
        <>
            {workout.length !== 0 ? (
                <Container>
                    <Title>{workout[0].Workout.name}</Title>
                    {workout.map((exercise) =>
                        <Exercise
                            id={exercise.id}
                            name={exercise.name}
                            key={exercise.id}
                            date={exercise.Execution}
                            sets={exercise.sets}
                            read={true}
                        >
                        </Exercise>
                    )}
                    <Toast />
                    <CenterContainer>
                        <Button status={status} onClick={finishThisWorkout}>Finalizar treino</Button>
                    </CenterContainer>
                    <ButtonContainer>
                        <buttonSet.BackButton size={'60px'} onClick={redirect}></buttonSet.BackButton>
                    </ButtonContainer>
                </Container>
            ) : (<></>)}
        </>
    );
};

const CenterContainer = styled.div`
    margin-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:10%;
    
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top:10%;
    
`;

