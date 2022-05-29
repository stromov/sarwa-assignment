import {createElement} from 'react';
import * as ReactDOM from 'react-dom/client';

import {App} from './Components/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(createElement(App));
