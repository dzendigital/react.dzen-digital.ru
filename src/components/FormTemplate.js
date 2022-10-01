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
    this.state = {
      name: '',
      subject: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
  }
  handleSubmit(e) 
  {
    console.log(e);
    e.preventDefault();
    /**
     * выполнение fetch запроса 
     */
  }
  handleName(event) {    
    this.setState(
      {
        name: event.target.value
      }
    );  
  }
  handleSubject(event) {    
    this.setState(
      {
        subject: event.target.value
      }
    );  
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <fieldset className="uk-fieldset">

                <legend className="uk-legend">{this.props.formTitle}</legend>

                <div className="uk-margin">
                    <input className="uk-input" type="text" placeholder="Ваш ник в tg" 
                           value={this.state.name} 
                           onChange={this.handleName}/> 
                </div>

                <div className="uk-margin">
                    <select className="uk-select" 
                            value={this.state.subject} 
                            onChange={this.handleSubject}>
                      <option>Новый заказ</option>
                      <option>Услуга доработки</option>
                    </select>
                </div>
                <input type="submit" value="Отправить" />
            </fieldset>
        </form>
    );
  }
}

export default FormTemplate;