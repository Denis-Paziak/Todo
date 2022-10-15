import React from 'react';
import Item from "../item";
import { connect } from 'react-redux';



function Content({ items }) {
    let res = "no data";

    if (items.length > 0) {
        res = items.map((item, i) => {
            return <Item key={i} id={i} item={item} itemStatus={item.status} />;
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

export default connect(mapStateToProps, null)(Content);
