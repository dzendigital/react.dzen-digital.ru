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
  }

  render() {
    return (
      <ul className="uk-list">
        <li>
          Результат сбора данных формы:
        </li>
        <li>
          <span>Имя: </span>
          <span>{this.props.formResponse.name}</span>  
        </li>
        <li>
          <span>Вид услуги: </span>
          <span>{this.props.formResponse.subject}</span>  
        </li>
      </ul>
    );
  }
}

export default FormResponse;