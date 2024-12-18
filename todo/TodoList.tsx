import React, { useEffect } from "react";
import { useState } from 'react';

const TodoList = () => {

    // 配列の初期設定
    const initialState = [
        {
            task: 'Learn vue.js',
            isCompleted: false
        },
        {
            task: 'Learn React Hook',
            isCompleted: false
        },
        {
            task: 'Learn Gatsby.js',
            isCompleted: false
        },     
    ]

    // todoリストの配列
    const [todos, setTodos] = useState(initialState);

    // 追加用の配列
    const [task, setTask] = useState('');

    useEffect(() => {
        // localStorageをロードし、todoに保存
        const temp = localStorage.getItem("keepTodo");
        let loadedTodo:any;

        if(temp){
            loadedTodo = JSON.parse(temp);
        }else{
            loadedTodo=[];
        }
        
        if (loadedTodo) {
            setTodos([...loadedTodo])
            // console.log("ifload");
        }
        console.log("load");
        console.log(temp);
        console.log(loadedTodo);
        console.log(todos);
    }, []);
    
    useEffect(() => {
        // localStorageに保存
        const temp = JSON.stringify(todos);
        localStorage.setItem("keepTodo", temp);
        console.log("save");
        // console.log(temp);
    }, [todos]);

    // 入力用のイベント
    const handleNewTask = (event:any) => {
        setTask(event.target.value)
    }

    // 新規タスク追加用のイベント
    const handleSubmit = (event:any) => {
        event.preventDefault()
        if(task === '') return
        setTodos(todos => [...todos,{ task, isCompleted: false}])
        setTask('')
    }

    // タスク削除用のイベント
    const handleRemoveTask = (index:any) => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

    // タスク更新用のイベント
    const handleUpdateTask = (index:any) => {
        let newTodos = todos.map((todo,todoIndex) => {
            if(todoIndex  === index){
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        })
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <form onSubmit={handleSubmit}>
            Add Task : 
            <input placeholder="Add New Task" onChange={handleNewTask} />
            <button type="submit"onClick={() => {
                // const temp = JSON.stringify(todos);
                // localStorage.setItem("keepTodo", temp);
                // console.log("save");
                // console.log(temp);
            }}>Add</button>
            </form>
            
            <ul>
                { todos.map((todo, index) => (
                    <li 
                    key={ index } 
                    style={ todo.isCompleted === true ? 
                    {textDecorationLine: 'line-through'}:{}}>
                        <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => handleUpdateTask(index)}
                        />
                        {todo.task} 
                        <span onClick={ () => {
                            handleRemoveTask(index);
                            // const temp = JSON.stringify(todos);
                            // localStorage.setItem("keepTodo", temp);
                            // console.log("save");
                            // console.log(temp);
                        }}>X</span>
                    </li>
                ))}
            </ul>
        </div>
  );
}

export default TodoList;