import { useEffect, useState } from 'react';
import useActiveWorkout from '../hooks/api/useActiveWorkout';
import { useNavigate } from 'react-router-dom';
import Active from './Workout/Active';
import Title from './Workout/Title';
import styled from 'styled-components';
import buttonSet from './Form/Buttons';
import Spinner from './Form/Spinner';

export default function ActiveWorkout() {
    const [workout, setWorkout] = useState([]);
    const { activeWorkout, activeWorkoutLoading } = useActiveWorkout();
    const navigate = useNavigate();
    let activeComponent;

    useEffect(() => {
        if (activeWorkout) {
            setWorkout(activeWorkout);
        }
    }, [activeWorkout]);

    function redirect(option) {
        if (option === 1) {
            navigate('/');
        } else if (option === 2) {
            navigate('/create');
        }
    }

    function renderActiveWorkout() {
        if (activeWorkoutLoading || activeWorkout.length !== 0 && workout.length === 0) {
            activeComponent = <Spinner />;
        } else if (activeWorkout.length !== 0 && workout.length !== 0) {
            activeComponent =
                workout.map((workout) =>
                    <Active
                        length={workout.Exercise.length}
                        name={workout.name}
                        key={workout.id}
                        last={workout.Exercise[0].Execution}
                        id={workout.id}>
                    </Active>
                );
        } else if (activeWorkout.length === 0 && workout.length === 0) {
            activeComponent =
                <SpaceDiv>
                    <p>Você ainda não tem treinos</p>
                    <h3 onClick={() => redirect(2)} >Bora criar?</h3>
                </SpaceDiv>;
        }
    }
    renderActiveWorkout();
    return (
        <Container>
            <Title>Escolha seu treino</Title>
            <Content>
                {activeComponent}
            </Content>
            <ButtonContainer>
                <buttonSet.BackButton size={'60px'} onClick={() => redirect(1)}></buttonSet.BackButton>
            </ButtonContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:5vh;
    width: 85vw;
`;
const Content = styled.div`
    min-height:65vh;
    margin-top:15px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
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
