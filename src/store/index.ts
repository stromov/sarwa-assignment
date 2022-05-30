import {configureStore} from '@reduxjs/toolkit';

import {reducer as filterReducer} from './reducers/filter';
import {reducer as accountsReducer} from './reducers/accounts';
import {reducer as modalReducer} from './reducers/modal';
import {reducer as sortTypeReducer} from './reducers/sortType';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        accounts: accountsReducer,
        modal: modalReducer,
        sortType: sortTypeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
