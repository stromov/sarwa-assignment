import * as React from 'react';

import type {InitialAccountData, Status, FilterStatus} from '../../types';

import accounts from '../../../mocks/accounts.json';
import {processInitialData} from '../../helpers/processInitialData';
import {reducer} from './reducer';
import {Table} from '../Table';
import {Filter} from '../Filter';
import {Statistics} from '../Statistics';

import './App.css';
import 'normalize.css/normalize.css';

export const App = () => {
    const accountsData = processInitialData(accounts as InitialAccountData[]);
    const [state, dispatch] = React.useReducer(reducer, accountsData);
    const accountsArr = Object.values(state.collections.accounts);

    const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const filterStatus = event.target.value as FilterStatus;

        if (filterStatus === 'all') {
            dispatch({type: 'filter', payload: {filter: 'all'}});
        } else {
            dispatch({type: 'filter', payload: {filter: filterStatus}});
        }
    };

    const onAccountStatusChange = (id: string, status: Status) => {
        dispatch({type: 'change-status', payload: {status, id}});
    };

    const {accountsCount, totalBalance} = accountsArr.reduce(
        (acc, item) => {
            if (item.isVisible) {
                acc.accountsCount += 1;
                acc.totalBalance += item.balance;
            }

            return acc;
        },
        {accountsCount: 0, totalBalance: 0},
    );

    return (
        <div className="app">
            <Statistics accountsCount={accountsCount} totalBalance={totalBalance} />
            <Filter onFilterChange={onFilterChange} />
            <Table accounts={accountsArr} onAccountStatusChange={onAccountStatusChange} />
        </div>
    );
};
