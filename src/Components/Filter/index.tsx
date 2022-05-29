import * as React from 'react';

import {Status} from '../../constants';

type Props = {onFilterChange: React.ChangeEventHandler<HTMLSelectElement>};

export const Filter = ({onFilterChange}: Props) => {
    const Options = [
        <option key="all" value="all">
            all
        </option>,
        Object.keys(Status).map(status => (
            <option key={status} value={status}>
                {status}
            </option>
        )),
    ];

    return (
        <>
            <label htmlFor="status">Status</label>
            <select id="status" name="status" onChange={onFilterChange}>
                {Options}
            </select>
        </>
    );
};
