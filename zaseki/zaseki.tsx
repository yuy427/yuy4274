import React from 'react';
import { useEffect, useState } from 'react';

const Zaseki = () => {
  // console.log("関数が呼ばれた");
  // 配列の初期設定
  const namesarray = [
    {
      id:0,
      name: '名前を入力してください',
      isCompleted: false,
    },
  ];

  type name = {
    id: number;
    name: string;
    isCompleted: boolean;
  };

  const [names, setNames] = useState(namesarray);

  let id=0;
  let inname="名前を入力してください";

  useEffect(() => {
    // ローカルストレージをロード
    const temp = localStorage.getItem('setNames');
    let loadedName:any;
    let nametemp:any;

    if(temp){
      loadedName = JSON.parse(temp);
    }else{
      loadedName = [];
    }

   if (loadedName) {
      inname=loadedName[0].name;
      console.log(inname);
      // setNames(loadedName=>[{ id:0,name:"加藤", isCompleted: false}]);
      setNames(loadedName);
      // console.log("loadedName done");
      // names[0].name=loadedName[0].name;
   }
    console.log("load");
    console.log(temp);
    console.log(loadedName);
    console.log(names);
  }, []);

  // 第２引数：namesの値が変更されると発火
  useEffect(() => {
   // localStorageに保存
   const temp = JSON.stringify(names);
   localStorage.setItem("setNames", temp);
   console.log("save");
   console.log(temp);
  }, [names]);

  // 入力用の配列
  const [name, setTask] = useState('');

  // フォーム入力のイベント
  const handleNewTask = (event:any) => {
    setTask(event.target.value);
  };

  // todo追加のイベント
  const handleSubmit = (event:any) => {
    let temp = {...names};
    event.preventDefault();
    if (name === '') return;
    temp[id].name = name;
    setNames(temp);
    console.log("event");
    console.log(names);
    setTask('');
  };

//   // todo削除のイベント
//   const handleRemoveTask = (index:any) => {
//     const newnames = [...names];
//     newnames.splice(index, 1);
//     setnames(newnames);
//   };

//   // todo更新のイベント
//   const handleUpdateTask = (index:any) => {
//     const newnames = names.map((todo, todoIndex) => {
//       if (todoIndex === index) {
//         todo.isCompleted = !todo.isCompleted;
//       }
//       return todo;
//     });
//     setnames(newnames);
//   };

  return (
    <div>
      <h1>席情報入力</h1>
      <form onSubmit={handleSubmit}>
        名前 :
        <input
          value={name}
          placeholder="名前入力"
          onChange={handleNewTask}
        />
        <button type="submit">Add</button>
      </form>
      <button className="seki">
        名前：{names[id].name}
      </button>
      {/* <ul>
        {names.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : 'none',
            }}
          >
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleUpdateTask(index)}
            />
            {todo.task}
            <span
              onClick={() => handleRemoveTask(index)}
              style={{ cursor: 'pointer' }}
            >
              X
            </span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Zaseki;