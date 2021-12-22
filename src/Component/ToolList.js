import React from 'react'
import Header from "./Header";
import TodoItem from "./TodoItem";
function ToDoList(props){
    const {title, items} = props;
    let arr = ['joker','sucker','asdasd'];
    return(
        <div className="todolist">
            <Header title={title}/>
            <ul className="list-unstyled">
                {items.map(item => <TodoItem key={item.id} data={item}/>)}
            </ul>
            <ul className="list-unstyled">
                {arr.map(function (index,value) {
                    return <li key={index}>{arr[value]}</li>
                })}
            </ul>
        </div>
    );
}
export default ToDoList;