import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import './app/shared/styles.scss';
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas);
ReactDOM.render(<App />, document.getElementById('root'));