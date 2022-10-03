/**
 *
 * импорт для использовании в скрипте 
 * 
 */
import React from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// import '/node_modules/uikit/dist/css/uikit.min.css';
import styles from './Form.css';

import FormTemplate from './FormTemplate.js';

/**
 *
 * определение компонента 
 * 
 */
class Form extends React.Component {
  constructor(props) 
  {
    super(props);     
  }
  render() 
  {
    return (
      <div>
        <FormTemplate />              
      </div>
    );
  }
}


export default Form;