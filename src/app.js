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


/**
 *
 * импортируем компоненты react 
 * 
 */

const form = ReactDOM.createRoot(document.getElementById('Form'));
const form1 = ReactDOM.createRoot(document.getElementById('Form1'));
form.render(React.createElement(Form, {formTitle:'Форма обратной связи'}, null));
form1.render(React.createElement(Form, {formTitle:'Форма записи'}, null));