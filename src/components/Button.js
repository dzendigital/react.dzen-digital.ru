import React, { useState, useEffect, useContext, useRef } from 'react';
import Example from './Example';

export const cart = React.createContext('');
export function Button () {
    const [value, setItems] = useState(['Пример карточки'])
    const [inputValue, setInput] = useState('')

    const handleClick = () => {
        setItems(current => [...current, inputValue]);
    };


    let button = <button className='uk-button uk-button-default' onClick={handleClick}>Добавить товар в корзину</button>;

    return (
        
        <div>
            <input className='uk-input' placeholder='Введите название товара' onChange={(event) => setInput(event.target.value)}/>
            {button}

                {value.map((element, index) => {
                    return (
                        <div key={index}>
                            <Example title={element} />
                        </div>
                    );
                })}
                
        </div>

    )

}

export default Button