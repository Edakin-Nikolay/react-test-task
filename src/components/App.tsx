import React from 'react';
import Salary from "../containers/Salary";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";

const App: React.FC = () => {

    return (<Container fluid>
        <Jumbotron>
            <h2 className='header'>Рассчёт зарплаты</h2>
            <br />
            <Salary />
        </Jumbotron>
    </Container>);
}

export default App;
