import React, {FunctionComponent} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Form} from "react-bootstrap";
import {calcFinalSalary, splitIntoDigits} from "../lib/util";

interface payrollProps {
    amount: number,
    personalTax: boolean,
}

const Payroll: FunctionComponent<payrollProps> = ({amount, personalTax}: payrollProps) => {

    const finalSalary = calcFinalSalary(amount, personalTax);
    return <Jumbotron className='jumbotron'>
        <Form>
            <Form.Row className='formInline'>
                <Form.Text className='mainFont'>{splitIntoDigits(finalSalary.salary)} ₽&nbsp;</Form.Text>
                <Form.Text className='secondFont'>сотрудник будет получать на руки</Form.Text>
            </Form.Row>
            <Form.Row className='formInline'>
                <Form.Text className='mainFont'>{splitIntoDigits(finalSalary.tax)} ₽&nbsp;</Form.Text>
                <Form.Text className='secondFont'>НДФЛ, 13% от оклада</Form.Text>
            </Form.Row>
            <Form.Row className='formInline'>
                <Form.Text className='mainFont'>{splitIntoDigits(finalSalary.employeeCost)} ₽&nbsp;</Form.Text>
                <Form.Text className='secondFont'>за сотрудника в месяц</Form.Text>
            </Form.Row>
        </Form>
    </Jumbotron>;
}

export default Payroll;
