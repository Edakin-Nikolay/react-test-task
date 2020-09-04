import React from 'react';
import {reduxForm, Field, FormErrors, InjectedFormProps} from 'redux-form';
import Form from 'react-bootstrap/Form';

import {CheckButton, SwitchButton, TextField} from "./CustomControls";
import {DEFAULT_AMOUNT, SalaryType, SalaryFormTypes} from "../lib/SalaryFormTypes";
import Info from "./Info";

interface StateProps {
    salaryType: SalaryType,
    personalTax: boolean,
}
interface DispatchProps {
    changeAmount: (amount: number) => void,
}

type Props = StateProps & DispatchProps;

const Salary: React.FC<Props & InjectedFormProps<{}, Props>> = (props: any) => {
    const { salaryType, personalTax, changeAmount } = props;

    const switchText: () => string = () => {
        if (salaryType === 'perDay')
            return '₽ в день';
        else if (salaryType === 'perHour')
            return '₽ в час';
        else
            return '₽';
    };

    const changeAmountField: (value: string) => void = (value: string) => {
        if (value === SalaryType.PER_DAY) {
            changeAmount(DEFAULT_AMOUNT.DAY);
        } else if (value === SalaryType.PER_HOUR) {
            changeAmount(DEFAULT_AMOUNT.HOUR);
        } else {
            changeAmount(DEFAULT_AMOUNT.MONTH);
        }
    }

    return (
        <Form >
            <Form.Text muted className='secondFont'>Сумма</Form.Text>
            <Form.Group className='radioButtonsContainer'>
                <Field
                    checkId={1}
                    name='salaryType'
                    component={CheckButton}
                    changeAmount={changeAmountField}
                    label='Оклад за месяц'
                    type='radio'
                    value={SalaryType.PER_MONTH}/>
                <div className='formInline'>
                    <Field
                        checkId={2}
                        name='salaryType'
                        component={CheckButton}
                        changeAmount={changeAmountField}
                        label='МРОТ'
                        type='radio'
                        value={SalaryType.MIN_WAGE}/>
                    <Info />
                </div>
                <Field
                    checkId={3}
                    name='salaryType'
                    component={CheckButton}
                    changeAmount={changeAmountField}
                    label='Оплата за день'
                    type='radio'
                    value={SalaryType.PER_DAY}/>
                <Field
                    checkId={4}
                    name='salaryType'
                    component={CheckButton}
                    changeAmount={changeAmountField}
                    label='Оплата за час'
                    type='radio'
                    value={SalaryType.PER_HOUR}/>
                <Form.Row className='formInline textBoxContainer'>
                    <Form.Text className='secondFont' muted={personalTax}>Указать с НДФЛ</Form.Text>
                    <Field
                        switchId={1}
                        name='personalTax'
                        component={SwitchButton}/>
                    <Form.Text className='secondFont' muted={!personalTax}>Без НДФЛ</Form.Text>
                </Form.Row>
                <Form.Row className='formInline textBoxContainer'>
                    <Field name='amount' component={TextField} />
                    <Form.Text className='mainFont'>{switchText()}</Form.Text>
                </Form.Row>
            </Form.Group>
        </Form>
    )
};

export default reduxForm<{}, Props>({
    form: 'salary',
    validate(values: SalaryFormTypes): FormErrors<SalaryFormTypes> {
        const errors: FormErrors<SalaryFormTypes> = { };
        if (isNaN(Number(values.amount))) {
            errors.amount = 'В поле должно быть введено число'
        }
        return errors;
    }
})(Salary);

