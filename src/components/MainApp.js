import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components';
import Nav from './Nav';
import Todo from './Todo';
import Days from './Days';
import Calendar from './Calendar';
import List from './List';

const Wraper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

class MainApp extends Component {
    
    render(){
        return(
            <Router>
                <Wraper>
                    <Nav />
                    <Switch>
                        <Route exact path="/">
                            <Todo />
                        </Route>
                        <Route path="/days">
                            <Days />
                        </Route>
                        <Route path="/calendar">
                            <Calendar />
                        </Route>
                        <Route path="/list">
                            <List />
                        </Route>
                    </Switch>
                </Wraper>
            </Router>
        )
    }
}

export default MainApp