import * as React from 'react';
import {Filter} from '../Filter';

export const Heading = () => (
    <thead>
        <tr>
            <th>Account</th>
            <th>
                <Filter />
            </th>
            <th className="balance-heading">Balance</th>
        </tr>
    </thead>
);
