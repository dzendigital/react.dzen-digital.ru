/**
 *
 * импорт для использовании в скрипте 
 * 
 */
import React from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import styles from './FormTemplate.css';
/**
 *
 * определение компонента 
 * 
 */
class FormTemplate extends React.Component {

  render() {
    return (
        <form>
            <fieldset className="uk-fieldset">
                <legend className="uk-legend">
                  Форма отправки
                </legend>
                <div className="uk-margin">
                    <input className="uk-input" 
                           type="text" 
                           placeholder="Ваш ник в tg" /> 
                </div>
                <div className="uk-margin">
                    <select className="uk-select">
                      <option>Новый заказ</option>
                      <option>Обратная связь</option>
                    </select>
                </div>
                <input type="submit" value="Отправить" />
            </fieldset>
        </form>
    );
  }
}

export default FormTemplate;