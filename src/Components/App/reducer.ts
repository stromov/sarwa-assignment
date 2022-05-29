import type {State, Status, FilterStatus} from '../../types';

type Action =
    | {type: 'filter'; payload: {filter: FilterStatus}}
    | {type: 'change-status'; payload: {status: Status; id: string}};

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'filter': {
            const filterToApply = action.payload.filter;
            const newState = {...state};
            const keys = Object.keys(state.collections.accounts);

            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const item = state.collections.accounts[key];

                if (filterToApply === 'all' || filterToApply === item.status) {
                    newState.collections.accounts[key] = {...item, isVisible: true};
                } else {
                    newState.collections.accounts[key] = {...item, isVisible: false};
                }
            }

            newState.filter = action.payload.filter;

            return newState;
        }
        case 'change-status': {
            const item = state.collections.accounts[action.payload.id];
            item.status = action.payload.status;

            if (state.filter !== 'all' && state.filter !== item.status) {
                item.isVisible = false;
            }

            return {...state, [action.payload.id]: item};
        }
        default:
            return state;
    }
};
