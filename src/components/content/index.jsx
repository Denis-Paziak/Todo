import React from 'react';
import Item from "../item";
import { connect } from 'react-redux';





function Content({ items, status, remove }) {
    let res = <h2>no data</h2>;

    if (items.length > 0) {
        res = items.map((item, i) => {
            return <Item
                key={i}
                item={item}
                itemStatus={item.status}
                status={() => { status(i) }}
                remove={() => { remove(i) }}
            />;
        });
    }


    return (
        <div className='content'>
            {res}
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.items,
});

const mapDispatchToProps = (dispatch) => {
    return {
        status: (id) => dispatch({ type: 'StatusItem', id: id }),
        remove: (id) => dispatch({ type: 'Remove', id: id }),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);
