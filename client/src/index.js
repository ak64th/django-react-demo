/* global Urls */
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.jsx';

const basePath = Urls['blog_entry']();

render(
    <BrowserRouter basename={basePath}><App/></BrowserRouter>,
    document.getElementById('app')
);
