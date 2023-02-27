import styled from 'styled-components';
import Input from '../Form/Input';
import Title from '../Workout/Title';

export default function LastExecution({ weight, reps }) {
    return (
        <>
            <Execution>
                <p>{weight}kg</p>
                <p>{reps}</p>
            </Execution>
        </>
    );
}

const Execution=styled.span`
    display: flex;
    align-items: center;
    justify-content: space-around;
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
