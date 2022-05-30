import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import type {Status} from '../../types';

type ModalState = {
    isOpen: boolean;
    accountId?: string;
    selectedStatus?: Status;
};

const initialState: ModalState = {isOpen: false};

export const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleIsOpen: (state, action: PayloadAction<{accountId?: string}>) => {
            const {
                payload: {accountId},
            } = action;

            if (accountId) {
                state.accountId = accountId;
            }

            state.isOpen = !state.isOpen;

            return state;
        },
        setSelectedStatus: (state, action: PayloadAction<{status: Status}>) => {
            const {
                payload: {status},
            } = action;

            state.selectedStatus = status;

            return state;
        },
    },
});

export const {toggleIsOpen, setSelectedStatus} = modal.actions;

export const {reducer} = modal;
