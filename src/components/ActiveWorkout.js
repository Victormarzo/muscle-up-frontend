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
    
    function redirect(option) {
        if (option ===1) {
            navigate('/');
        }else if (option ===2) {
            navigate('/create');
        }
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
                <SpaceDiv>
                    <p>Você ainda não tem treinos</p>
                    <h3 onClick={() => redirect(2)} >Bora criar?</h3>
                </SpaceDiv>
            )}
            <ButtonContainer>
                <buttonSet.BackButton size={'60px'} onClick={() => redirect(1)}></buttonSet.BackButton>
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

const SpaceDiv = styled.div`
    text-align: center;
    font-size: 22px;
    color:white;
    margin-top:20px;
    p{
        margin-top:20px;
        text-align: center;
    }
    h3{
        margin-top:20px;
        color:white;
        text-decoration: underline;
        margin-bottom:20px;
    }
`;
