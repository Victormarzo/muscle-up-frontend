import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useWorkoutById from '../../hooks/api/useWorkoutById';
import Button from '../Form/Button';
import ExerciseDisplay from './ExerciseDisplay';
import Title from './Title';

export default function WorkoutDisplay() {
    const { workoutId } = useParams();
    const [workout, setWorkout] = useState([]);
    const { workoutById } = useWorkoutById(workoutId);
    const navigate = useNavigate();
    useEffect(() => {
        if(workoutById) {
            setWorkout(workoutById);
        }
    }, [workoutById]);
    console.log(workout);
    function back() {
        navigate(-1);
    }
    return (
        <>
            {workout.length!==0?(
                <>
                    <Title>{workout[0].Workout.name}</Title>
                    {workout.map((exercise) => 
                        <ExerciseDisplay  
                            name={exercise.name} 
                            sets={exercise.sets} 
                        ></ExerciseDisplay>
                    )}
                    
                    <Button onClick={back}>Voltar</Button>
                </>
            ):(<></>)}
        </>
    );
};
