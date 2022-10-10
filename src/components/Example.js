import React, { useState, useEffect, useContext } from 'react';
import './Card.css';

export function Example(props) {
  const [count, setCount] = useState(1)
  const [deleted, setDeleted] = useState(0)

  useEffect(() => {
    if (count > 0) {
      recoverbtn = '';
      setDeleted(0)
    }
    if (count == 0) {
      deletebtn = '';
      setDeleted(1)
    }
    if (count < 0) {
      deletebtn = '';
      setCount(0)
    }
  },[count])

  useEffect(() => {
    if ( deleted == 1 ) {
      deletebtn = '';
      setCount(0)
    }else {
      recoverbtn = '';
      setCount(1)
    }
  },[deleted]);

  let deletebtn = '';
  let recoverbtn = '';
  let minusbtn = <button className='uk-button uk-button-default' onClick={() => setCount(count - 1)}> - </button>;

  if (deleted == 0 && count > 0) {
    deletebtn = <button className='uk-button uk-button-danger' onClick={() => setDeleted(1)}>Удалить</button>;
  }
  if (deleted == 1 || count == 0) {
    recoverbtn = <button className='uk-button uk-button-primary' onClick={() => setDeleted(0)}>Восстановить</button>;
    minusbtn = <button disabled className='uk-button uk-button-default' onClick={() => setCount(count - 1)}> - </button>;
  }


  return (
    <div className='card'>
        <div>
          <p>
            {props.title}
          </p>
          {deletebtn}
          {recoverbtn}
        </div>
        <div>
          <p>Количество {count}</p>
          <button className='uk-button uk-button-default' onClick={() => setCount(count + 1)}>
            +
          </button>
          {minusbtn}
        </div>
    </div>
  );

}


export default Example;