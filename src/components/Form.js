/**
 *
 * импорт для использовании в скрипте 
 * 
 */
import React from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import styles from './Form.css';

import FormTemplate from './FormTemplate.js';
import FormResponse from './FormResponse.js';

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
      isResponseRecived: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }


  handleSubmit(e) 
  {
    console.log(e);
    e.preventDefault();
    /**
     * выполнение fetch запроса 
     */
    console.log(this.state);
    this.handleResponse();
    // this.handleSubject = this.handleSubject.bind(this);
  }
  handleResponse()
  {
    this.setState(
      {
        isResponseRecived: true
      }
    );
  }

  render() 
  {
    console.log("tick");
    const isResponseRecived = this.state.isResponseRecived;
    let formResponse = "";
    if (isResponseRecived) 
    {      
      formResponse = <FormResponse />;    
    } 
    return (
      <div>
        <FormTemplate formTitle="Форма обратной связи" onSubmit={this.handleSubmit}/>        
        {formResponse}      
      </div>
    );
  }
}


export default Form;