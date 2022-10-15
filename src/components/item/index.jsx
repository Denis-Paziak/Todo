import React from 'react';
import { connect } from 'react-redux';
import { HiCheck } from "react-icons/hi";


function Item({ item, status, id, itemStatus }) {
    const desc = item.desc.slice(0, 50) + " ...";
    return (
        <div className={'item ' + itemStatus} onClick={() => status(id)}>
            <div className="item__date">{item.date}</div>
            <div className="item__checkbox">
                <i> <HiCheck /> </i>
            </div>
            <div className="item__content">
                <h2 className="item__title">{item.title}</h2>
                <p className="item__desc">{item.desc}</p>
            </div>
            <p className="item__time">{item.time}</p>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        status: (id) => dispatch({ type: 'StatusItem', id: id }),
    }
}

export default connect(null, mapDispatchToProps)(Item);
