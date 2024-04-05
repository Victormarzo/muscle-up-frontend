import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useExcutionById from '../hooks/api/useExecutionById';
import Title from './Workout/Title';
import InputM from './Form/InputM';
import InputP from './Form/InputP';
import useNewExecution from '../hooks/api/useNewExecution';
import dayjs from 'dayjs';
import Button from './Form/Button';
import buttonSet from './Form/Buttons';
import { toast } from 'react-toastify';
import Toast from './Toast';

export default function Execution() {
    const { exerciseId } = useParams();
    const [executions, setExecutions] = useState();
    const { executionById } = useExcutionById(exerciseId);
    const [inputs, setInputs] = useState();
    const { newExecution } = useNewExecution();
    const navigate = useNavigate();
    const [lastE, setLastE] = useState();
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (executionById) {
            setExecutions(executionById);
        }
    }, [executionById]);

    function renderForm(reps) {
        let repsNum = Number(reps);
        const allInputs = [];
        const repsNumDouble = 2 * repsNum;
        let rep;
        if (executions.Execution.length !== 0) {
            for (let i = 0; i < repsNumDouble; i++) {
                if (i % 2 !== 0) {
                    rep = { title: `input${i}`, value: '', last: executions.Execution[(i - 1) / 2].reps };
                } else {
                    rep = { title: `input${i}`, value: '', last: executions.Execution[i - (i / 2)].weight };
                }
                setLastE(dayjs(executions.Execution[0].createdAt).format('DD/MM/YYYY'));
                allInputs.push(rep);
            }
            setInputs(allInputs);
        } else {
            for (let i = 0; i < repsNum * 2; i++) {
                rep = { title: `input${i}`, value: '' };
                allInputs.push(rep);
            }
            setInputs(allInputs);
        }
    }
    async function handleSubmit(event) {
        event.preventDefault();
        if(status===false) {
            return toast('Preencha todos os campos');
        }
        let obj;
        let executions = [];
        for (let i = 0; i < inputs.length; i++) {
            if (i % 2 !== 0) {
                obj = {
                    exerciseId: Number(exerciseId),
                    reps: Number(inputs[i].value),
                    weight: Number(inputs[i - 1].value)
                };
                executions.push(obj);
            }
        }
        const exe = { executions };
        try {
            await newExecution(exe);
            toast('Execução registrada');
            setTimeout(() => {
                navigate(-1);
            }, 2000);
        } catch (error) {
            toast('Erro no registro da execução');
        }
    }
    function handleInputUpdate(ev, index) {
        const newInputs = [...inputs];
        const updatedInput = newInputs[index];
        updatedInput.value = ev.target.value;
        check(newInputs);
        setInputs(newInputs);
    }

    function checkExecution() {
        const reps = executions.sets.split('x', 1);
        renderForm(reps);
    }

    if (executions && !inputs) {
        checkExecution();
    }
    function redirect() {
        navigate(-1);
    }

    function check(inputList) {
        let statuscheck = true;
        for (let i = 0; i < inputList.length; i++) {
            if (!inputList[i].value) {
                statuscheck = false;
            }
        }
        setStatus(statuscheck);
    }

    return (
        <ExeForm onSubmit={handleSubmit}>
            {executions ? (
                <>
                    <Title>{executions.name}</Title>
                    <SubtitleContainer>
                        <p>Repetições</p>
                        {lastE ? (<SpamW><p>{lastE}</p></SpamW>) : (<NolastE />)}
                        <SpamR><p>Carga</p></SpamR>
                    </SubtitleContainer>
                </>
            ) : (<></>)}
            {executions && inputs ?
                (
                    inputs.length !== 0 ? (executions.Execution.length !== 0 ? (
                        inputs.map((input, index) => {
                            if (index % 2 !== 0) {
                                return (
                                    <Grid key={index}>
                                        <ExeContainer>
                                            <SDivs>
                                                <p>{input.last}</p>
                                                <InputP value={inputs[index - 1].value}
                                                    onChange={(ev) => handleInputUpdate(ev, index - 1)}
                                                    type={'number'}

                                                    placeholder={input.last}
                                                ></InputP>

                                            </SDivs>
                                            <SDivs>
                                                <p>{inputs[index - 1].last}</p>
                                                <InputM value={input.value}
                                                    onChange={(ev) => handleInputUpdate(ev, index)}

                                                    type={'number'}

                                                    placeholder={inputs[index - 1].last}
                                                ></InputM>
                                            </SDivs>
                                        </ExeContainer>
                                    </Grid>
                                );
                            };
                        })
                    ) : (
                        inputs.map((input, index) => {
                            if (index % 2 !== 0) {
                                return (
                                    <Grid key={index}>
                                        <ExeContainer >
                                            <InputP value={inputs[index - 1].value}
                                                onChange={(ev) => handleInputUpdate(ev, index - 1)}

                                                type={'number'}

                                            ></InputP>
                                            <InputM value={input.value}
                                                onChange={(ev) => handleInputUpdate(ev, index)}

                                                type={'number'}

                                            ></InputM>
                                        </ExeContainer>
                                    </Grid>
                                );
                            };
                        })
                    )) : (<></>)

                ) : (<></>)}
            {executions ?
                (
                    <>
                        <Center>
                            <Button status={status} type='submit'>Finalizar</Button>
                        </Center>
                        <ButtonContainer>
                            <buttonSet.BackButton size={'60px'} onClick={redirect}></buttonSet.BackButton>
                        </ButtonContainer>
                        <Toast/>
                    </>
                ) : (<></>)}
        </ExeForm>
    );
};

const SDivs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const NolastE = styled.div`
    width:119px;
`;
const ExeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85vw;
    border-radius: 10px;
    margin-top:10px;
    padding: 0 10% 0 10%;
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

const ExeForm = styled.form`
    margin-top:10%;
    display: flex;
    flex-direction: column;   
    width: 85vw;  
`;
const SubtitleContainer = styled.span`    
    display: flex;
    align-items: center;
    width: 85vw;
    border-radius: 10px;
    margin-top:10%;
    margin-bottom:10%;
    padding: 0 10% 0 10%;
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
    margin-left:50px
`;

const SpamW = styled.span`
    margin-left:30px
`;
const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top:10%;
    padding-bottom:10%;
`;

const Grid = styled.div`
   background:#476C7C;
   border-radius: 10px;
    p{
        color:black
    }
    margin-bottom:10%;
`;
