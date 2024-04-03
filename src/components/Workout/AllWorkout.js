import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
    FaTimesCircle,
    FaCheckCircle,
     
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
            return <FaCheckCircle size='24px' color = '#90FBFF' />;
        }else {
            return <FaTimesCircle size='24px' color = '#90FBFF' />;
        }
    };
    
    return(
        <ActiveDiv>
            <div>
                <h1 onClick={ () => navigate(`/workout-display/${id}`)} >{name}</h1>
            </div>
            <Container onClick={() => toogle(id)}>
                {symbol} 
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
    border: solid 1px white;
    margin-top:3%;
    padding: 15px;
    background-color:#A1C6CB;
    margin-bottom: 20px;
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 23px;
        color:black;
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
