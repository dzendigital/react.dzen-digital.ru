/**
 *
 * импорт для использовании в скрипте 
 * 
 */
import React from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import styles from './FormError.css';
/**
 *
 * определение компонента 
 * 
 */
class FormError extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    // формируем валидационное сообщение с сервера
    let messages = "";
    for (let m of this.props.data.errorRequestMessages)
    {
      messages += "<li>" + m + "</li>";
    }
    // для рендера html в компонент 
    // используйте синтаксис https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
    messages = <li data-component="clientError">Сообщения от сервера: <ul className="uk-list" dangerouslySetInnerHTML={{__html: messages}}></ul></li>;

    
    return (
      <ul className="uk-list">
        <li>
          Во время отправки формы произошла ошибка:
        </li>
        {messages}
      </ul>
    );
  }
}

export default FormError;