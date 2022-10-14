import React from 'react';
import { HiX } from 'react-icons/hi';
import Button from '../button';
import { connect } from 'react-redux';


const addTask = (switchStatus, add) => {
    switchStatus();
    add();
}

function AddForm({ status, switchStatus, add }) {

    let classForm;
    if (status) {
        classForm = "active";
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }

    return (
        <div className={'addForm ' + classForm}>
            <div onClick={switchStatus} className="close"><HiX /></div>
            <form action="">
                <h2>Task</h2>
                <input type="text" placeholder='Task' />
                <h2>Description</h2>
                <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea>
                <h2>Data</h2>
                <input type="text" placeholder='Data' />
                <h2>Time</h2>
                <input type="text" placeholder='Time' />

                <div className='addTask' onClick={() => { addTask(switchStatus, add) }} >
                    <Button value='Add task' />
                </div>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
