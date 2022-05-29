import {nanoid} from 'nanoid';

import type {InitialAccountData, State} from '../types';

export const processInitialData = (initialData: InitialAccountData[]): State =>
    initialData.reduce(
        (acc, item) => {
            const id = nanoid(6);
            acc.collections.accounts[id] = {
                ...item,
                id,
                isVisible: true,
            };

            return acc;
        },
        {collections: {accounts: {}}, filter: 'all'} as State,
    );
