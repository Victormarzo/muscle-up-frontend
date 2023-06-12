import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/userApi';
import Button from './Form/Button';
import Input from './Form/Input';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [name, setName] = useState('');  
    const { setUserData } = useContext(UserContext); 
    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();
    
        try {
            const userData = await signUp(email, password, name);
            setUserData(userData);
            alert('Cadastro realizado com sucesso!');
            navigate('/sign-in');
        } catch (err) {
            alert('Não foi possível fazer o cadastro!');
        }
    } 
    return (
        <>
            <Form onSubmit={submit}>
                <Input label="E-mail" placeholder = 'email' type="text" value={email} onChange={e => setEmail(e.target.value)} ></Input>
                <Input label="Senha" placeholder = 'password'type="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
                <Input label="name" placeholder = 'name' type="text" value={name} onChange={e => setName(e.target.value)}></Input>
                <Button type="submit">Cadastrar</Button>
            </Form>
        </>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
