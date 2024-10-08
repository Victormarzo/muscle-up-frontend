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
import useSignUp from '../hooks/api/useSignUp';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const { signUp }= useSignUp();
    async function submit(event) {
        event.preventDefault();

        try {
            const userData = await signUp({ email, password, name });
            setUserData(userData);
            toast('Cadastro realizado com sucesso!');
            setTimeout(() => {
                navigate('/sign-in');
            }, 2000);
        } catch (err) {
            toast('Não foi possível fazer o cadastro!');
        }
    }

    function redirect() {
        navigate('/sign-in');
    }

    return (
        <>
            <Logo></Logo>
            <Title>Inscrição</Title>
            <Form onSubmit={submit}>
                <Text>EMAIL</Text>
                <Input label="E-mail" placeholder='email' type="text" value={email} onChange={e => setEmail(e.target.value)} ></Input>
                <Text>SENHA</Text>
                <Input label="Senha" placeholder='password' type="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
                <Text>NOME</Text>
                <Input label="name" placeholder='name' type="text" value={name} onChange={e => setName(e.target.value)}></Input>
                <Space />
                <Button status={true} type="submit">Cadastrar</Button>
            </Form>
            <Toast />
            <Redirect onClick={redirect}>Já possui conta? Faça login aqui</Redirect>
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
    height:44px;

`;

const Text = styled.p`
    color: white;
    font-family: 'Anton', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    
`;
const Redirect = styled(Text)`
    text-decoration: underline;
    text-align: center;
`;
