import {Status as StatusConst, FilterStatus as FilterStatusConst} from './constants';

export type StatusKeys = keyof typeof StatusConst;

export type Status = typeof StatusConst[StatusKeys];

type FilterStatusKeys = keyof typeof FilterStatusConst;

export type FilterStatus = typeof FilterStatusConst[FilterStatusKeys];

export type InitialAccountData = {balance: number; status: Status};

export type AccountData = {id: string; allowedStatuses: Status[]} & InitialAccountData;

export type AccountCollection = {
    [key: string]: {id: string; allowedStatuses: Status[]} & AccountData;
};

export type State = {
    collections: {
        accounts: AccountCollection;
    };
    filter?: FilterStatus;
};
