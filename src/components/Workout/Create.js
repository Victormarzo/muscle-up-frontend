import { useState } from 'react';
import styled from 'styled-components';
import Input from '../Form/Input';
import { useNavigate } from 'react-router-dom';
import useNewWorkout from '../../hooks/api/useNewWorkout';
import buttonSet from '../Form/Buttons';
import Title from './Title';
export default function Create() {
    const [exInputs, setExInputs] = useState([
        { exercise: '', sets: '', reps: '' }
        
    ]);
    const [exName, setExName] = useState('');
    const navigate= useNavigate();
    const { newWorkout } = useNewWorkout();

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(exInputs);
        const newEx = concatenateSetRep();
        const obj = {
            name: exName,
            exercise: newEx
        };
        try {
            await newWorkout(obj);
            console.log('deu');
            navigate('/');
        } catch (error) {
            console.log('n deu', error);
        } 
    }
    function concatenateSetRep() {
        let newEx=[];
        for(let i=0; i<exInputs.length; i++) {
            newEx.push( {
                name: exInputs[i].exercise,
                sets: `${exInputs[i].sets}x${exInputs[i].reps}`
            });
        }
        return newEx;
    }
    function handleInputUpdate(event, index) {
        const newInputs = [...exInputs];
        newInputs[index][event.target.name]=event.target.value;
        setExInputs(newInputs);
    }
    
    function addInput() {
        setExInputs([...exInputs, { exercise: '', sets: '', reps: '' }]);
    } 

    function removeInput(index) {
        const temp= [...exInputs];
        temp.splice(index, 1);
        setExInputs(temp);
    }

    function redirect() {
        navigate('/toggle');
    }
    return (
        <CContainer>
            <Title>NOVO TREINO</Title>
            <Form>
                <NInput 
                    type='text'
                    value={exName} 
                    onChange={e => setExName(e.target.value)} 
                    placeholder = 'Nome do treino'
                ></NInput>
                {exInputs.length!==0?
                    (exInputs.map((input, index) => 
                        <Container key={index}>
                            <div >
                                <Input type = 'text'
                                    name='exercise'
                                    required
                                    placeholder = 'Exercicio'
                                    value ={input.exercise}
                                    onChange={event => handleInputUpdate(event, index)}
                                ></Input>
                            
                                <NewEx>
                                    <SInput type = 'number'
                                        name='sets'
                                        required
                                        placeholder = 'Series'
                                        value ={input.sets}
                                        onChange={event => handleInputUpdate(event, index)}
                                    ></SInput>
                                    <X>X</X>
                                    <SInput type = 'number'
                                        name ='reps'
                                        required
                                        placeholder = 'Reps'
                                        value ={input.reps}
                                        onChange={event => handleInputUpdate(event, index)}
                                    ></SInput>
                                </NewEx>
                            </div>
                            <buttonSet.RemoveButton 
                                size='25px'
                                type= 'button'
                                onClick={() => removeInput(index)}
                            >remove</buttonSet.RemoveButton>
                        </Container>
                        
                    )):(<></>)}
                <ButtonContainer>
                    <buttonSet.BackButton 
                        size='60px'
                        onClick={redirect}>
                    </buttonSet.BackButton>
                    <buttonSet.AddButton
                        size='60px'
                        type= 'button'
                        onClick={addInput}>
                    </buttonSet.AddButton>
                    <buttonSet.ConfirmButton 
                        size='60px'
                        type='submit'
                        onClick={handleSubmit}>
                    </buttonSet.ConfirmButton>
                    
                </ButtonContainer>
            </Form>
        </CContainer>
        
    );
}

const NewEx = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SInput = styled(Input)`
    width: 100px;
    margin-bottom: 0px;
`;
const Form=styled.form`
    display: flex;
    flex-direction: column;

`;
const NInput= styled(Input)`
    width: 85vw;
    margin: 10% 0 10% 0;
`;
const X = styled.p`
    color: white;
`;
const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:10%;
    background:#476C7C;
    padding: 5%;
    border-radius: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top:10%;
    
`;
const CContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:5vh;
    width: 85vw;
`;
