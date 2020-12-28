import styled from 'styled-components';
import image from '../icons/addNote.svg';
import { useState } from 'react';

import LoginForm from './LoginForm';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`
const ContainerIcon = styled.div`
    flex: 1;
    background-color: ${({theme}) => theme.login};
    height: 100%;
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    display: flex;
    justify-content: center;
    align-items:center;
    img{
        width: 50%;
        height: 50%;
        object-fit: contain;
    }
`
const ContainerLogin = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BigButton = styled.button`
    width: fit-content;
    padding: 0.75rem 1rem;
    color: #fff;
    border: none;
    outline: 0;
    background-color: ${({theme}) => theme.todo};
    margin-top: 2rem;
    cursor: pointer;
    
`
const Login = props => {
    const [login, changeLogin] = useState(true);
    return(
        <Container>
            <ContainerIcon>
                <img src={image} />
            </ContainerIcon>
            <ContainerLogin>
                <LoginForm change={login}/>
                <BigButton
                    onClick={() => changeLogin(!login)}>
                    {login ? 'Don’t have account? Sign up' : 'Do you have account? Sign In'}
                </BigButton>
            </ContainerLogin>
        </Container>
    )
}

export default Login