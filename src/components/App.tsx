import React, {useEffect} from 'react';
import Salary, {SALARY_TYPES} from "../containers/Salary";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Payroll from "../containers/Payroll";

const App: React.FC = ({initSalary, salaryType}: any) => {
    useEffect(() => {
       initSalary();
    }, []);

    return (<Container fluid>
        <Jumbotron>
            <h2 className='header'>Расчёт зарплаты</h2>
            <br />
            <Salary />
            {salaryType === SALARY_TYPES.PER_MONTH && <Payroll />}
        </Jumbotron>
    </Container>);
}

export default App;
