import dayjs from 'dayjs';
import styled from 'styled-components';
import { FaDumbbell, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Exercise( { id, name, sets, date, read }) {
    const navigate = useNavigate();
    let icon;
    
    function executedToday(date) {
        if(date.length===0) {
            return <FaDumbbell size='20px' color = 'white' />;
        }
        let icon;
        const last = dayjs(date[0].updatedAt).format('DD/MM/YYYY');
        const now = dayjs().format('DD/MM/YYYY');
        if (last === now) {
            icon = <FaCheckCircle size='20px' color = 'white' />;
        }else {
            icon =<FaDumbbell size='20px' color = 'white' />;
        }
        return icon;
    };
    
    if(read) {
        icon = executedToday(date);
    };

    return(
        <Container>
            <ExerciseDiv onClick={ () => navigate(`/execution/${id}`)}>
                {name}{icon}
            </ExerciseDiv>
        </Container>
    );
};
const ExerciseDiv=styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    border-radius: 10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color:black; 
    
`;

const Container = styled.div`
    width: 85vw;    
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color:#A1C6CB;
    padding: 15px;
    margin-top:3%;
    margin-bottom: 20px;
    border: solid 1px white;
`;
