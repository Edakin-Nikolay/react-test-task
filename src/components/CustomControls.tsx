import React from "react";
import Form from "react-bootstrap/Form";

type checkButtonProps = {
    input: any,
    label: string,
    type: 'checkbox' | 'radio' | undefined,
    checkId: number,
    styles: Array<string>,
    changeAmount: (value: string) => any};

export const CheckButton: ({input, label, type, checkId, styles, changeAmount}: checkButtonProps) => JSX.Element =
    ({input, label, type, checkId, styles, changeAmount}: checkButtonProps) => {

    return <Form.Check
        id={`${type}-${checkId}`}
        className={styles ? `mainFont ${styles.join(' ')}` : 'mainFont'}
        type={type}
        label={label}
        checked={input.checked || input.value === true}
        onChange={(v: any) => {
            changeAmount(input.value);
            input.onChange(v);}}
        value={input.value}
    />};

export const SwitchButton = ({input, switchId}: any) => {
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
   const {input} = props;

   return <Form.Control className='mainFont textField' onChange={input.onChange} value={input.value} />
}
