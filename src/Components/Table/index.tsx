import * as React from 'react';

import type {AccountData} from '../../types';
import {Heading} from './Heading';
import {Row} from './Row';
import {useAppSelector} from '../../store/hooks';
import {SortType} from '../../constants';

import './index.css';

const sortFuncs = {
    [SortType.desc]: (a: AccountData, b: AccountData) => b.balance - a.balance,
    [SortType.asc]: (a: AccountData, b: AccountData) => a.balance - b.balance,
};

export function Table() {
    const accountsData = useAppSelector(state => state.accounts);
    const sortType = useAppSelector(state => state.sortType.value);
    const accounts = Object.values(accountsData).sort(sortFuncs[sortType]);

    return (
        <table>
            <Heading />
            <tbody>
                {accounts.map(item => (
                    <Row key={item.id} account={item} />
                ))}
            </tbody>
        </table>
    );
}
