/**
 *
 * импорт для использовании в скрипте 
 * 
 */
import React, { useState, useEffect, useContext } from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import './FormTemplate.css';
import { TestContext } from './Form';
/**
 *
 * определение компонента 
 * 
 */
class FormTemplate extends React.Component {
  // static contextType = TestContext;
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
  componentDidMount () {
    console.log('componentDidMount');
  }
  componentDidUpdate () {
    console.log('componentDidUpdate');
  }
  componentWillUnmount () {
    console.log('componentWillUnmount');
  }
  // UNSAFE_componentWillReceiveProps () 
  // {
  //   if (this.state.name.length > 3) {
  //     this.setState(
  //       {
  //         messeage: this.state.name
  //       }
  //     );
  //   }else {
  //     this.setState(
  //       {
  //         messeage: 'Недопустимое количество '
  //       }
  //     );
  //   }
  // }
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
    // console.log(contextType);
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
                <div>
                    {/* {this.context} */}
                    {this.state.messeage}
                </div>
                <input type="submit" value="Отправить" />
            </fieldset>
        </form>
    );
  }
}

export default FormTemplate;