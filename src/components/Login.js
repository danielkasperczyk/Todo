import styled from 'styled-components';
import image from '../icons/addNote.svg';
import { useState } from 'react';
import { auth, generateUserDocument } from '../units/firebase';
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
    const [signup, changeLogin] = useState(true);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [data, setData] = useState([])

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'email') {
              setEmail(value);
          }
          else if(name === 'password'){
            setPassword(value);
          }
          else if(name === 'username'){
              setDisplayName(value);
          }
      };

      const onSubmitHandler = async e => {
          e.preventDefault();
          if(signup){
            try{
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                console.log(user, displayName)
                user.updateProfile({
                    displayName: displayName
                })
              }
              catch(error){
                setError('Error Signing up with email and password');
              }
          
              setEmail("");
              setPassword("");
              setDisplayName("");
        }
        else {
            console.log(email, password)
            auth.signInWithEmailAndPassword(email, password).catch(error => {
                setError("Error signing in with password and email!");
                console.error("Error signing in with password and email", error);
              });
        }
      }

    return(
        <Container>
            <ContainerIcon>
                <img src={image} />
            </ContainerIcon>
            <ContainerLogin>
                <LoginForm 
                change={signup}
                handler={onChangeHandler}
                getData={onSubmitHandler}
                />
                <BigButton
                    onClick={() => changeLogin(!signup)}>
                    {signup ? 'Do you have account? Sign In' : 'Don’t have account? Sign up'}
                </BigButton>
            </ContainerLogin>
        </Container>
    )
}

export default Login