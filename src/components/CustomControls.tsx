import React from "react";
import Form from "react-bootstrap/Form";

type checkButtonProps = {
    input: any,
    label: string,
    type: 'checkbox' | 'radio' | undefined,
    checkId: number,
    styles: Array<string>};

export const CheckButton: ({input, label, type, checkId, styles}: checkButtonProps) => JSX.Element =
    ({input, label, type, checkId, styles}: checkButtonProps) => {

    return <Form.Check
        id={`${type}-${checkId}`}
        className={styles ? `mainFont ${styles.join(' ')}` : 'mainFont'}
        type={type}
        label={label}
        checked={input.checked || input.value === true}
        onChange={input.onChange}
        value={input.value}
    />};

export const TextField: React.FC = (props: any) => {
   const {input} = props;

   return <Form.Control className='mainFont textField' onChange={input.onChange} value={input.value} />
}
