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
        <FormTemplate formTitle={this.props.formTitle} onSubmit={this.handleSubmit} />        
        {formResponse}      
      </div>
    );
  }
}


export default Form;