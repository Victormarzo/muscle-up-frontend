import { useEffect, useState } from 'react';
import useActiveWorkout from '../hooks/api/useActiveWorkout';
import { useNavigate } from 'react-router-dom';
import Active from './Workout/Active';
import Title from './Workout/Title';
import styled from 'styled-components';
import buttonSet from './Form/Buttons';

export default function ActiveWorkout() {
    const [workout, setWorkout] = useState([]);
    const { activeWorkout } = useActiveWorkout();
    const navigate = useNavigate();

    useEffect(() => {
        if(activeWorkout) {  
            setWorkout(activeWorkout);
        }
    }, [activeWorkout]);
    
    function redirect() {
        navigate('/');
    }
    
    return(
        <Container>
            
            <Title>Escolha seu treino</Title>
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
            <ButtonContainer>
                <buttonSet.BackButton size={'60px'} onClick={redirect}></buttonSet.BackButton>
            </ButtonContainer>

        </Container>
        
    );
};

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
