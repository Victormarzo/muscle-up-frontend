import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useExcutionById from '../hooks/api/useExecutionById';
import LastExecution from './Execution/LastExecution';
import Title from './Workout/Title';
import InputM from './Form/InputM';
import InputP from './Form/InputP';
import useNewExecution from '../hooks/api/useNewExecution';
import dayjs from 'dayjs';
import Button from './Form/Button';
import buttonSet from './Form/Buttons';

export default function Execution() {
    const { exerciseId } = useParams();
    const [executions, setExecutions] = useState();
    const{ executionById } = useExcutionById(exerciseId);
    const [inputs, setInputs] = useState();
    const { newExecution }= useNewExecution();
    const navigate = useNavigate();
    const [workoutId, setWorkoutId] = useState();
    const [lastE, setLastE] = useState();
    useEffect(() => {
        if(executionById) {
            setExecutions(executionById);
        }
    }, [executionById]);

    function renderForm(reps) {
        let repsNum=Number(reps);
        const allInputs=[];
        const repsNumDouble=2*repsNum;
        let rep;
        if(executions.Execution.length!==0) {
            for(let i = 0; i<repsNumDouble; i++) {
                if(i%2!==0) {
                    rep={ title: `input${i}`, value: '', last: executions.Execution[(i-1)/2].reps };
                }else {
                    rep={ title: `input${i}`, value: '', last: executions.Execution[i-(i/2)].weight };
                }
                setLastE(dayjs(executions.Execution[0].createdAt).format('DD/MM/YYYY'));
                allInputs.push(rep);
            }
            setInputs(allInputs);
        }else{
            for(let i = 0; i<repsNum*2; i++) {
                rep={ title: `input${i}`, value: '' };
                allInputs.push(rep);
            }
            setInputs(allInputs);
        }
    }
    async function handleSubmit(event) {
        event.preventDefault();
        let obj;
        let executions=[];
        for (let i =0; i<inputs.length; i++) {
            if(i%2!==0) {
                obj={
                    exerciseId: Number(exerciseId),
                    reps: Number(inputs[i].value),
                    weight: Number(inputs[i-1].value)
                };
                executions.push(obj);
            }
        }
        const exe={ executions };
        try {
            await newExecution(exe);
            console.log('deu');
            navigate(-1);
        } catch (error) {
            console.log('n deu', error);
        } 
    }

    function handleInputUpdate(ev, index) {
        const newInputs = [...inputs];
        const updatedInput = newInputs[index];
        updatedInput.value = ev.target.value;
        setInputs(newInputs);
    }
    
    function checkExecution() {
        const reps=executions.sets.split('x', 1);
        renderForm(reps);
    }

    if(executions && !inputs) {
        checkExecution();
        setWorkoutId(executions.workoutId);
    }
    function redirect() {
        navigate(-1);
    }
    return (
        <ExeForm onSubmit={handleSubmit}>
            {executions?(
                <>
                    
                    <Title>{executions.name}</Title>
                    <SubtitleContainer>
                        <SpamW><p>Carga</p></SpamW>
                        <SpamR><p>Repetições</p></SpamR>
                    </SubtitleContainer>
                </>
            ):(<></>)}
            {executions&&inputs?
                (
                    inputs.length!==0?(executions.Execution.length!==0?(
                        inputs.map((input, index) => {
                            if(index%2!==0) {
                                return (
                                    <>
                                        <LastExecution
                                            reps={input.last}
                                            weight={inputs[index-1].last}
                                            key={index} 
                                            last={lastE}
                                        >
                                        </LastExecution>
                                        <ExeContainer>
                                            <InputM value={input.value}
                                                onChange = {(ev) => handleInputUpdate(ev, index)}
                                                key={index}
                                                type={'number'}
                                                required={'required'}
                                            ></InputM>
                                            <InputP value={inputs[index-1].value}
                                                onChange = {(ev) => handleInputUpdate(ev, index-1)}
                                                key={index-1}
                                                type={'number'}
                                                required={'required'}
                                            ></InputP>
                                        </ExeContainer>
                                    </>
                                );
                            };     
                        })
                    ):(
                        inputs.map((input, index) => {
                            if(index%2!==0) {
                                return (
                                    <ExeContainer>
                                        <InputM value={input.value}
                                            onChange = {(ev) => handleInputUpdate(ev, index)}
                                            key={index}
                                            type={'number'}
                                            required
                                        ></InputM>
                                        <InputP value={inputs[index-1].value}
                                            onChange = {(ev) => handleInputUpdate(ev, index-1)}
                                            key={index-1}
                                            type={'number'}
                                            required
                                        ></InputP>
                                    </ExeContainer>    
                                );
                            };
                        })
                    )):(<>aaaaaaaaaaaa</>)
                    
                ):(<>ssssssssss</>)}
            {executions?
                (
                    <>
                        <Center>
                            <Button type='submit'>Finalizar</Button>
                        </Center>
                        <ButtonContainer>
                            <buttonSet.BackButton size={'60px'} onClick={redirect}></buttonSet.BackButton>
                        </ButtonContainer>
                        
                    </>
                ):(<></>)}
        </ExeForm>
    );
};

const ExeContainer=styled.div`
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
    
`;

const ExeForm=styled.form`

`;
const SubtitleContainer = styled.span`    
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
`;
const SpamR = styled.span`
    width: 70px;
    margin-left: -52px;
`;

const SpamW = styled.span`
    width: 100px;
    margin-left: 12px;
`;
const Center=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top:10%;
    padding-bottom:10%;
`;
