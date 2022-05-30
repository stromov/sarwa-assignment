import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import type {Status, InitialAccountData} from '../../types';
import accountsMock from '../../../mocks/accounts.json';
import {processInitialData} from '../../helpers/processInitialData';

import {getAllowedStatuses} from '../../helpers/getAllowedStatuses';

const initialState = processInitialData(accountsMock as InitialAccountData[]);

export const accounts = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        setStatus: (state, action: PayloadAction<{id: string; status: Status}>) => {
            const {id, status} = action.payload;
            const item = state[id];

            if (item) {
                item.status = status;
                item.allowedStatuses = getAllowedStatuses(item);
            }

            return state;
        },
    },
});

export const {setStatus} = accounts.actions;

export const {reducer} = accounts;
