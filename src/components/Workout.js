import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useWorkoutById from '../hooks/api/useWorkoutById';
import Exercise from './Workout/Exercise';
import Title from './Workout/Title';

export default function Workout() {
    const { workoutId } = useParams();
    const [workout, setWorkout] = useState([]);
    const{ workoutById } = useWorkoutById(workoutId);
    useEffect(() => {
        if(workoutById) {
            setWorkout(workoutById);
        }
    }, [workoutById]);
    return (
        <>
            {workout.length!==0?(
                <>
                    <Title>{workout[0].Workout.name}</Title>
                    {workout.map((exercise) => 
                        <Exercise id={exercise.id} name={exercise.name} key={exercise.id} date={exercise.Execution} sets={exercise.sets} read={true} ></Exercise>
                    )}
                </>
            ):(<></>)}
        </>
    );
};
