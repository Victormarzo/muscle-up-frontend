import { useEffect, useState } from 'react';
import useActiveWorkout from '../hooks/api/useActiveWorkout';
import Active from './Workout/Active';
import Title from './Workout/Title';

export default function ActiveWorkout() {
    const [workout, setWorkout] = useState([]);
    const { activeWorkout } = useActiveWorkout();
    
    useEffect(() => {
        if(activeWorkout) {  
            setWorkout(activeWorkout);
        }
    }, [activeWorkout]);
    
    return(
        <>
            <Title>Treinos</Title>
            <Title>Escolha seu treino de hoje</Title>
            {workout.length>0?(workout.map((workout) => 
                <Active 
                    length={workout.Exercise.length} 
                    name={workout.name} 
                    key={workout.id} 
                    last={workout.Exercise[0].Execution} 
                    id={workout.id}></Active>
            )):(
                <Title>Você ainda não tem treinos</Title>
            )}
            
        </>
        
    );
};
