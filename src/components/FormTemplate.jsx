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
    constructor(props) {
        super(props);
        /**
         * определяем текущий state
         * такой синтаксис только в конструкторе компонента
         */
        this.state = {
          name: '',
          subject: ''
        };
        /**
         * привязываем контекст компонента к функции
         */
        this.handleName = this.handleName.bind(this);
        this.handleSubject = this.handleSubject.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) 
    {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }
    handleName(e) {    
        this.setState(
          {
            name: e.target.value
          }
        );  
    }
    handleSubject(e) {    
        this.setState(
          {
            subject: e.target.value
          }
        );  
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset className="uk-fieldset">
                    <legend className="uk-legend">
                      Форма отправки
                    </legend>
                    <div className="uk-margin">
                        <input className="uk-input" 
                               type="text" 
                               placeholder="Ваш ник в tg" 
                               value={this.state.name} 
                               onChange={this.handleName}/> 
                    </div>
                    <div className="uk-margin">
                        <select className="uk-select"
                                value={this.state.subject} 
                                onChange={this.handleSubject}>
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