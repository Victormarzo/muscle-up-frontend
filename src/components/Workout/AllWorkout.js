import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
    FaCheckSquare,
    FaWindowClose 
}from 'react-icons/fa';
import useToogleWorkout from '../../hooks/api/useToogleWorkout';

export default function AllWorkout({ name, active, id, setUpdateWorkout, updateWorkout }) {
    const navigate = useNavigate();
    const { putToogleWorkout } = useToogleWorkout(id);
    async function toogle(id) {
        await putToogleWorkout(id);
        setUpdateWorkout(true);
    }
    let symbol=symbolAdd(active);
    function symbolAdd(active) {
        if(active) {
            return <FaCheckSquare size='20px' color = 'green' />;
        }else {
            return <FaWindowClose size='20px' color = 'red' />;
        }
    };
    
    return(
        <ActiveDiv>
            <div>
                <h1 onClick={ () => navigate(`/workout-display/${id}`)} >{name}</h1>
            </div>
            <Container onClick={() => toogle(id)}>
                Ativo: {symbol} 
            </Container>
            
        </ActiveDiv>
    );
};
const ActiveDiv=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85vw;
    border-radius: 10px;
    margin-top:10px;
    padding: 10px;
    background-color:#A1C6CB;
    margin-bottom: 20px;
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 23px;
        color:white;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color:white;
`;
