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

export default function Workout() {
    const { workoutId } = useParams();
    const [workout, setWorkout] = useState([]);
    const { workoutById } = useWorkoutById(workoutId);
    const { checkWorkout } = useCheckWorkout();
    const { finishWorkoutC } = useFinishWorkout();
    const [status, setStatus] = useState('a');
    const navigate = useNavigate();

    async function finishThisWorkout() {
        if (status === true) {
            await finishWorkoutC();
            navigate('/');
            console.log('acho que deu boa');
            //pop up de finalizado
        } else {
            //pop up de nao poder finalizar
            console.log('faz nada nao');
        }
    }
    console.log(status);
    useEffect(() => {
        if (workoutById) {
            setWorkout(workoutById);
            setStatus(checkWorkout);
            console.log(status);
        }
    }, [workoutById]);

    function redirect() {
        navigate(-1);
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
                    <CenterContainer>
                        <FinishButton disabled={!status} onClick={finishThisWorkout}>Finalizar treino</FinishButton>
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
const FinishButton = styled(Button)`   
    :disabled {
        color:#6E95A7;
    };

`;
