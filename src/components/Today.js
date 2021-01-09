import styled from 'styled-components';
import TodayTodo from './TodayTodo';
import { useState } from 'react';
import uniqid from 'uniqid'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
    margin: 3rem auto 0 ;
`
const TodayForm = styled.form`
    display: flex;
    margin-top: 1rem;
    width: 100%;
    border-top: 2px solid grey;
    input{
        width: 100%;
        border: none;
        outline: 0;
        padding: 1rem;
    }
    button{
        padding: 0.75rem;
        font-size: 1.5rem;
        border: none;   
        background: transparent;
        outline: 0;
    }
`

const Today = ({ todos, deleteTodo, getTodo, setModalType }) => {
    const todayDay = new Date().toDateString();
    const todayTodos = todos.filter(todo => todo.todoData === todayDay && todo );
    const [text, setText] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault();
        setModalType(true);
        if(text.length > 0){        
            const obj = {
                todoId: uniqid(),
                text,
                day: todayDay
            }
            getTodo(obj)
            setText('');
        }
    }

    return(
        <div>
            <h1>Today</h1>
            <Container>
                {todayTodos.map(todo => <TodayTodo todo={todo} deleteTodo={deleteTodo}/>)}
                <TodayForm onSubmit={handleSubmit}>
                    <button type="submit">
                        +
                    </button>
                    <input 
                        type="text" 
                        placeholder="Add fast note"
                        onChange={e =>setText(e.target.value)}
                        value={text}/>
                </TodayForm>
            </Container>
        </div>
    )
}

export default Today;