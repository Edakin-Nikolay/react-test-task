import React from "react";
import {reduxForm, Field} from "redux-form";
import Form from 'react-bootstrap/Form';

//type radioButtonProps = {id: number, type: 'switch' | 'checkbox' | 'radio' | undefined, label: string};

const Home = () => {
    const radioButton = (input: any) =>
        <Form.Check
            type='radio'
            label='label'
            value={input.value}
        />

    const submit = (values: any) => console.log(values);

    return (
        <Form onSubmit={submit}>
            <Field name='Radio 1' component='input' />
            <Field name='Radio 2' component={radioButton} />
            <Field name='Radio 3' component={radioButton} />
        </Form>
    )
};

export default reduxForm({
    form: 'home',
})(Home);

