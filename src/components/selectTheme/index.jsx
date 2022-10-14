import React from 'react';
import { connect } from 'react-redux';

function SelectTheme() {
    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        status: state.addForm
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        switchStatus: () => dispatch({ type: 'StatusAddForm' }),
        add: () => dispatch({ type: 'Add' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTheme);
