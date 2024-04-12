import dayjs from 'dayjs';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SubTitle from './Subtitle';
import Ptext from './Ptext';
export default function Active({ length, name, last, id }) {
    const navigate = useNavigate();

    function lastDay(last) {
        const now = dayjs();
        if (last.length === 0) {
            return 'Você ainda não fez esse treino';
        }
        let lastday;
        const lastD = dayjs(last[0].updatedAt);
        const diff = now.diff(lastD, 'day');
        if (diff === 0) {
            lastday = 'Hoje';
        } else if (diff === 1) {
            lastday = '1 dia atrás';
        } else {
            lastday = `${diff} dias atrás`;
        }
        return lastday;
    }

    const day = lastDay(last);

    return (
        <ActiveDiv onClick={() => navigate(`/workout/${id}`)}>
            <SubTitle>{name}</SubTitle>
            <Ptext>{length} exercicios</Ptext>
            <Ptext>ÚLTIMA VEZ:</Ptext>
            <Ptext>{day}</Ptext>
        </ActiveDiv>
    );
};
const ActiveDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85vw;
    border-radius: 10px;
    margin-bottom:5vh;
    border: solid 1px white;
    padding: 15px;
    background-color:#A1C6CB;
`;

