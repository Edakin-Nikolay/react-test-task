import React from 'react';
import Home from "./Home";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";

const App: React.FC = () => {
    return (<Container fluid>
        <Jumbotron>
            <h2 className='header'>Hello, ts project!!!! HO HO HO!!!</h2>
            <br />
            <Home />
        </Jumbotron>
    </Container>);
}

export default App;
