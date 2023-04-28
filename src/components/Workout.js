import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useWorkoutById from '../hooks/api/useWorkoutById';
import Button from './Form/Button';
import Exercise from './Workout/Exercise';
import Title from './Workout/Title';
import useCheckWorkout from '../hooks/api/useCheckWorkout';
import useFinishWorkout from '../hooks/api/useFinishWorkout';

export default function Workout() {
    const { workoutId } = useParams();
    const [workout, setWorkout] = useState([]);
    const { workoutById } = useWorkoutById(workoutId);
    const { checkWorkout } = useCheckWorkout();
    const { finishWorkoutC } = useFinishWorkout();
    
    async function finishThisWorkout() {
        let status;
        status = checkWorkout; 
        if (status===true) {
            await finishWorkoutC();
            console.log('acho que deu boa');
        }else {
            console.log('faz nada nao');
        }
    }
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
                        <Exercise  
                            id={exercise.id} 
                            name={exercise.name} 
                            key={exercise.id} 
                            date={exercise.Execution} 
                            sets={exercise.sets} 
                            read={true} ></Exercise>
                    )}
                    <Button onClick={finishThisWorkout}>Finalizar treinosss</Button>
                </>
            ):(<></>)}
        </>
    );
};
