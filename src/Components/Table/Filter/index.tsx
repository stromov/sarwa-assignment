import * as React from 'react';

import type {FilterStatus} from '../../../types';

import {Status} from '../../../constants';
import {useAppDispatch} from '../../../store/hooks';
import {setFilter} from '../../../store/reducers/filter';

export const Filter = () => {
    const dispatch = useAppDispatch();
    const Options = [
        <option key="All statuses" value="All statuses">
            All statuses
        </option>,
        Object.values(Status).map(status => (
            <option key={status} value={status}>
                {status}
            </option>
        )),
    ];

    const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFilter({status: event.target.value as FilterStatus}));
    };

    return (
        <select
            id="status"
            name="status"
            className="account-table-filter"
            onChange={onFilterChange}
        >
            {Options}
        </select>
    );
};
