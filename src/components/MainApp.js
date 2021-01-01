import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components';

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
                    <h1> work</h1>
                </Wraper>
            </Router>
        )
    }
}

export default MainApp