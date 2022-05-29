import {Status as StatusConst} from './constants';

export type Status = keyof typeof StatusConst;

export type FilterStatus = Status | 'all';

export type InitialAccountData = {balance: number; status: Status};

export type AccountData = {id: string; isVisible: boolean} & InitialAccountData;

export type AccountCollection = {
    [key: string]: {id: string; isVisible: boolean} & AccountData;
};

export type State = {
    collections: {
        accounts: AccountCollection;
    };
    filter?: FilterStatus;
};
