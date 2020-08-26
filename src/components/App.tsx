import React, {FunctionComponent, useEffect} from 'react';
import Salary from "../containers/Salary";
import Container from "react-bootstrap/Container";
import Payroll from "../containers/Payroll";
import {SALARY, SalaryType} from '../lib/SalaryFormTypes';

interface AppProps {
    initSalary: () => void,
    salaryType: SalaryType,
}

const App: FunctionComponent<AppProps> = ({initSalary, salaryType}: AppProps) => {
    useEffect(() => {
       initSalary();
    }, []);

    return (<Container fluid>
            <h2 className='header'>Расчёт зарплаты</h2>
            <br />
            <Salary />
            {salaryType === SALARY.PER_MONTH && <Payroll />}
    </Container>);
}

export default App;
