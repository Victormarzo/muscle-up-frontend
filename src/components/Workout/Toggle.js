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
        if (allWorkout && !updateWorkout) {
            setWorkouts(allWorkout);
        } else {
            getAllWorkout();
            setUpdateWorkout(false);
        }
    }, [allWorkout, updateWorkout]);

    function redirect(dir) {
        if (dir === 'back') {
            navigate('/');
        } else {
            navigate('/create');
        }
    }

    return (
        <Container>

            <Title>Todos os treinos</Title>
            {workouts.length > 0 ? (workouts.map((workout) =>
                <WorkoutContainer>
                    <AllWorkout
                        updateWorkout={updateWorkout}
                        setUpdateWorkout={setUpdateWorkout}
                        name={workout.name}
                        key={workout.id}
                        active={workout.isActive}
                        id={workout.id}>
                    </AllWorkout>
                </WorkoutContainer>
            )) : (
                <SpaceDiv>
                    <p>Você ainda não tem treinos</p>
                    <p> Clique no + para criar</p>
                </SpaceDiv>
            )}
            <ButtonContainer>
                <buttonSet.BackButton size={'60px'} onClick={() => redirect('back')}></buttonSet.BackButton>
                <buttonSet.AddButton size={'60px'} onClick={() => redirect()}></buttonSet.AddButton>
            </ButtonContainer>
        </Container>
    );
};

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin:10% 0 10% 0;
`;
const Container = styled.div`
    margin-top:10%;  
    display: flex;
    flex-direction: column;
`;
const SpaceDiv = styled.div`
    p{
        font-size: 22px;
        margin-top:20px;
        color:white;
        text-align: center;
    }
    width: 85vw;
`;

const WorkoutContainer = styled.div`
    margin-top:10%;
`;
