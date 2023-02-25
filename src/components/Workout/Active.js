import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Active({ length, name, last, id }) {
    const navigate = useNavigate();
    
    function lastDay(last) {
        const now = dayjs();
        if (last.length===0) {
            return 'Você ainda não fez esse treino';
        }
        let lastday;
        const diff = now.diff(last[0].updatedAt, 'day');
        if(diff === 0) {
            lastday = 'Hoje';
        }else if (diff === 1 ) {
            lastday = '1 dia atrás';
        }else {
            lastday=`${diff} dias atrás`;
        }
        return lastday;
    }

    const day = lastDay(last);

    return(
        <ActiveDiv onClick={ () => navigate(`/workout/${id}`)}>
            <h1>{name}</h1>
            <p>{length} exercicios</p>
            <p>Última vez: {day} </p>
        </ActiveDiv>
    );
};
const ActiveDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85vw;
    border-radius: 10px;
    margin-top:10px;
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color:white;
    }
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 23px;
        color:white;
    }
    background-color: #262A35;
`;
