import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

const TodoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin: 0.5rem 0;
`
const TodoCircle = styled.button`
    width: 30px;
    height: 30px;
    border: ${({done}) => done ? 'none' : '1px solid #000'};
    border-radius: 50%;
    background: ${({done, theme}) => done ? theme.todo : 'transparent'};
    color: #fff;
    outline: 0;
    cursor: pointer;
    margin-right: 1rem;

`
const TodoButton = styled.button`
    align-self: flex-end;
    margin-left: 3rem;
    outline: 0;
    border: none;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
`
const TodoText = styled.p`
    text-decoration: ${({ done }) => done && 'line-through'}; 
`
const TodayTodo = ({todo, deleteTodo}) => {
    const [chacked, setChaked] = useState(false);
    return(
        <div>
            <TodoContainer>
                <TodoCircle 
                    onClick={() => setChaked(!chacked)}
                    done={chacked}>
                    {chacked && <FontAwesomeIcon icon={faCheck} />}
                </TodoCircle>
                <TodoText done={chacked}>{todo.todo}</TodoText>
                {
                chacked && 
                <TodoButton
                    onClick={() => deleteTodo(todo)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </TodoButton>
                }
            </TodoContainer>
        </div>
    )
}

export default TodayTodo;