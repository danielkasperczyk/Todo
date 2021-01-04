import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { database } from '../units/firebase';
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
            modalType: true // IF TRUE, WITH MODAL USER CAN ADD NOTES, ELSE ADD NEW LIST IN NAV
        }
        this.showModal = this.showModal.bind(this);
        this.getTodo = this.getTodo.bind(this);
    }
    
    getTodo(obj) {
        // DO SOMETHING
        if(this.state.modalType === false) {
            database.ref(`users/${this.state.user.uid}/list`).set({
                listId: uniqid(),
                listName : obj.text
            })
        }
    }
    showModal(bool){
        let currentModal = this.state.modal
        this.setState({modal: !currentModal, modalType: bool})
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
                    <Nav show={this.showModal}/>
                    <Container>
                    <MakeTodo 
                        show={this.showModal}/>
                    <Container secondary>
                        <Switch>
                            <Route exact path="/">
                                <Today />
                            </Route>
                            <Route path="/calendar">
                                <Calendar />
                            </Route>
                            <Route path="/list">
                                <List />
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