import { useEffect, useState } from 'react';
import useActiveWorkout from '../hooks/api/useActiveWorkout';
import Active from './Workout/Active';
import Title from './Workout/Title';

export default function ActiveWorkout() {
    const [workout, setWorkout] = useState([]);
    const { activeWorkout, getActiveWorkout } = useActiveWorkout();
    
    useEffect(() => {
        if(activeWorkout) {
          console.log(activeWorkout);  
          setWorkout(activeWorkout);
        }
    }, [activeWorkout]);
    
    return(
        <>
            <Title>Treinos</Title>
            {workout.length!==0?(workout.map((workout) => 
                <Active length={workout.Exercise.length} name={workout.name} key={workout.id} ></Active>
            )):(
              <Title>Treinssssssos</Title>
            )}
            
        </>
        
    );
};
