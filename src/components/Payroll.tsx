import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Form} from "react-bootstrap";

const Payroll: React.FC = (props: any) => {
    const {amount, personalTax} = props;

    const calcFinalSalary: () => {salary: number, tax: number, employeeCost: number} = () => {
        if (personalTax) {
            const amountWithTax = Math.round(amount * 100 / 87);
            return {
                salary: amount,
                tax: amountWithTax - amount,
                employeeCost: amountWithTax
            }
        }
        else {
            const amountWithoutTax = Math.round(amount * 87 / 100);
            return {
                salary: amountWithoutTax,
                tax: Math.round(amount * 0.13),
                employeeCost: amount,
            }
        }

    }
    const finalSalary = calcFinalSalary();
    return <Jumbotron className='jumbotron'>
        <Form>
            <Form.Row className='formInline'>
                <Form.Text className='mainFont'>{finalSalary.salary} ₽&nbsp;</Form.Text>
                <Form.Text className='secondFont'>сотрудник будет получать на руки</Form.Text>
            </Form.Row>
            <Form.Row className='formInline'>
                <Form.Text className='mainFont'>{finalSalary.tax} ₽&nbsp;</Form.Text>
                <Form.Text className='secondFont'>НДФЛ, 13% от оклада</Form.Text>
            </Form.Row>
            <Form.Row className='formInline'>
                <Form.Text className='mainFont'>{finalSalary.employeeCost} ₽&nbsp;</Form.Text>
                <Form.Text className='secondFont'>за сотрудника в месяц</Form.Text>
            </Form.Row>
        </Form>
    </Jumbotron>;
}

export default Payroll;
