import dayjs from 'dayjs';
import styled from 'styled-components';
import Title from './Title';
import { FaDumbbell, FaCheckCircle } from 'react-icons/fa';

export default function Exercise( { id, name, sets, date, read }) {
    let icon;
    function executedToday(date) {
        let icon;
        const last = dayjs(date[0].updatedAt).format('DD/MM/YYYY');
        const now = dayjs().format('DD/MM/YYYY');
        if (last == now) {
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
        <>
            <ExerciseDiv>
                {name}{icon}
            </ExerciseDiv>
            <P>{sets}</P> 
        </>
    );
};
const ExerciseDiv=styled.div`
    display: flex;
    justify-content: space-between;
    width: 85vw;
    border-radius: 10px;
    margin-top:10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color:white;
`;
const P=styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color:white;
`;
