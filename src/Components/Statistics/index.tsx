import * as React from 'react';

import {useAppSelector} from '../../store/hooks';
import {Status} from '../../constants';
import {Card} from './Card';

import './index.css';

export function Statistics() {
    const accountsData = useAppSelector(state => state.accounts);
    const accountsArr = Object.values(accountsData);

    const statistics = accountsArr.reduce(
        (acc, account) => {
            const {balance, status} = account;

            acc.Total.count += 1;
            acc.Total.balance += balance;
            acc[status].count += 1;
            acc[status].balance += balance;

            return acc;
        },
        {
            Total: {count: 0, balance: 0, type: 'Total'},
            [Status.pending]: {count: 0, balance: 0, type: Status.pending},
            [Status.approved]: {count: 0, balance: 0, type: Status.approved},
            [Status.funded]: {count: 0, balance: 0, type: Status.funded},
            [Status.closed]: {count: 0, balance: 0, type: Status.closed},
        },
    );

    const {Total, Pending, Approved, Funded, Closed} = statistics;

    return (
        <div className="cards-container">
            {[Total, Pending, Approved, Funded, Closed].map(({type, count, balance}) => (
                <Card key={type} type={type} count={count} balance={balance} />
            ))}
        </div>
    );
}
