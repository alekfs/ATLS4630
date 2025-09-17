import './button.css'
import { useState } from 'react';

type ButtonProps = {
    isSpecial: boolean;
    text: string;
};

export default function Button({ isSpecial, text }: ButtonProps) {
    const [ count, setCount ] = useState(0);

    let className = '';
    if (isSpecial) {
        className = 'specialButton';
    } else {
        className = 'normalButton';
    }

    function handleClick() {
        // console.log(`${text} was clicked`);
        setCount(count + 1);
    }

    return (
        <button
        className='myButton'
        onClick={handleClick}
        >
        {text}
        </button>
    )
}