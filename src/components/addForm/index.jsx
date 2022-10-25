import React, { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const item = {
    "title": "Назва",
    "desc": "",
    "color": "default",
    "date": new Date().toLocaleString().slice(0, 5),
    "status": ""
}

const addTask = (switchStatus, add) => {
    let data = {};
    Object.assign(data, item);
    switchStatus();
    add(data);
}

const formHandler = (e, switchStatus, add) => {
    e.preventDefault();

    if (e.target[0].name === "task") {
        item.title = e.target[0].value;
    }
    if (e.target[1].name === "description") {
        item.desc = e.target[1].value;
    }

    addTask(switchStatus, add);
    e.target.reset();
}

const dataHandler = (data, setDate) => {
    let date = new Date(data);
    item.date = date.toLocaleString().slice(0, 5);
    setDate(data);
}

function AddForm({ status, switchStatus, add }) {
    const [date, setDate] = useState(new Date());

    let classForm = "";
    if (status) {
        classForm = "active";
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }

    return (
        <div className={'addForm ' + classForm}
            onSubmit={(e) => { formHandler(e, switchStatus, add) }}>
            <div onClick={switchStatus} className="close"><HiX /></div>
            <form action="">
                <h2>Task</h2>
                <input type="text" placeholder='Task' name="task" />
                <h2>Description</h2>
                <textarea name="description" id="" cols="30" rows="10" placeholder='Description'></textarea>
                <h2>Data</h2>
                <DatePicker
                    selected={date}
                    onChange={(date) => dataHandler(date, setDate)} />

                <div className='addTask'>
                    <button className='button'>ADD TASK</button>
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
