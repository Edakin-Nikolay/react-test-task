import React, {useEffect} from 'react';
import {reduxForm, Field} from 'redux-form';
import Form from 'react-bootstrap/Form';

import {CheckButton, TextField} from "./CustomControls";


const Salary: React.FC = ({salaryType, personalTax, initSalary}: any) => {
    useEffect(() => {
        initSalary();
    }, [])

    const switchText: () => string = () => {
        if (salaryType === 'perDay')
            return 'Руб в день'
        else if (salaryType === 'perHour')
            return 'Руб в час'
        else
            return 'Руб'
    };

    return (
        <Form >
            <Form.Label>Сумма</Form.Label>
            <Form.Group>
                <Field
                    checkId={1}
                    name='salaryType'
                    component={CheckButton}
                    label='Оклад за месяц'
                    type='radio'
                    value='perMonth'/>
                <Field
                    checkId={2}
                    name='salaryType'
                    component={CheckButton}
                    label='МРОТ'
                    type='radio'
                    value='minWage'/>
                <Field
                    checkId={3}
                    name='salaryType'
                    component={CheckButton}
                    label='Оплата за день'
                    type='radio'
                    value='perDay'/>
                <Field
                    checkId={4}
                    name='salaryType'
                    component={CheckButton}
                    label='Оплата за час'
                    type='radio'
                    value='perHour'/>
            </Form.Group>
            <Form.Group className='formInline'>
                <Form.Text muted={personalTax}>Указать с НДФЛ</Form.Text>
                <Field
                    checkId={1}
                    name='personalTax'
                    component={CheckButton}
                    label=''
                    type='switch'/>
                <Form.Text muted={!personalTax}>без НДФЛ</Form.Text>
            </Form.Group>
            <Form.Group className='formInline'>
                <Field name='amount' component={TextField} />
                <Form.Text>{switchText()}</Form.Text>
            </Form.Group>
        </Form>
    )
};

export default reduxForm({
    form: 'salary',
})(Salary);

