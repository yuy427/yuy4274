import React from "react";
import { useEffect, useState } from 'react';
import { Todo } from './todo3/todo';
import { dummyTodoList } from'./todo3/dummytodolist';
import { TodoList } from './todo3/components/todolist';
import { AddTodoForm } from './todo3/components/addtodoform';
import { ChangeTodoForm } from './todo3/components/changetodoform';
import { ZasekiSelect } from './todo3/components/zasekiSelect';
import { TodoSummary } from './todo3/components/todosummary';
import { ZasekiDisplay } from "./todo3/components/zasekiDisplay";
import { Combine } from "lucide-react";
// import Up from "./todo3/components/img/up.png";
// import Right from "./img/right.png";

// const module = require('./todo3/TodoList.js');

function App() {
  let [todoList, setTodoList] = useState<Todo[]>(() => {
    // ローカルストレージからTodoを取得
    const localStorageTodoList = localStorage.getItem('todoList');
    // console.log("load");
    // console.log(localStorageTodoList);

    // 配列に変換
    return JSON.parse(localStorageTodoList ?? '[]');
  });

  // 第２引数のtodoListの値が変更されると発火
  useEffect(() => {
    // ローカルストレージに保存
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  // コメントを記憶
  const getmessage = (sekino:number,getmessage:string) =>{
    // console.log(sekino);
    // console.log(getmessage);
    const updatedTodoLists = [...todoList].map((todoList) => {
      if (todoList.sekino === sekino) {
        todoList.message = getmessage;
      }
      return todoList;
    });
    setTodoList(updatedTodoLists);
    
  };

  // 変更する座席の番号を記憶
  let [Number, setNumberList] = useState(0);
  let [JudgeCount, setJudgeCountList] = useState(false);
  let [Count,setCount] = useState(0);
  const changeNumber =  (sekino: number) => {
    setNumberList(sekino);
  }
  // 座席追加と変更を切り替える
  const changeButton = () => {
    let judge;
    setCount(Count + 1);
    if(Count % 2 === 1) {
      judge = false;
    }else{
      judge = true;
    }
    // console.log(Count);
    // console.log(judge);
    setJudgeCountList(judge);
    // console.log(JudgeCount);
  }
  // 座席追加に戻るボタンを押したときの挙動
  const gotoInput = () => {
    const judge = true;
    setCount(Count + 1);
    setJudgeCountList(judge);
    // console.log(JudgeCount);
  }
  // 座席変更ボタンを押したときの挙動
  const changeInput = () => {
    const judge = true;
    setCount(Count + 1);
    setJudgeCountList(judge);
    // console.log(JudgeCount);
  }
  useEffect(() => {
    const judge = true;
    setCount(Count + 1);
    setJudgeCountList(judge);
  }, []);

  // ツリーの表示非表示をコントロール
  const changeCompletedtree = (id: number) => {
    // 変更前のTodoリストが引数として呼び出せる
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        // 対象のidなら、completedを変更
        if (todo.id === id) {
          return {
            ...todo,
            tree: !todo.tree,
          };
        }

        // それ以外のtodoなら、そのまま返す
        return todo;
      });
    });
  };

  const [tree2,settree2] = useState<boolean>(() => {
    // ローカルストレージからtree2を取得
    const localStoragetree2 = localStorage.getItem('tree2');
    // console.log("load");
    // console.log(localStorageTodoList);

    // 配列に変換
    return JSON.parse(localStoragetree2 ?? '[]');
  });

  // 第２引数のbeforeNumberの値が変更されると発火
  useEffect(() => {
    // ローカルストレージに保存
    localStorage.setItem('tree2', JSON.stringify(tree2));
  }, [tree2]);
  const changeCompletedtree2 = (boolean:boolean) =>{
    settree2(!boolean);
  }

  // 対象の 勤怠状況の完了を変更
  const changeCompletedkintai = (id: number) => {
    // 変更前のTodoリストが引数として呼び出せる
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        // 対象のidなら、completedを変更
        if (todo.id === id) {
          return {
            ...todo,
            kintai: !todo.kintai,
          };
        }

        // それ以外のtodoなら、そのまま返す
        return todo;
      });
    });
  };

  // 対象の勤務状況の完了を変更
  const changeCompletedkinmu = (id: number) => {
    // 変更前のTodoリストが引数として呼び出せる
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        // 対象のidなら、completedを変更
        if (todo.id === id) {
          return {
            ...todo,
            kinmu: !todo.kinmu,
          };
        }

        // それ以外のtodoなら、そのまま返す
        return todo;
      });
    });
  };

  // 対象の会議状況の完了を変更
  const changeCompletedkaigi = (id: number) => {
    // 変更前のTodoリストが引数として呼び出せる
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        // 対象のidなら、completedを変更
        if (todo.id === id) {
          return {
            ...todo,
            kaigi: !todo.kaigi,
          };
        }

        // それ以外のtodoなら、そのまま返す
        return todo;
      });
    });
  };

  // ボタンの選択状況を変更
  // const changeButtonCheched = (id: number) => {
  //   // 変更前のTodoリストが引数として呼び出せる
  //   setTodoList((prevTodoList) => {
  //     return prevTodoList.map((todo) => {
  //       // 対象のidなら、completedを変更
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           button: !todo.button,
  //         };
  //       }

  //       // それ以外のtodoなら、そのまま返す
  //       return todo;
  //     });
  //   });
  // };
  const [tododisplayzasekino,settododisplayzasekino] = useState<Todo[]>(() => {
  return dummyTodoList;
  });
  const setzasekino = (zasekino:Todo[]) => {
    settododisplayzasekino(zasekino);
  }
  
  // Todoを追加
  const addTodo = (name: string ,busyo: string) => {
    setTodoList((prevTodoList) => {
      let count = 1;
      let sizedis = 0;
      let sizepre = 0;
      let found = 0;
      for(let i = 0; i<tododisplayzasekino.length;i++){
        if(tododisplayzasekino[i].sekino > 0){
          sizedis++;
        }
      }
      for(let i = 0; i < prevTodoList.length; i++){
        if(prevTodoList[i].sekino > 0){
          sizepre++;
        }
      }
      // console.log("size", sizedis);
      // console.log("size", sizepre);
      for(let j = 1; j < sizedis + sizepre + 1; j++){
        found = 0;
        for(let i = 0; i < sizedis; i++){
          if(tododisplayzasekino[i].sekino === j){
            count = j + 1;
            // console.log("count1", count);
            found = 1;
            break;
          }
        }
        for(let i = 0; i < sizepre; i++){
          if(prevTodoList[i].sekino === j){
            count = j + 1;
            // console.log("count2", count);
            found = 1;
            break;
          }
        }
        
        if(found === 0){
          break;
        }
      }
      // console.log("tododisplayzasekino[0].sekino",tododisplayzasekino[0].sekino);
      // console.log("tododisplayzasekino[1].sekino",tododisplayzasekino[1].sekino);
      // console.log("count1", count);
      // console.log("count3", count);
      // 新しいTodoを作成
      const newTodo = {
        id: Date.now(),
        zasekiid: "",
        sekino:count,
        name,
        busyo,
        message:"",
        tree: false,
        kintai: false,
        kinmu: false,
        kaigi: false,
        button: false,
      };
      // console.log(prevTodoList);
      // 変更前のTodoリストと合わせる
      return [...prevTodoList,newTodo];
    });
  };

  // Todoを変更
  const changeTodo = (name: string ,busyo: string,changeno:number) => {
    // console.log("changeTodo");
    // console.log("name",name);
    // console.log("busyo",busyo);
    // console.log("changeno",changeno);
    const updatedTodoLists = [...todoList].map((todoList) => {
      if (todoList.sekino === changeno) {
        todoList.name = name;
        todoList.busyo = busyo;
      }
      return todoList;
    });
    setTodoList(updatedTodoLists);
  };

  // // zasekiDisplayに渡す用の変数
  // let [zasekiid,setzasekiid] = useState("");
  // let[todolistno,settodolistno] = useState(0);
  // zasekiselectで選択した席IDの取得
  // const zasekiID = (zaseki:string) =>{
  //   // 座席IDを選択した場合、座席追加画面に戻る
  //   const judge = true;
  //   setCount(Count + 1);
  //   setJudgeCountList(judge);
  //   setzasekiid(zaseki);
  //   console.log(zasekiid);
  //   for(let i = 0; i < todoList.length; i++) {
  //     if(todoList[i].sekino === Number){
  //       settodolistno(i);
  //     }
  //   }
  //   console.log(todolistno);
  // }

  // リストの座席情報と座席表の座席を入れ替える
  const change = (arrno:number,id: number,zasekiid: string,sekino:number,name: string,busyo: string,message: string,tree:boolean,kintai: boolean,kinmu: boolean,kaigi: boolean,button:boolean) => {
    let num = 0;
    // console.log(arrno,name,busyo);
    const updatedTodoLists = [...todoList].map((todoList) => {
      if (num === arrno) {
        todoList.id = id;
        todoList.zasekiid = zasekiid;
        todoList.sekino = sekino;
        todoList.name = name;
        todoList.busyo = busyo;
        todoList.message = message;
        todoList.tree = tree;
        todoList.kintai = kintai;
        todoList.kinmu = kinmu;
        todoList.kaigi = kaigi;
        todoList.button = button;
      }
      num++;
      // console.log(num);
      return todoList;
    });
    setTodoList(updatedTodoLists);
    const judge = true;
    setCount(Count + 1);
    setJudgeCountList(judge);
  }

  // 指定したidの座席の削除
  const deleteTodo = (id: number) => {
    // 削除ボタンを押した場合、座席追加画面に戻る
    const judge = true;
    setCount(Count + 1);
    setJudgeCountList(judge);
    // リストから対象の席を削除
    setTodoList((prevTodoList) => {
      // 対象のidでないTodoを残す
      return prevTodoList.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const resetmode = ()=> {
    // 座席追加画面に戻る
    const judge = true;
    setCount(Count + 1);
    setJudgeCountList(judge);
  
  };

  // 完了したTodoをすべて削除
  // const deleteAllCompleted = () => {
  //   setTodoList((prevTodoList) => {
  //     // 完了していないTodoを残す
  //     return prevTodoList.filter((todo) => {
  //       return !todo.kintai;
  //     });
  //   });
  // };

  // require("./todo3/TodoList.js");

  return (
    <main className="mx-auto mt-10 max-w-xl space-y-10">
      
      {/* <div className="space-y-5"> */}
        <div className={tree2 ? "title1_wrapper_wrapper-active" : 'title1_wrapper_wrapper'}>
          <div className="title1_wrapper">
            <div className="title1">
              <div className="btn-wrapper">
                <button
                  type="button"
                  className={tree2 ? "tree-active" : 'tree'}
                  title={tree2 ? "座席表の情報入力の非表示" : "座席表の情報入力の表示"}
                  onClick={()=>{
                    changeCompletedtree2(tree2);
                  }}
                ></button>
                <h1 className="text-center text-4xl">座席表の情報入力</h1>
              </div>
              <div className={tree2 ? "tree2-block" : 'tree2-none'}>
                  {/* 場合分け：座席追加 */}
                <div
                  className={JudgeCount ? "addon" : "addoff"} 
                >
                  <AddTodoForm addTodo={addTodo} />
                </div>
                {/* 場合分け：座席変更 */}
                <div
                  className={JudgeCount ? "changeoff" : "changeon"} 
                >
                  <ChangeTodoForm  
                    changeTodo = {changeTodo} 
                    changeno = {Number}
                    gotoInput = {gotoInput}
                    changeInput={changeInput}
                  />
                </div>
                
              </div>

              <div className={tree2 ? "todolist_wrapper-active" : 'todolist_wrapper'}>
                <div className="space-y-5 rounded bg-slate-200 p-5 ">
                    {/* <p>{Number}</p> */}
                    <TodoList
                      todoList={todoList}
                      changeno = {Number}
                      message={getmessage}
                      changeNumber={changeNumber}
                      changeCompletedtree={changeCompletedtree}
                      changeCompletedkintai={changeCompletedkintai}
                      changeCompletedkinmu={changeCompletedkinmu}
                      changeCompletedkaigi={changeCompletedkaigi}
                      changeButtonCheched={changeButton}
                      deleteTodo={deleteTodo}
                    />
                    
                    {/* <TodoSummary deleteAllCompleted={deleteAllCompleted} /> */}
                </div>
              </div>

            </div>
            
            
          </div>
        </div>
        
        
        {/* <div
          className={JudgeCount ? "changeoff" : "changeon"} 
        >
          <ZasekiSelect
            zasekiID={zasekiID}
          />
        </div> */}
        <ZasekiDisplay
          todoList={todoList}
          zasekino = {Number}
          zasekimode = {JudgeCount}
          change = {change}
          setzasekino = {setzasekino}
          deleteTodo={deleteTodo}
          resetmode={resetmode}
        />
      {/* </div> */}
      {/* {module} */}
    </main>
  );
}

export default App;