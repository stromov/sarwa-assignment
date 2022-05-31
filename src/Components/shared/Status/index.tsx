import * as React from 'react';

import type {Status as StatusType} from '../../../types';

import './index.css';

export const Status = ({status}: {status: StatusType}) => (
    <div className={`status-container status-container-${status}`}>{status}</div>
);
