import React from 'react';
import KanbanBoard from './KanbanBoard';
import ReactDOM from 'react-dom';

let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the book",
        color: '#BD8D31',
        status: "in-progress",
        tasks: []
    }, {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples ... at [github](https://github.com/pro-react)",
        color: '#3A7E28',
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            }, {
                id: 2,
                name: "Kanban Example",
                done: false
            }, {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    }
];
ReactDOM.render(
    <KanbanBoard cards={cardsList}/>, document.getElementById('root'));
