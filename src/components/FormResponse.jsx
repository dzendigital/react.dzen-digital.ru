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
    // формируем валидационное сообщение с сервера
    let successMessages = "";
    if ( this.props.formResponse.successRequestMessages != null )
    {
      for (let m of this.props.formResponse.successRequestMessages)
      {
        successMessages += "<li>" + m + "</li>";
      }
      // для рендера html в компонент 
      // используйте синтаксис https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
      successMessages = <li data-component="serverMessages">Сообщения от сервера: <ul className="uk-list" dangerouslySetInnerHTML={{__html: successMessages}}></ul></li>;
    } 

    
    return (
      <ul className="uk-list">
        <li>
          Результат сбора данных формы:
        </li>
        {successMessages}

        <li data-component="userData">
          <ul className="uk-list">
            <li>
              <span>Пользовательские данные:</span>  
            </li>
            <li>
              <span>Имя: </span>
              <span>{this.props.formResponse.formData.name}</span>  
            </li>
            <li>
              <span>Вид услуги: </span>
              <span>{this.props.formResponse.formData.subject}</span>  
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default FormResponse;