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

import FormTemplate from './FormTemplate.jsx';
import FormResponse from './FormResponse.jsx';
import FormError from './FormError.jsx';

/**
 *
 * определение компонента 
 * 
 */
class Form extends React.Component {
  constructor(props) 
  {
    super(props);   
    this.state = {
      isResponseRecived: false,
      isFormValidationFail: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);  
  }
  handleSubmit(state) 
  {

    let app = this;
    // валидация данных
    if ( state.name.length == 0 || state.subject.length == 0  ) {
      // в случае если отправлена пустая форма мы отобразим компонент с ошибкой
      let response = {
        isFormValidationFail: true,
        errorRequestMessages: ["В форме отправлены пустые поля."],
        request: state,
      };
      this.handleFormValidationError(response);
      return;
    } 

    // создание объекта FormData, добавление полей state
    var postData = new FormData();
    postData.append('name', state.name);
    postData.append('subject', state.subject);

    // выполнение запроса к бэкэнд, обработка результата
    fetch("/api/form/store.php", {
        method: 'POST',
        body: postData
    })
    .then(response => response.json())
    .then(function (result) {
        let data = {};
        switch (result['status']) {
          case 1:
            data = {
              successRequestMessages: result["messages"],
              request: result["request"],
            };
            app.handleResponse(data);
          break;
          default:
            data = {
              errorRequestMessages: result["messages"],
              request: result["request"],
            };
            app.handleFormValidationError(data);
            // запрос с ошибкой
          break;
        } 
    });
    return;
    // e.preventDefault();
    /**
     * выполнение fetch запроса 
     */
  }
  handleResponse(data)
  {
    this.setState(
      {
        formData: data.request,
        successRequestMessages: data.successRequestMessages,
        isResponseRecived: true,
        isFormValidationFail: false,
        errorRequestMessages: [],
      }
    );
  }
  handleFormValidationError(data)
  {
    this.setState(
      {
        isFormValidationFail: true,
        formData: data.request,
        errorRequestMessages: data.errorRequestMessages,
        successRequestMessages: [],
      }
    );
  }
  render() 
  {
    var formResponse = "";
    if (this.state.isResponseRecived) 
    {      
      formResponse = <FormResponse formResponse={this.state}/>;    
    }

    if (this.state.isFormValidationFail) 
    {      
      formResponse = <FormError data={this.state}/>;    
    }
    return (
      <div>
        <FormTemplate formTitle={this.props.formTitle} onSubmit={this.handleSubmit} />        
        {formResponse}      
      </div>
    );
  }
}


export default Form;