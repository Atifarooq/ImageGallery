import React from 'react';

const FormGroup = props => {

    const { label } = props;

    return (
        <fieldset className="form__fieldset">
            <legend className="form__fieldset__legend">{label}</legend>
            {props.children}
        </fieldset>
    );
}

export default FormGroup;
