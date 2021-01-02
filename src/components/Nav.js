import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../units/firebase';
import NavList from './NavList';


const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.todo};
    width: 125px;
`
const User = styled.div`
    border-radius: 50%;
    background-color: #fff;
    width: 50px;
    height: 50px;
    padding: 1rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    
`

const Button = styled.button`
    width: 100%;
    border: none;
    border-top: ${props => props.signout ? "2px solid #fff" : null};
    color: #ffffff;
    padding: 1rem;
    cursor: pointer;
    outline: 0;   
    background-color: transparent;
`

const Nav = (props) => {
    const userSignout = () => {
        auth.signOut();
    }
    
    return (
        <Container>
            <User>
                <h2>C</h2>  
            </User>  
            <NavList />
            <div>
                <Button
                    type="button">+ New List</Button>
                <Button 
                    signout="true"
                    type="button" 
                    onClick={userSignout}>
                        Sign Out
                </Button>
            </div>
        </Container>
    )
}

export default Nav;