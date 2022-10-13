import React from 'react';
import Item from "../item";


const data = {
    "theme": "dark",
    "items": [
        {
            "id": 0,
            "title": "Lesson 1",
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
        {
            "id": 4,
            "title": "Lesson 3",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, vitae?",
            "color": "default",
            "time": "12:11",
            "date": "15 DEC",
            "status": "false"
        },
        {
            "id": 5,
            "title": "Lesson 3",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, vitae?",
            "color": "default",
            "time": "12:11",
            "date": "15 DEC",
            "status": "false"
        },
        {
            "id": 6,
            "title": "Lesson 3",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, vitae?",
            "color": "default",
            "time": "12:11",
            "date": "15 DEC",
            "status": "false"
        },
    ]
}

export default function Content() {

    const res = data.items.map((item) => {
        return <Item key={item.id} data={item} />;
    });

    return (
        <div className='content'>
            {res}
        </div>
    )
}
