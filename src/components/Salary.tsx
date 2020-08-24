import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Form from 'react-bootstrap/Form';

import {CheckButton, TextField} from "./CustomControls";
import {SALARY_TYPES} from "../containers/Salary";
import Info from "./Info";

const Salary: React.FC = ({salaryType, personalTax}: any) => {

    const switchText: () => string = () => {
        if (salaryType === 'perDay')
            return '₽ в день';
        else if (salaryType === 'perHour')
            return '₽ в час';
        else
            return '₽';
    };

    return (
        <Form >
            <Form.Text muted className='secondFont'>Сумма</Form.Text>
            <Form.Group className='marginContainer'>
                <Field
                    checkId={1}
                    name='salaryType'
                    component={CheckButton}
                    label='Оклад за месяц'
                    type='radio'
                    value={SALARY_TYPES.PER_MONTH}/>
                <div className='formInline'>
                    <Field
                        checkId={2}
                        name='salaryType'
                        component={CheckButton}
                        label='МРОТ'
                        type='radio'
                        value={SALARY_TYPES.MIN_WAGE}/>
                    <Info />
                </div>
                <Field
                    checkId={3}
                    name='salaryType'
                    component={CheckButton}
                    label='Оплата за день'
                    type='radio'
                    value={SALARY_TYPES.PER_DAY}/>
                <Field
                    checkId={4}
                    name='salaryType'
                    component={CheckButton}
                    label='Оплата за час'
                    type='radio'
                    value={SALARY_TYPES.PER_HOUR}/>
                <Form.Row className='formInline marginContainer'>
                    <Form.Text className='secondFont' muted={personalTax}>Указать с НДФЛ</Form.Text>
                    <Field
                        checkId={1}
                        name='personalTax'
                        styles={['marginSwitch']}
                        component={CheckButton}
                        label=''
                        type='switch'/>
                    <Form.Text className='secondFont' muted={!personalTax}>без НДФЛ</Form.Text>
                </Form.Row>
                <Form.Row className='formInline marginContainer'>
                    <Field name='amount' component={TextField} />
                    <Form.Text className='mainFont'>{switchText()}</Form.Text>
                </Form.Row>
            </Form.Group>
        </Form>
    )
};

export default reduxForm({
    form: 'salary',
})(Salary);

