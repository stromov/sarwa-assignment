import {nanoid} from 'nanoid';

import type {InitialAccountData, AccountData, StatusKeys} from '../types';
import {Status} from '../constants';
import {getAllowedStatuses} from './getAllowedStatuses';

export const processInitialData = (initialData: InitialAccountData[]) =>
    initialData.reduce((acc: Record<string, AccountData>, item) => {
        const id = nanoid(12);
        const status = Status[item.status as StatusKeys];
        item.status = status;
        acc[id] = {
            ...item,
            allowedStatuses: getAllowedStatuses(item),
            id,
        };
        return acc;
    }, {});
