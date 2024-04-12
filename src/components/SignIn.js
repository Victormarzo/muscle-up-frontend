import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Form/Button';
import Input from './Form/Input';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import Logo from './Logo';
import Title from './Workout/Title';
import Toast from './Toast';
import { toast } from 'react-toastify';
import useSignIn from '../hooks/api/useSignIn';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useSignIn();
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();

        try {
            const body = { email, password };
            const userData = await signIn(body);
            setUserData(userData);
            toast('Login realizado com sucesso!');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (err) {
            toast('Não foi possível fazer o login!');
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
                <Space />
                <Button status={true} type="submit">Entrar </Button>
            </Form>
            <Redirect onClick={redirect}>
                Ainda não tem conta? Inscreva-se
            </Redirect>
            <Toast />
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
const Space = styled.div`
    height:156px;

`;
const Text = styled.p`
    color: white;
    font-family: 'Anton', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Redirect = styled(Text)`
    
    text-align: center;
    text-decoration: underline;
    text-align: center;
`;
