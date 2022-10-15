
let items = [

];

let init;
let data = JSON.parse(localStorage.getItem('data'));

if (localStorage.getItem('data') === null) {
    init = {
        "theme": "dark",
        "items": items,
        "addForm": false,
        "switchThemeStatus": false
    }
    localStorage.setItem('data', JSON.stringify(init));
} else {
    init = data;
}

function reducer(state = init, action) {
    switch (action.type) {
        case 'Add':
            return {
                ...state,
                "items": addItem(state.items, action.data)
            }
        case 'Remove':

            return {
                ...state,
                "items": remove(state.items, action.id)
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
            let data = JSON.parse(localStorage.getItem('data'));
            data.theme = action.theme;
            localStorage.setItem('data', JSON.stringify(data));
            return {
                ...state,
                "theme": action.theme,
                "switchThemeStatus": !state.switchThemeStatus
            }
        case 'StatusItem':
            console.log(state.items)
            return {
                ...state,
                items: statusItem(state.items, action.id),
            }
        default:
            return state
    }
}


const addItem = (state, item) => {
    let newData = state.slice(0);
    newData.push(item);

    let data = JSON.parse(localStorage.getItem('data'));
    data.items.push(item);

    localStorage.setItem('data', JSON.stringify(data));

    return newData;
}
const remove = (state, id) => {
    let newData = state.slice(0);
    newData.splice(id, 1);

    let data = JSON.parse(localStorage.getItem('data'));
    data.items.splice(id, 1);

    localStorage.setItem('data', JSON.stringify(data));

    return newData;
}

const statusItem = (state, id) => {
    let newData = [];
    Object.assign(newData, state);


    let data = JSON.parse(localStorage.getItem('data'));

    if (newData[id].status === "complete") {
        newData[id].status = "";
        data.items[id].status = "";
    } else {
        newData[id].status = "complete";
        data.items[id].status = "complete";
    }

    localStorage.setItem('data', JSON.stringify(data));

    return newData;
}

export default reducer;