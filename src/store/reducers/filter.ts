import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import type {FilterStatus as FilterStatusType} from '../../types';
import {FilterStatus} from '../../constants';

const initialState: {value: FilterStatusType} = {value: FilterStatus.all};

export const filter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<{status: FilterStatusType}>) => {
            state.value = action.payload.status;

            return state;
        },
    },
});

export const {setFilter} = filter.actions;

export const {reducer} = filter;
