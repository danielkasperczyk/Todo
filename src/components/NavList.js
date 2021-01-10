import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { convertToArray } from '../units/helpers';
const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    width: 100%;
    height: auto;
    overflow-y: scroll;
    scrollbar-width: none; 
     -ms-overflow-style: none; 
    &::-webkit-scrollbar { 
    display: none;
  }  
    li{
        width: 100%;
        margin: 0.5rem 0;
        &:nth-child(2){
            margin-bottom: 2rem;
        }
    }
    a{
        display: inline-block;
        font-size: 1rem;
        padding: 0.75rem;
        text-decoration: none;
        width: 100%;
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
const StyledLink = styled(NavLink)`
    background-color: ${({active}) => active && "#1D95C3"};
    color: ${({active}) => active && "#ffffff"};
`

const NavList = ({lists}) => {
    let { pathname } = useLocation();
    return(
        <>
            <List>
            <li>
                <StyledLink 
                    to="/"
                    active={pathname === "/" ? true : false}>
                        Today
                </StyledLink>
            </li>
            <li>
                <StyledLink 
                    to="/calendar"
                    active={pathname === "/calendar" ? true : false}>
                        Calendar
                </StyledLink>
            </li>
            <ListP>
                <h3>Lists</h3>
            </ListP>
                {convertToArray(lists).map(list => <li>
                    <StyledLink
                        to={`/list/${list.listName.replace(/\s+/g, '-').toLowerCase()}`}
                        active={pathname === `/list/${list.listName.replace(/\s+/g, '-').toLowerCase()}`  ? true : false}>
                            {list.listName}
                </StyledLink>
                    </li>
                )}
        </List>
    </>
    )
}

export default NavList