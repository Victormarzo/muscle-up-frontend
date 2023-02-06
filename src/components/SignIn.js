import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/userApi';
import Button from './Form/Button';
import Input from './Form/Input';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    const { setUserData } = useContext(UserContext); 
    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();
    
        try {
            const userData = await signIn(email, password);
            console.log(userData);
            setUserData(userData);
            alert('Login realizado com sucesso!');
            navigate('/test');
        } catch (err) {
            alert('Não foi possível fazer o login!');
        }
    } 
    return (
        <>
            <Form onSubmit={submit}>
                <Input label="E-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} ></Input>
                <Input label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
                <Button type="submit">Entrar</Button>
            </Form>
        </>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
