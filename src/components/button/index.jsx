import React from 'react'

const def = (e) => {
    e.preventDefault();
}

export default function Button({ value = "but" }) {
    return (
        <button onClick={def} className='button'>{value}</button>
    )
}
