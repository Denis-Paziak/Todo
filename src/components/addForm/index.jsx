import React from 'react';
import { HiX } from 'react-icons/hi';
import Button from '../button';
import { connect } from 'react-redux';

const item = {
    "id": 0,
    "title": "Назва",
    "desc": "Опис",
    "color": "default",
    "time": "",
    "date": "Сьогодні",
    "status": "false"
}


const addTask = (switchStatus, add) => {
    switchStatus();
    add(item);
    console.log(item)
}

const taskHandler = (e) => {
    item.title = e.target.value;
}
const descHandler = (e) => {
    item.desc = e.target.value;
}
const dataHandler = (e) => {
    item.date = e.target.value;
}
const timeHandler = (e) => {
    item.time = e.target.value;
}


function AddForm({ status, switchStatus, add }) {

    let classForm = "";
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
                <input onChange={taskHandler} type="text" placeholder='Task' name="task" />
                <h2>Description</h2>
                <textarea onChange={descHandler} name="Description" id="" cols="30" rows="10" placeholder='Description'></textarea>
                <h2>Data</h2>
                <input onChange={dataHandler} type="text" placeholder='Data' name='data' />
                <h2>Time</h2>
                <input onChange={timeHandler} type="text" placeholder='Time' name='time' />

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
        add: (data) => dispatch({ type: 'Add', data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
