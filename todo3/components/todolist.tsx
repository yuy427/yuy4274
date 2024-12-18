import React from "react";
import { useEffect, useState } from 'react';
import { Todo } from '../todo';
import { Trash2 } from 'lucide-react';
import "../TodoList.css";
import { NumberStock } from "../NumberStock";
// import classnames from "classnames";
import {ChangeButton} from "./changebutton";
// import Up from "./img/up.png";
// import Right from "./img/right.png";



  type Props = {
    todoList: Todo[],
    changeno:number,
    message : (sekino:number,message:string) => void,
    changeNumber: (sekino: number) => void,
    changeCompletedtree: (id: number) => void,
    changeCompletedkintai: (id: number) => void,
    changeCompletedkinmu: (id: number) => void,
    changeCompletedkaigi: (id: number) => void,
    changeButtonCheched: () => void,
    deleteTodo: (id: number) => void,
  };
  
  export const TodoList = ({ 
    todoList,
    changeno,
    message,
    changeNumber,
    changeCompletedtree, 
    changeCompletedkintai,
    changeCompletedkinmu,
    changeCompletedkaigi,
    changeButtonCheched, 
    deleteTodo 
  }: Props) => {
    
    let [beforeNumber, setBeforeNumber] = useState<NumberStock[]>(() => {
      // ローカルストレージからbeforeNumberを取得
      const localStoragebeforeNumber = localStorage.getItem('beforeNumber');
      // console.log("load");
      // console.log(localStorageTodoList);
  
      // 配列に変換
      return JSON.parse(localStoragebeforeNumber ?? '[]');
    });
  
    // 第２引数のbeforeNumberの値が変更されると発火
    useEffect(() => {
      // ローカルストレージに保存
      localStorage.setItem('beforeNumber', JSON.stringify(beforeNumber));
    }, [beforeNumber]);

    let thisnojudge:boolean=false;
    const checkthisno = (thisno:number,changeno:number) => {
      // console.log("thisno",thisno,);
      // console.log("changeno",changeno);
      if(thisno === changeno){
        // console.log("OK");
        thisnojudge = true;
      }else{
        // console.log("NO");
        thisnojudge = false;
      }
    }

    // クリックしたボタンが前回と同じなら以下を実行
    const checkbtn = (check:boolean,number:number) =>{
      // console.log(check);
      // console.log(number);
      // console.log(beforeNumber);
      if(number === beforeNumber[0].beforeNumber){
        changeButtonCheched();
      }
      const newNumber = {
        id:Date.now(),
        beforeNumber: number
      };
      setBeforeNumber([newNumber]);
    };

    // コメント欄の内容を取得
    const getmessage = (sekino:number,getmessage:string) =>{
      // console.log(sekino);
      // console.log(getmessage);
      message(sekino,getmessage);
    };

    return (
      <div 
        className="space-y-3 direction todolist-space"
      >
        {/* <div
          className={thisnojudge ? "select" : "notselect"}
        > */}
          {todoList.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-3 rounded bg-white p-2"
          >
              {/* <label className="flex grow items-center gap-3 hover:cursor-pointer"> */}
              
              {/* completedがtrueならクラスを適用、falseならクラスを適用しない */}
              <div className="zaseki-wrapper">
                <ChangeButton 
                  sekino={todo.sekino}
                  busyo={todo.busyo}
                  name={todo.name}
                  button={todo.button}
                  changeno={changeno}
                  checkthisno={checkthisno}
                  changeNumber={changeNumber}
                  checkbtn={checkbtn}
                />
                {/* <button
                  // className="zaseki-size zaseki-position"
                  className={classnames("zaseki-size", "zaseki-position")}
                  onClick={() => {
                    changeNumber(todo.sekino);
                    checkbtn(todo.button,todo.sekino);
                  }}
                >
                  席番号：{todo.sekino}<br/>
                  部署：{todo.busyo}<br/>
                  名前：{todo.name}<br/>
                </button> */}
                <textarea 
                    rows={3} 
                    name="example3"
                    value={todo.message} 
                    placeholder="例：会議時間 oo:oo ～ xx:xx"
                    className="comment"
                    onChange={
                        (e) => {
                          getmessage(todo.sekino,e.target.value);
                        }
                    } 
                />
                <div className="zaseki-forword">
                      
                  <div 
                    className={todo.tree ? "tree-active-wrapper" : 'tree-wrapper'}
                  >
                      <button
                        type="button"
                        className={todo.tree ? "tree-active" : 'tree'}
                        title={todo.tree ? "勤務中・会議中の非表示" : "勤務中・会議中の表示"}
                        onClick={()=>{
                          changeCompletedtree(todo.id)
                        }}
                      >
                        
                      </button>
                      {/* <img src="{`${process.env.PUBLIC_URL}/img.up.png`}" alt="up" /> */}
                      {/* <img src={Up} alt="up" /> */}
                    </div>
                    <div
                      id="kintai"  
                      className="flex items-center checkbox"
                    >
                      <input
                        id="key-btn"
                        type="checkbox"
                        value="kintai"
                        className="size-5 checkbox kintai kintai-hover"
                        title={todo.kintai ? "退勤状態にする" : "出勤状態にする"}
                        checked={todo.kintai}
                        onChange={() => {
                          changeCompletedkintai(todo.id);
                          // classToggle();
                        }}
                      />
                      {todo.kintai ? '出勤' : '退勤'}
                    </div>
                    <div
                      id="kinmu" 
                      className={todo.tree ? "kinmu-selected" : "kinmu"} 
                    >
                      <input
                        type="checkbox"
                        value="kinmu"
                        className="size-5 kinmu-hover"
                        title={todo.kinmu ? "休憩中状態にする" : "勤務中状態にする"}
                        checked={todo.kinmu}
                        onChange={() => changeCompletedkinmu(todo.id)}
                      />
                      {todo.kinmu ? '勤務中' : '休憩中'}
                    </div>
                    <div
                      id="kaigi" 
                      className={todo.tree ? "kaigi-selected" : "kaigi"}
                    >
                      <input
                        type="checkbox"
                        value="kaigi"
                        className="size-5 kaigi-hover"
                        title={todo.kaigi ? "通常業務中状態にする" : "会議中状態にする"}
                        checked={todo.kaigi}
                        onChange={() => changeCompletedkaigi(todo.id)}
                      />
                      {todo.kaigi ? '会議中' : '通常業務中'}
                    </div>
                    <button
                      type="button"
                      className="rounded bg-gray-200 p-2 transition-colors hover:bg-gray-300 delete-btn"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      <Trash2 className="size-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              
              
               {/* </label> */}
            
            
              </div>
            ))}
          {/* Todoが無い場合、表示する */}
          {todoList.length === 0 && (
              <p className="text-center text-sm">座席情報がありません</p>
          )}
        {/* </div> */}
        
      </div>
    );
  };