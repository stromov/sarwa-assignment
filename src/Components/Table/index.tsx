import * as React from 'react';

import type {AccountData, Status} from '../../types';

import {Heading} from './Heading';
import {Row} from './Row';

type Props = {
    accounts: AccountData[];
    onAccountStatusChange: (id: string, status: Status) => void;
};

export function Table({accounts, onAccountStatusChange}: Props) {
    return (
        <table>
            <Heading />
            <tbody>
                {accounts.map(item =>
                    (item.isVisible ? (
                        <Row
                            key={item.id}
                            item={item}
                            onAccountStatusChange={onAccountStatusChange}
                        />
                    ) : null),
                )}
            </tbody>
        </table>
    );
}
