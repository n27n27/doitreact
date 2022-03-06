import React, { Component } from 'react';

class Todolist extends Component {
    render() {
        const todoList = [
            { taskName: '빨래하기', finished: false },
            { taskName: '공부하기', finished: true},
        ];
        return (
            <div>
                {todoList.map((todo) => <div key={todo.taskName}>{String(todo.finished)}</div>)}
            </div>
        );
    }
}

export default Todolist;