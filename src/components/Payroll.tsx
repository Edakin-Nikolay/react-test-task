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
    return <Jumbotron>
        <Form>
            <Form.Group className='formInline'>
                <Form.Text>{finalSalary.salary} ₽&nbsp;</Form.Text>
                <Form.Text>Сотрудник будет получать на руки</Form.Text>
            </Form.Group>
            <Form.Group className='formInline'>
                <Form.Text>{finalSalary.tax} ₽&nbsp;</Form.Text>
                <Form.Text>НДФЛ, 13% от оклада</Form.Text>
            </Form.Group>
            <Form.Group className='formInline'>
                <Form.Text>{finalSalary.employeeCost} ₽&nbsp;</Form.Text>
                <Form.Text>за сотрудника в месяц</Form.Text>
            </Form.Group>
        </Form>
    </Jumbotron>;
}

export default Payroll;
