import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useWorkoutById from '../../hooks/api/useWorkoutById';
import ExerciseDisplay from './ExerciseDisplay';
import Title from './Title';
import styled from 'styled-components';
import buttonSet from '../Form/Buttons';

export default function WorkoutDisplay() {
    const { workoutId } = useParams();
    const [workout, setWorkout] = useState([]);
    const { workoutById } = useWorkoutById(workoutId);
    const navigate = useNavigate();
    useEffect(() => {
        if (workoutById) {
            setWorkout(workoutById);
        }
    }, [workoutById]);
    function back() {
        navigate(-1);
    }
    return (
        <>
            {workout.length !== 0 ? (
                <Container>
                    <EContainer>
                        <Title>{workout[0].Workout.name}</Title>
                        {workout.map((exercise, index) =>
                            <ExerciseDisplay key={index}
                                name={exercise.name}
                                sets={exercise.sets}
                            ></ExerciseDisplay>
                        )}

                    </EContainer>
                    <buttonSet.BackButton size={'60px'} onClick={back}></buttonSet.BackButton>
                </Container>
            ) : (<></>)}
        </>
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
    margin-bottom:10%
`;
