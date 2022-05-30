import {createSlice} from '@reduxjs/toolkit';

import type {SortTypeType} from '../../types';
import {SortType} from '../../constants';

const initialState: {value: SortTypeType} = {value: SortType.desc};

export const sortType = createSlice({
    name: 'sortType',
    initialState,
    reducers: {
        toggleSortType: state => {
            state.value = state.value === SortType.desc ? SortType.asc : SortType.desc;

            return state;
        },
    },
});

export const {toggleSortType} = sortType.actions;

export const {reducer} = sortType;
