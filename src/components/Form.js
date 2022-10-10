/**
 *
 * импорт для использовании в скрипте 
 * 
 */
import React from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import './Form.css';

import FormTemplate from './FormTemplate.js';
import FormResponse from './FormResponse.js';
import Example from './Example';

/**
 *
 * определение компонента 
 * 
 */
export const TestContext = React.createContext('Пример карточки в корзине');
class Form extends React.Component {
  constructor(props) 
  {
    super(props);
    
    this.state = {
      isResponseRecived: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    
  }


  handleSubmit(state) 
  {
    this.handleResponse(state);
    // e.preventDefault();
    /**
     * выполнение fetch запроса 
     */
  }
  handleResponse(state)
  {
    this.setState(
      {
        formData: state,
        isResponseRecived: true
      }
    );
  }

  render() 
  {
    
    const isResponseRecived = this.state.isResponseRecived;
    let formResponse = "";
    if (isResponseRecived) 
    {      
      formResponse = <FormResponse formResponse={this.state.formData}/>;
    }
    return (
      <div>
        <TestContext.Provider value='MobilePhone'>
          <FormTemplate formTitle={this.props.formTitle} onSubmit={this.handleSubmit} />   
          <Example /> 
        </TestContext.Provider>    
        {formResponse}
      </div>
    );
  }
}


export default Form;