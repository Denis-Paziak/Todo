import React from 'react';
import { connect } from 'react-redux';

function Item({ item, add }) {
    // const desc = item.desc.slice(0, 50) + " ...";

    return (
        <div className='item' onClick={() => add(item.id)}>
            <div className="item__date">{item.date}</div>
            <div className="item__checkbox"></div>
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
        add: (id) => dispatch({ type: 'Add', id: id }),
    }
}

export default connect(null, mapDispatchToProps)(Item);
