import {AccountData} from '../types';
import {Status} from '../constants';

export const getAllowedStatuses = (account: AccountData) => {
    const {status, balance} = account;

    if (status === Status.pending) {
        return [Status.approved, Status.closed];
    }

    if (status === Status.approved) {
        return [Status.funded, Status.closed];
    }

    if (status === 'funded' && balance === 0) {
        return [Status.closed];
    }

    return [];
};
