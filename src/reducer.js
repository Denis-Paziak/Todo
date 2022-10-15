
let items = [
    {
        "id": 0,
        "title": "aaa 1",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, vitae?",
        "color": "default",
        "time": "12:11",
        "date": "11 DEC",
        "status": "false"
    },
    {
        "id": 2,
        "title": "House works",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, vitae?",
        "color": "default",
        "time": "12:11",
        "date": "11 DEC",
        "status": "false"
    },
    {
        "id": 3,
        "title": "Lesson 3",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, vitae?",
        "color": "default",
        "time": "12:11",
        "date": "15 DEC",
        "status": "false"
    },

];

// items = JSON.stringify(items);
// localStorage.setItem('data', items);
// const data = JSON.parse(localStorage.getItem('data'));

const init = {
    "theme": "dark",
    "items": items,
    "addForm": false,
    "switchThemeStatus": false
};

function reducer(state = init, action) {
    switch (action.type) {
        case 'Add':
            action.data.id = state.items.length + 1;
            return {
                ...state,
                "items": addItem(state.items, action.data)
            }
        case 'StatusAddForm':
            return {
                ...state,
                "addForm": !state.addForm
            }
        case 'StatusSwitchTheme':
            return {
                ...state,
                "switchThemeStatus": !state.switchThemeStatus
            }
        case 'Theme':
            return {
                ...state,
                "theme": action.theme,
                "switchThemeStatus": !state.switchThemeStatus
            }
        default:
            return state
    }
}


const addItem = (state, item) => {
    let newData = state;
    newData.push(item);
    return newData;
}

export default reducer;