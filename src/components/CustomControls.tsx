import React, {FunctionComponent} from "react";
import Form from "react-bootstrap/Form";
import {splitIntoDigits} from "../lib/util";

interface checkButtonProps {
    input: any,
    label: string,
    type: 'checkbox' | 'radio' | undefined,
    checkId: number,
    changeAmount: (value: string) => void}

export const CheckButton: FunctionComponent<checkButtonProps> =
    ({input, label, type, checkId, changeAmount}: checkButtonProps) => {

    return <Form.Check
        id={`${type}-${checkId}`}
        className='radioItem'
        type={type}
        label={label}
        checked={input.checked || input.value === true}
        onChange={(v: any) => {
            changeAmount(input.value);
            input.onChange(v);}}
        value={input.value}
    />};

interface switchButtonProps {
    input: any,
    switchId: number,
}

export const SwitchButton: FunctionComponent<switchButtonProps> = ({input, switchId}: switchButtonProps) => {
    return <Form.Switch
        id={`switch-${switchId}`}
        className='marginSwitch'
        label=''
        checked={input.value}
        onChange={input.onChange}
        value={input.value}
    />
};

export const TextField: React.FC = (props: any) => {
    const {input, meta} = props;

    const onChange = (e: any) => {
        const rawValue: string = e.target.value;
        const val: number = Number(rawValue.replace(/\D+/g, ""));
        if (val && val < 100000000) {
            input.onChange(val);
        } else if (rawValue === "") {
            input.onChange(0);
        }
    }


    return <Form.Group>
        <Form.Control
            id='textField'
            className='mainFont textField'
            onChange={onChange}
            value={splitIntoDigits(input.value)}/>
        {meta.error && <Form.Text className='errorText'>{meta.error}</Form.Text>}
    </Form.Group>
}

/*
return <FormCheck
    id={`${type}-${checkId}`}
    className={styles ? `mainFont ${styles.join(' ')}` : 'containerRadio'}>
    <FormCheck.Input
        onChange={(v: any) => {
            changeAmount(input.value);
            input.onChange(v);}}
        checked={input.checked || input.value === true}
        value={input.value}
        type={type}/>
    <span className='checkmark' />
    <FormCheck.Label>{label}</FormCheck.Label>
</FormCheck>};
*/
