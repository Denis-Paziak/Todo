import React from 'react';
import { HiCheck } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";



function Item({ item, itemStatus, status, remove }) {

    const desc = item.desc.slice(0, 50) + " ...";

    return (
        <div className={'item ' + itemStatus} >
            <div className="item__date">{item.date}</div>
            <div className="item__checkbox" onClick={status}>
                <i> <HiCheck /> </i>
            </div>
            <div className="item__content">
                <h2 className="item__title">{item.title}</h2>
                <p className="item__desc">{desc}</p>
            </div>
            {/* <p className="item__time">{item.time}</p> */}
            <AiFillDelete className='delete' onClick={remove} />
        </div>
    )
}


export default Item;
