import * as React from 'react';

import {formatBalance} from '../../helpers/formatBalance';

type Props = {
    type: string;
    count: number;
    balance: number;
};

export const Card = ({type, count, balance}: Props) => (
    <div className={`card-container card-type-${type}`}>
        <span className="card-type">
            {type} • {count}
        </span>
        <div className="card-balance-container">
            <span className="card-balance-title">Balance</span>
            <span className="card-balance-count">{formatBalance(balance)}</span>
        </div>
    </div>
);
