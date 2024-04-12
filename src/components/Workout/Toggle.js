import Title from './Title';
import AllWorkout from './AllWorkout';
import { useNavigate } from 'react-router-dom';
import useAllWorkout from '../../hooks/api/useAllWorkout';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import buttonSet from '../Form/Buttons';
import Spinner from '../Form/Spinner';

export default function Toggle() {
    const [workouts, setWorkouts] = useState([]);
    const { allWorkout, getAllWorkout, allWorkoutLoading } = useAllWorkout();
    const [updateWorkout, setUpdateWorkout] = useState(false);
    const navigate = useNavigate();
    let AllWorkoutComponent;

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
    function renderAllWorkout() {
        if (allWorkoutLoading || allWorkout.length !== 0 && workouts.length === 0) {
            AllWorkoutComponent = <Spinner />;
        } else if (allWorkout.length !== 0 && workouts.length !== 0) {
            AllWorkoutComponent =
                workouts.map((workout) =>
                    <WorkoutContainer key={workout.id}>
                        <AllWorkout
                            updateWorkout={updateWorkout}
                            setUpdateWorkout={setUpdateWorkout}
                            name={workout.name}
                            active={workout.isActive}
                            id={workout.id}>
                        </AllWorkout>
                    </WorkoutContainer>
                );
        } else if (allWorkout.length === 0 && workouts.length === 0) {
            AllWorkoutComponent =
                <SpaceDiv>
                    <p>Você ainda não tem treinos</p>
                    <p> Clique no + para criar</p>
                </SpaceDiv>;
        }
    }
    renderAllWorkout();
    return (
        <Container>
            <Title>Todos os treinos</Title>
            <Content>
                {AllWorkoutComponent}
            </Content>
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
`;

const Content = styled.div`
    margin-top:15px;
    min-height:65vh;
`;

const Container = styled.div`
    margin-top:5vh;
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
