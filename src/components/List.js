import { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import uniqid from 'uniqid';

import { database } from '../units/firebase';
import { convertToArray } from '../units/helpers';
import { UserContext } from '../providers/UserProvider';
import TodayTodo from './TodayTodo';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
    margin: 3rem auto 0 ;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        padding: 0.5rem;
        border: none;
        background: red;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        outline: 0;
    }
`
const Form = styled.form`
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

const List = ({ lists, deleteList, fetch,  })=> {
    let history = useHistory();
    const [text, setText] = useState('');
    const user = useContext(UserContext);

    const location = useLocation().pathname.slice(6).replace('-', ' ').toLocaleLowerCase();
    const {listId, listName, todos} = convertToArray(lists).filter(list => list.listName.toLowerCase() === location)[0];
    const listKeys = Object.keys(lists).map((key) => [(key), lists[key]]);
    const listKey = listKeys.filter(item => item[1].listId === listId && item[0])[0].shift();

    const clickDelete = () => {
        deleteList(listId);
        history.push('/')
    }
    
    const submit = e => {
        e.preventDefault();
        if(text.length > 0){
            const listRef = database.ref(`users/${user.uid}/lists/${listKey}/todos`);
            const newListRef = listRef.push();
            const todo = {
                todo: text,
                todoId: uniqid()
            }
            
            newListRef.set(todo);
            fetch();
            setText('')
        }
    }

    const deleteTodo = (obj) => {
        const todoId = convertToArray(todos).filter(todo => todo.todoId === obj.todoId)[0].todoId;
        const todosCopy = Object.keys(todos).map((key) => [(key), todos[key]])
        const todoKey = todosCopy.filter(todo => todo[1].todoId === todoId && todo)[0][0];
        database.ref(`users/${user.uid}/lists/${listKey}/todos/${todoKey}`).remove();
        fetch();
    
    }
    return(
        <Container>
            <Header>   
                <h1>{listName}</h1>
                    <button
                        type="button"
                        onClick={clickDelete}>
                            Delete List
                    </button>
            </Header>
            {convertToArray(todos).length > 0 && convertToArray(todos).map(todo => <TodayTodo todo={todo} deleteTodo={deleteTodo}/>)}
            <Form onSubmit={submit}>
                    <button type="submit">
                        +
                    </button>
                    <input 
                        type="text" 
                        placeholder="Add fast todo"
                        value={text}
                        onChange={e => setText(e.target.value)}
                      />
                </Form>
        </Container>
    )
}

export default List;