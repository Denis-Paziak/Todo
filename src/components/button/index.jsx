import React from 'react'

const def = (e) => {
    e.preventDefault();
}

export default function Button({ value = "but" }) {
    return (
        <input type="submit" value={value} className='button' onClick={def} />
    )
}
