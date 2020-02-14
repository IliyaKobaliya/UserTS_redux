import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './components/app';
import { store } from './store'

const renderApp = () => <Provider store={store}><App /></Provider>;;

const root = document.getElementById('root');
render(renderApp(), root);