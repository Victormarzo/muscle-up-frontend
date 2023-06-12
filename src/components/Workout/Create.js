import { useState } from 'react';
import styled from 'styled-components';
import Input from '../Form/Input';
import { useNavigate } from 'react-router-dom';
import useNewWorkout from '../../hooks/api/useNewWorkout';
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
            // navigate(-1);
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
    return (
        <>
            <h1>NOVO TREINO</h1>
            <form>
                <Input 
                    type='text'
                    value={exName} 
                    onChange={e => setExName(e.target.value)} 
                    placeholder = 'Nome do treino'
                ></Input>
                {exInputs.length!==0?
                    (exInputs.map((input, index) => 
                        <div key={index}>
                            <Input type = 'text'
                                name='exercise'
                                required
                                placeholder = 'Exercicio'
                                value ={input.exercise}
                                onChange={event => handleInputUpdate(event, index)}
                            ></Input>
                            <button 
                                type= 'button'
                                onClick={() => removeInput(index)}
                            >remove</button>
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
                                    placeholder = 'Repeticoes'
                                    value ={input.reps}
                                    onChange={event => handleInputUpdate(event, index)}
                                ></SInput>
                            </NewEx>
                        </div>
                    )):(<>aaaaaaaaa</>)}
                <button 
                    type= 'button'
                    onClick={addInput}
                >add</button>
                <button 
                    type='submit'
                    onClick={handleSubmit}
                >send</button>
            </form>
        </>
        
    );
}

const NewEx = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SInput = styled(Input)`
    width: 100px;
`;
const X = styled.p`
    color: white;
`;
