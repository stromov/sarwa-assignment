import * as React from 'react';

import type {AccountData} from '../../../types';

import {FilterStatus} from '../../../constants';
import {useAppSelector, useAppDispatch} from '../../../store/hooks';
import {toggleIsOpen} from '../../../store/reducers/modal';
import {formatBalance} from '../../../helpers/formatBalance';

type Props = {
    account: AccountData;
};

export const Row = ({account}: Props) => {
    const {status, id, balance, allowedStatuses} = account;
    const filter = useAppSelector(state => state.filter.value);
    const dispath = useAppDispatch();

    if (filter !== FilterStatus.all && filter !== status) {
        return null;
    }

    const onClick = () => {
        dispath(toggleIsOpen({accountId: id}));
    };

    return (
        <tr>
            <td>{id}</td>
            <td>
                <div className="table-status-block">
                    <div className={`table-status-container table-status-container-${status}`}>
                        {status}
                    </div>
                    {allowedStatuses?.length > 0 && (
                        <button type="button" className="change-button" onClick={onClick}>
                            Change
                        </button>
                    )}
                </div>
            </td>
            <td className="balance-cell">{formatBalance(balance)}</td>
        </tr>
    );
};
