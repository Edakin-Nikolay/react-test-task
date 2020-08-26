import React, {FunctionComponent} from "react";
import Form from "react-bootstrap/Form";

interface checkButtonProps {
    input: any,
    label: string,
    type: 'checkbox' | 'radio' | undefined,
    checkId: number,
    styles: Array<string>,
    changeAmount: (value: string) => void}

export const CheckButton: FunctionComponent<checkButtonProps> =
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

    return <Form.Group>
        <Form.Control className='mainFont textField' onChange={input.onChange} value={input.value}/>
        {meta.error && <Form.Text className='errorText'>{meta.error}</Form.Text>}
    </Form.Group>
}
