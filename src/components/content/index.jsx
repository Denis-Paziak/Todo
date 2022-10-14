import React from 'react';
import Item from "../item";
import { connect } from 'react-redux';



function Content({ state }) {
    const res = state.items.map((item) => {
        return <Item key={item.id} item={item} />;
    });

    return (
        <div className='content'>
            {res}
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, null)(Content);
