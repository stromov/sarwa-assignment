import * as React from 'react';

import {useAppSelector} from '../../../store/hooks';
import {SortType} from '../../../constants';

export const BalanceIcon = () => {
    const sortType = useAppSelector(state => state.sortType.value);

    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={sortType === SortType.asc ? 'sort-icon-asc' : 'sort-icon-desc'}
        >
            <line
                y1="-1"
                x2="16"
                y2="-1"
                transform="matrix(1 0 0 -1 0 12)"
                stroke="#878787"
                strokeWidth="2"
            />
            <line
                y1="-1"
                x2="11"
                y2="-1"
                transform="matrix(1 0 0 -1 0 7)"
                stroke="#878787"
                strokeWidth="2"
            />
            <line
                y1="-1"
                x2="6"
                y2="-1"
                transform="matrix(1 0 0 -1 0 2)"
                stroke="#878787"
                strokeWidth="2"
            />
        </svg>
    );
};
