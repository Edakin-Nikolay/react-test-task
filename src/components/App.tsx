import React from 'react';
import Home from "./Home";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";

const App: React.FC = () => {
    return (<Container>
        <Jumbotron>
            Hello, ts project!!!! HO HO HO!!!
            <br />
            <Home title='Home page' count={12} />
        </Jumbotron>
    </Container>);
}

export default App;
