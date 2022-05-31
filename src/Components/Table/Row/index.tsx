import * as React from 'react';

import type {AccountData} from '../../../types';

import {FilterStatus, Status as StatusConst} from '../../../constants';
import {useAppSelector, useAppDispatch} from '../../../store/hooks';
import {toggleIsOpen} from '../../../store/reducers/modal';
import {formatBalance} from '../../../helpers/formatBalance';
import {Status} from '../../shared/Status';
import {Button} from '../../shared/Button';

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
        <tr className="account-table-row">
            <td className="account-table-cell">{id}</td>
            <td className="account-table-cell">
                <div className="table-status-block">
                    <Status status={status} />
                    {allowedStatuses?.length > 0 && (
                        <Button className="change-button" onClick={onClick}>
                            Change
                        </Button>
                    )}
                    {status === StatusConst.funded && balance > 0 && (
                        <span className="funded-account-tip">
                            Funded account with balance can&apos;t be closed
                        </span>
                    )}
                </div>
            </td>
            <td className="account-table-cell balance-cell">{formatBalance(balance)}</td>
        </tr>
    );
};
