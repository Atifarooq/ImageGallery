import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Sections, Sorts, Windows } from "../../utils";
import { filterChanged } from "../../state/actions";
import { RadioGroup, FormGroup } from '../../components';

const Filter = () => {

    const filter = useSelector(state => state.filterReducer.filter);
    const dispatch = useDispatch();
    const onChanged = event => dispatch(filterChanged({ ...filter, [event.target.name]: event.target.value }));

    return (
        <form className="flex form">
            <FormGroup label="Section">
                <RadioGroup list={Sections} name="section" filter={filter} onChange={onChanged} />
            </FormGroup>

            <FormGroup label="Sort">
                <RadioGroup list={Sorts} name="sort" filter={filter} onChange={onChanged} />
            </FormGroup>

            <FormGroup label="Window">
                <RadioGroup list={Windows} name="window" filter={filter} onChange={onChanged} />
            </FormGroup>
        </form>
    );
}

export default Filter;