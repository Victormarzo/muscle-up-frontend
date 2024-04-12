import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useWorkoutById from '../../hooks/api/useWorkoutById';
import ExerciseDisplay from './ExerciseDisplay';
import Title from './Title';
import styled from 'styled-components';
import buttonSet from '../Form/Buttons';

export default function WorkoutDisplay() {
    const { workoutId } = useParams();
    const [workout, setWorkout] = useState();
    const { workoutById } = useWorkoutById(workoutId);
    const navigate = useNavigate();
    let workoutComponent;
    useEffect(() => {
        if (workoutById) {
            setWorkout(workoutById);
        }
    }, [workoutById]);
    function back() {
        navigate(-1);
    }
    function renderWorkout() {
        if (workout) {
            workoutComponent =
                <Container>
                    <Title>{workout.workout[0].Workout.name}</Title>
                    <SSubTitle>Este treino foi feito {workout.count} vezes</SSubTitle>
                    <EContainer>
                        {workout.workout.map((exercise, index) =>
                            <ExerciseDisplay key={index}
                                name={exercise.name}
                                sets={exercise.sets}
                            ></ExerciseDisplay>
                        )}
                    </EContainer>
                    <buttonSet.BackButton size={'60px'} onClick={back}></buttonSet.BackButton>
                </Container>;
        }
    }
    renderWorkout();
    return (
        workoutComponent
    );
};

const Container = styled.div`
    margin-top:10%;
    display: flex;
    flex-direction: column;   
    width: 85vw; 
    align-items: center;   
`;
const EContainer = styled.div`
    min-height:65vh;
`;
const SSubTitle = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    color: white;
`;
