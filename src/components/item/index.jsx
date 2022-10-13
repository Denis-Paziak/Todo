import React from 'react';

export default function Item({ data }) {
    const desc = data.desc.slice(0, 50) + " ...";
    return (
        <div className='item'>
            <div className="item__date">{data.date}</div>
            <div className="item__checkbox"></div>
            <div className="item__content">
                <h2 className="item__title">{data.title}</h2>
                <p className="item__desc">{desc}</p>
            </div>
            <p className="item__time">{data.time}</p>
        </div>
    )
}
