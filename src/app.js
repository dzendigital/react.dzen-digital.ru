/**
 *
 * импортируем нужные для проекта библиотеки 
 * 
 */
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Form from './components/Form.js';
import Example from './components/Example.js';
import Button from './components/Button';
import '/node_modules/uikit/dist/css/uikit.min.css';
import Basket from './components/Basket.js';


/**
 *
 * импортируем компоненты react 
 * 
 */

const example = ReactDOM.createRoot(document.getElementById('Burger'));
const basket = ReactDOM.createRoot(document.getElementById('Form'))
// const form = ReactDOM.createRoot(document.getElementById('Form'));
// const form1 = ReactDOM.createRoot(document.getElementById('Form1'));
// example.render(React.createElement(Example, null, null));
basket.render(React.createElement(Basket, null, null));
// form.render(React.createElement(Form, {formTitle:'Форма обратной связи'}, null));
// form1.render(React.createElement(Form, {formTitle:'Форма записи'}, null));
