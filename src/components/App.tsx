import React, {FunctionComponent, useEffect} from 'react';
import Salary, {SALARY_TYPES} from "../containers/Salary";
import Container from "react-bootstrap/Container";
import Payroll from "../containers/Payroll";

interface AppProps {
    initSalary: () => void,
    salaryType: string,
}

const App: FunctionComponent<AppProps> = ({initSalary, salaryType}: AppProps) => {
    useEffect(() => {
       initSalary();
    }, []);

    return (<Container fluid>
            <h2 className='header'>Расчёт зарплаты</h2>
            <br />
            <Salary />
            {salaryType === SALARY_TYPES.PER_MONTH && <Payroll />}
    </Container>);
}

export default App;
