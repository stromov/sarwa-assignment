import * as React from 'react';

import {Heading} from './Heading';
import {Row} from './Row';
import {useAppSelector} from '../../store/hooks';

import './index.css';

export function Table() {
    const accountsData = useAppSelector(state => state.accounts);
    const accounts = Object.values(accountsData);

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
