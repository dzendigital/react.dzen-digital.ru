/**
 *
 * импорт для использовании в скрипте 
 * 
 */

import React from 'react';
import Button from './Button';

 /**
  *
  * определение компонента 
  * 
  */
 class Basket extends React.Component {
   constructor(props) {
     super(props);
   }
   render() {
     return (
        <div>
            <Button />
        </div>
     );
   }
 }
 
 export default Basket;