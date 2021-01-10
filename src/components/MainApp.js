import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { database } from '../units/firebase';
import { convertToArray } from '../units/helpers';
import  uniqid from 'uniqid';

import styled from 'styled-components';
import Nav from './Nav';
import Today from './Today';
import Calendar from './Calendar';
import List from './List';
import MakeTodo from './MakeTodo';
import Modal from './Modal';

const Wraper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
`
const Container = styled.div`
    display: flex;
    flex-direction:column;
    width: ${({ secondary }) => secondary ? "80%" : "100%"};
    margin: ${({ secondary }) => secondary && "0 auto"};
`

class MainApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: props.user,
            modal: false,
            modalType: true, // IF TRUE, WITH MODAL USER CAN ADD NOTES, ELSE ADD NEW LIST IN NAV
            todos: [],
            lists: []
        }
        this.showModal = this.showModal.bind(this);
        this.getTodo = this.getTodo.bind(this);
        this.fetchFromDatabase = this.fetchFromDatabase.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.setModalType = this.setModalType.bind(this);
    }

    componentDidMount(){
        this.fetchFromDatabase();
    }

    fetchFromDatabase(){
        database.ref(`/users/${this.state.user.uid}`).once('value')
            .then(dataSnapshot => {
                const {lists, todos} = dataSnapshot.val();               
                lists !== undefined ? this.setState({ lists }) : this.setState({ lists: []})
                todos !== undefined ? this.setState({ todos }) : this.setState({ todos: []})
            })
    }
    deleteTodo(todo){
        const { todos } = this.state;
        const todosStateCopy = Object.keys(todos).map((key) => [(key), todos[key]])   
        const getTodo = todosStateCopy.filter(item => item[1].todoId === todo.todoId && item[0])[0].shift();
        database.ref(`users/${this.state.user.uid}/todos/${getTodo}`).remove();
        this.fetchFromDatabase();
    }
    deleteList(id){
        const {lists} = this.state;
        const listStateCopy = Object.keys(lists).map((key) => [(key), lists[key]]);
        const getList = listStateCopy.filter(item => item[1].listId === id && item[0])[0].shift();
        database.ref(`users/${this.state.user.uid}/lists/${getList}`).remove();
        this.fetchFromDatabase();
    }
    getTodo(obj) {
        // DO SOMETHING
        if(this.state.modalType === false) {
            const listsCopy = convertToArray(this.state.lists).length > 0 ? convertToArray(this.state.lists) : [];
            let exist = listsCopy.length > 0 ? listsCopy.find(list => list.listName === obj.text) : false
            if(!exist){
                const listRef = database.ref(`users/${this.state.user.uid}/lists`);
                const newListRef = listRef.push();
                const list = {
                    listId: uniqid(),
                    listName: obj.text,
                    listTodo: []
                }
                
                newListRef.set(list);
                this.fetchFromDatabase();
            }
        }
        else{        
            const todosRef = database.ref(`users/${this.state.user.uid}/todos`);
            const newTodoRef = todosRef.push();
            const todo = {
                todoId: uniqid(),
                todo: obj.text,
                todoData: obj.day
            }
            newTodoRef.set(todo);
            this.fetchFromDatabase();
        }
    }

    showModal(bool){
        let currentModal = this.state.modal
        this.setState({modal: !currentModal, modalType: bool})
    }
    setModalType(bool){
        this.setState({modalType: bool})
    }
    render(){
        return(
            <Router>
                <Wraper>
                    <Modal
                        type={this.state.modalType}
                        modal={this.state.modal}
                        show={this.showModal}
                        getTodo={this.getTodo}
                        />
                    <Nav 
                        show={this.showModal}
                        lists={this.state.lists}/>
                    <Container>
                    <MakeTodo 
                        show={this.showModal}/>
                    <Container secondary>
                        <Switch>
                            <Route exact path="/">
                                <Today 
                                    todos={convertToArray(this.state.todos)}
                                    deleteTodo={this.deleteTodo}
                                    getTodo={this.getTodo}
                                    setModalType={this.setModalType}/>
                            </Route>
                            <Route path="/calendar">
                                <Calendar />
                            </Route>
                            <Route path="/list">
                                <List 
                                    lists={this.state.lists}
                                    deleteList={this.deleteList}
                                    fetch={this.fetchFromDatabase}
                                    deleteTodo={this.deleteTodo}/>
                            </Route>
                        </Switch>
                        </Container>
                    </Container>
                </Wraper>
            </Router>
        )
    }
}

export default MainApp