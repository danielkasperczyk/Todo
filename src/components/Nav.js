import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.todo};
`
const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
`
const Button = styled.button`
    
`

const Nav = () => {

    return (
        <Container>
            <h2>Daniel</h2>   
            <List>
                <li>
                    <Link to="/">To Do</Link>
                </li>
                <li>
                    <Link to="/notes">Notes</Link>
                </li>
            </List>

        </Container>
    )
}