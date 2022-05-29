import * as React from 'react';

import type {AccountData, Status} from '../../../types';

import {getAllowedStatuses} from '../../../helpers/getAllowedStatuses';

type Props = {
    item: AccountData;
    onAccountStatusChange: (id: string, status: Status) => void;
};

export const Row = ({item, onAccountStatusChange}: Props) => {
    const {status, id, balance} = item;
    const allowedStatuses = getAllowedStatuses(item);
    const Options = [
        <option key={status} value={status}>
            {status}
        </option>,
        allowedStatuses.map(allowedStatus => (
            <option key={allowedStatus} value={allowedStatus}>
                {allowedStatus}
            </option>
        )),
    ];

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = event.target;
        onAccountStatusChange(id, value as Status);
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{balance}</td>
            <td>
                <select id="allowedStatus" name="allowedStatus" disabled={!allowedStatuses.length} onChange={onChange}>
                    {Options}
                </select>
            </td>
        </tr>
    );
};
