import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useExcutionById from '../hooks/api/useExecutionById';
import LastExecution from './Execution/LastExecution';
import Title from './Workout/Title';
import Input from './Form/Input';

export default function Execution() {
    const { exerciseId } = useParams();
    const [executions, setExecutions] = useState();
    const{ executionById } = useExcutionById(exerciseId);
    let inputArray;
    useEffect(() => {
        if(executionById) {
            setExecutions(executionById);
            console.log(1);
        }
    }, [executionById]);
    console.log(executions);
    function checkExecution() {
        const reps=executions.sets.split('x', 1);
        const formArray=renderForm(reps);
        return formArray;
    }

    function renderForm(reps) {
        let repsNum=Number(reps);
        let arr=[];
        for(let i =0; i<repsNum; i++) {
            arr.push(i);
        }
        console.log(arr);
        return arr;
    }

    if(executions && executions.Execution.length===0) {
        inputArray=checkExecution();
    }

    return (
        <>
            {executions?(<Title>{executions.name}</Title>):(<></>)}
            {executions?
                (executions.Execution.length!=0?
                    executions.Execution.map((exe) => 
                        <>  
                            <LastExecution
                                weight={exe.weight}
                                reps={exe.reps}
                            ></LastExecution>
                            <ExeContainer>
                                <Input/>
                                <Input/>
                            </ExeContainer>
                        </>
                    ):
                    (inputArray.map((x) =>
                        <ExeContainer>
                            <Input/>
                            <Input/>
                        </ExeContainer>
                    ))
                ):
                (<>ssssssssss</>)}
        </>
    );
};

const ExeContainer=styled.span`
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
