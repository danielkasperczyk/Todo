import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../units/firebase';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.todo};
    padding: 2rem;
`
const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    li{
        padding: 0.5rem ;
        margin: 0.5rem 0;
    }
    a{
        font-size: 1rem;
        padding: 0.75rem;
    }
`

const Button = styled.button`
    border: none;
    padding: 1rem;
    cursor: pointer;
    outline: 0;   
    background-color: transparent;
`
const styledLink = styled.a`
    background: #fff;
    border-radius: 10px;
`
const Nav = () => {
    const userSignout = () => {
        auth.signOut();
    }

    return (
        <Container>
            <h2>Daniel</h2>   
            <List>
                <li>
                    <NavLink 
                        to="/" 
                        exact activeStyle={
                            {backgroundColor: "white",
                            borderRadius: '10px'}}>
                            To Do
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/notes" 
                        exact activeStyle={
                            {backgroundColor: "white",
                            borderRadius: '10px'}}>
                            Notes
                    </NavLink>
                </li>
            </List>
            <Button 
                type="button" 
                onClick={userSignout}>
                    Sign Out
            </Button>
        </Container>
    )
}

export default Nav;