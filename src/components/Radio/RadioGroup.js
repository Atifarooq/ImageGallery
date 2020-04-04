import React from 'react';
import RadioPill from "./RadioPill";

const RadioGroup = props => {

    const { list, name, filter } = props;

    return (
        list.map((item, idx) =>
            <RadioPill key={idx} name={name}
                value={item.value}
                title={item.title}
                checked={filter[name] === item.value}
                onChange={props.onChange}
            />)
    );
};

export default RadioGroup;
