import Title from './Title';
import AllWorkout from './AllWorkout';
import { useNavigate } from 'react-router-dom';
import useAllWorkout from '../../hooks/api/useAllWorkout';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import buttonSet from '../Form/Buttons';

export default function Toggle() {
    const [workouts, setWorkouts] = useState([]);
    const { allWorkout, getAllWorkout } = useAllWorkout();
    const [updateWorkout, setUpdateWorkout] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(allWorkout && !updateWorkout) {  
            setWorkouts(allWorkout);
        }else{
            getAllWorkout();
            setUpdateWorkout(false);
        }
    }, [allWorkout, updateWorkout]);

    function redirect(dir) {
        if(dir==='back') {
            navigate('/');
        }else{
            navigate('/create');
        }
    }

    return(
        <>
            <Title>Todos os treinos</Title>
            {workouts.length>0?(workouts.map((workout) => 
                <AllWorkout 
                    updateWorkout= {updateWorkout}
                    setUpdateWorkout={setUpdateWorkout}
                    name={workout.name} 
                    key={workout.id} 
                    active={workout.isActive} 
                    id={workout.id}></AllWorkout>
            )):(
                <Title>Você ainda não tem treinos</Title>
            )}
            <ButtonContainer>
                <buttonSet.BackButton size={'60px'} onClick={() => redirect('back')}></buttonSet.BackButton>
                <buttonSet.AddButton size={'60px'} onClick={() => redirect()}></buttonSet.AddButton>
            </ButtonContainer>
        </>
    );
};

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top:10%;
`;
