import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/userApi';
import Button from './Form/Button';
import Input from './Form/Input';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import Logo from './Logo';
import Title from './Workout/Title';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    const { setUserData } = useContext(UserContext); 
    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();
    
        try {
            console.log(password);
            const userData = await signIn(email, password);
            console.log(userData);
            setUserData(userData);
            alert('Login realizado com sucesso!');
            navigate('/active-workout');
        } catch (err) {
            alert('Não foi possível fazer o login!');
        }
    } 

    function redirect() {
        navigate('/sign-up');
    }

    return (
        <>
            <Logo></Logo>
            <Title>Login</Title>
            <Form onSubmit={submit}>
                <Text>EMAIL</Text>
                <Input label="E-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} ></Input>
                <Text>SENHA</Text>
                <Input label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
                <Button type="submit">Entrar </Button>
            </Form>
            <Redirect>
                <Text>Ainda não tem conta?</Text>
                <Button onClick={redirect}>Inscreva-se</Button>
            </Redirect>
      
        </>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    p{
        font-size: 18px;
    }
`;

const Text = styled.p`
    color: white;
    font-family: 'Anton', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Redirect = styled.div`
    margin-top:20%;
    text-align: center;
`;
