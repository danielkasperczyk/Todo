import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components';
import Nav from './Nav';
import Todo from './Todo';
import Notes from './Notes';

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
                        <Route path="/notes">
                            <Notes />
                        </Route>
                    </Switch>
                </Wraper>
            </Router>
        )
    }
}

export default MainApp