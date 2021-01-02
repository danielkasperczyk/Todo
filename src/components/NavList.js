import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    width: 100%;
    li{
        text-align: center;
        width: 100%;
        padding: 0.5rem ;
        margin: 0.5rem 0;
    }
    a{
        font-size: 1rem;
        padding: 0.75rem;
        text-decoration: none;
    }
`
const ListP = styled.div`
    width: 100%;
    border-top: 2px solid #ffffff;
    h3{
        color: #ffffff;
        text-align: center;
        font-size: 1.2rem;
        font-weight: 400;
    }
`

const NavList = props => {

    return(
        <>
            <List>
            <li>
                <NavLink 
                    to="/">
                        Today
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/days">
                        Next 7 days
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/calendar">
                        Calendar
                </NavLink>
            </li>
            <ListP>
                <h3>Lists</h3>
            </ListP>
            <li>
                <NavLink 
                    to="/list">
                        List 1
                </NavLink>
            </li>.
        </List>
    </>
    )
}

export default NavList