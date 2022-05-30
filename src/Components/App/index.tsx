import * as React from 'react';
import {Provider} from 'react-redux';

import {Table} from '../Table';
import {Statistics} from '../Statistics';
import {Modal} from '../Modal';
import {store} from '../../store';

import './index.css';
import 'normalize.css/normalize.css';

export const App = () => (
    <Provider store={store}>
        <div className="app">
            <span className="title">Accounts</span>
            <Statistics />
            <Table />
            <Modal />
        </div>
    </Provider>
);
