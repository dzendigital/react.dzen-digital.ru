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
form.render(React.createElement(Form, {formTitle:'Форма обратной связи'}, null));


