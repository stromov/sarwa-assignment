import * as React from 'react';

import {Filter} from '../Filter';
import {useAppDispatch} from '../../../store/hooks';
import {toggleSortType} from '../../../store/reducers/sortType';
import {BalanceIcon} from './BalanceIcon';

export const Heading = () => {
    const dispath = useAppDispatch();

    const onBalanceHeadingClick = () => {
        dispath(toggleSortType());
    };
    return (
        <thead>
            <tr>
                <th className="account-table-heading">Account</th>
                <th className="account-table-heading">
                    <Filter />
                </th>
                <th
                    className="account-table-heading balance-heading"
                    onClick={onBalanceHeadingClick}
                >
                    <div className="balance-heading-container">
                        <span>Balance</span>
                        <BalanceIcon />
                    </div>
                </th>
            </tr>
        </thead>
    );
};
