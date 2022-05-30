import React from 'react';
import ReactModal from 'react-modal';

import type {Status as StatusType} from '../../types';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {toggleIsOpen, setSelectedStatus, setIsPending} from '../../store/reducers/modal';
import {setStatus} from '../../store/reducers/accounts';
import {fakePutResolver} from '../../fakePutResolver';
import {Status} from '../Status';
import {Button} from '../Button';
import {CloseIcon} from './CloseIcon';

import './index.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
        width: '360px',
        height: '344px',
    },
    overlay: {
        background: 'rgba(0, 0, 0, 0.47)',
    },
};

ReactModal.setAppElement('#root');

export const Modal = () => {
    const {isOpen, accountId, selectedStatus, isPending} = useAppSelector(state => state.modal);
    const account = useAppSelector(state => state.accounts[accountId as string]);
    const dispatch = useAppDispatch();

    const onRequestClose = () => {
        dispatch(toggleIsOpen({}));
    };

    const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedStatus({status: event.target.value as StatusType}));
    };

    const onStatusChange = () => {
        if (accountId && selectedStatus) {
            dispatch(setIsPending());
            fakePutResolver(() => {
                dispatch(setStatus({id: accountId, status: selectedStatus}));
                onRequestClose();
            });
        }
    };

    const Options = [
        <option value="default" key="default" selected disabled hidden>
            Select new status
        </option>,
        account?.allowedStatuses?.map(allowedStatus => (
            <option key={allowedStatus} value={allowedStatus}>
                {allowedStatus}
            </option>
        )),
    ];
    console.log(isPending);
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Account status"
        >
            <div className="modal-content-container">
                <div className="modal-top">
                    <span className="modal-title">Change status</span>
                    <button
                        type="button"
                        className="modal-close-icon"
                        onClick={onRequestClose}
                        disabled={isPending}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <span className="modal-account-subtitle">Account</span>
                <div className="modal-account-info">
                    <span>{account?.id}</span>
                    <Status status={account?.status} />
                </div>
                <label htmlFor="change-status" className="modal-select-label">
                    Change to
                </label>
                <select
                    id="change-status"
                    name="status"
                    className="modal-select"
                    onChange={onFilterChange}
                >
                    {Options}
                </select>
                <div className="modal-buttons-container">
                    <Button
                        disabled={!selectedStatus || isPending}
                        onClick={onStatusChange}
                        className={`modal-change-button${
                            !selectedStatus || isPending ? ' modal-change-button-disabled' : ''
                        }`}
                    >
                        Change
                    </Button>
                    <Button
                        onClick={onRequestClose}
                        className="modal-cancel-button"
                        disabled={isPending}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </ReactModal>
    );
};
