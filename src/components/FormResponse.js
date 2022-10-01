/**
 *
 * импорт для использовании в скрипте 
 * 
 */
import React from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import styles from './FormResponse.css';
/**
 *
 * определение компонента 
 * 
 */
class FormResponse extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.state);
  }

  render() {
    return (
      <ul className="uk-list">
        <li>
          <span></span>  
          <span></span>  
        </li>
        <li></li>
        <li></li>
      </ul>
    );
  }
}

export default FormResponse;