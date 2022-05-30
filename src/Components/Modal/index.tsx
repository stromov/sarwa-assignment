import React from 'react';
import ReactModal from 'react-modal';

import {Status} from '../../types';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {toggleIsOpen, setSelectedStatus} from '../../store/reducers/modal';
import {setStatus} from '../../store/reducers/accounts';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
    },
    overlay: {
        background: 'rgba(0, 0, 0, 0.47)',
    },
};

ReactModal.setAppElement('#root');

export const Modal = () => {
    const {isOpen, accountId, selectedStatus} = useAppSelector(state => state.modal);
    const account = useAppSelector(state => state.accounts[accountId as string]);
    const dispatch = useAppDispatch();

    const onRequestClose = () => {
        dispatch(toggleIsOpen({}));
    };

    const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedStatus({status: event.target.value as Status}));
    };

    const onStatusChange = () => {
        if (accountId && selectedStatus) {
            dispatch(setStatus({id: accountId, status: selectedStatus}));
        }
        onRequestClose();
    };

    const Options = [
        <option value="default" key="default" selected disabled hidden />,
        account?.allowedStatuses?.map(allowedStatus => (
            <option key={allowedStatus} value={allowedStatus}>
                {allowedStatus}
            </option>
        )),
    ];
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Account status"
        >
            <div>{account?.id}</div>
            <div>{account?.status}</div>
            <select id="status" name="status" onChange={onFilterChange}>
                {Options}
            </select>
            <button type="button" disabled={!selectedStatus} onClick={onStatusChange}>
                Change
            </button>
            <button type="button" onClick={onRequestClose}>
                Cancel
            </button>
        </ReactModal>
    );
};
