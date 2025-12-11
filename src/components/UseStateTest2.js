import { useState } from 'react';

export default function Color(){
    const [color, setColor] = useState('Red');
    const changeColor = (c) => { setColor(c) }; //color = 'Green' 처럼 접근은 불가
    console.log(color);
    
    return (
        <div className='colorgroup'>
            <h3>Color is {color}</h3>
            <button type='button' onClick={() => changeColor('Red')}>Red</button>
            <button type='button' onClick={() => setColor('Blue')}>Blue</button>
        </div>
    )
}