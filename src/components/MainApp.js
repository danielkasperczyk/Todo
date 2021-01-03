import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
    constructor(){
        super();
        this.state = {
            modal: false,
        }
        this.showModal = this.showModal.bind(this);
    }

    showModal(){
        let currentModal = this.state.modal
        console.log(currentModal);
        this.setState({modal: !currentModal})
    }
    render(){
        return(
            <Router>
                <Wraper>
                    <Modal 
                        modal={this.state.modal}
                        show={this.showModal}
                        />
                    <Nav />
                    <Container>
                    <MakeTodo show={this.showModal}/>
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