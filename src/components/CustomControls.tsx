import React from "react";
import Form from "react-bootstrap/Form";

export const CheckButton: React.FC = (props: any) => {
    const {input, label, type, checkId} = props;

    return <Form.Check
        id={`${type}-${checkId}`}
        type={type}
        label={label}
        checked={input.checked || input.value === true}
        onChange={input.onChange}
        value={input.value}
    />};

export const TextField: React.FC = (props: any) => {
   const {input} = props;

   return <Form.Control onChange={input.onChange} value={input.value} />
}
