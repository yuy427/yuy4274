import React from "react";
import { useEffect, useState } from 'react';

type Props = {
    sekino: number,
    busyo : string,
    name : string,
    button : boolean,
    changeno:number,
    checkthisno:(thisno:number,changeno:number) => void,
    changeNumber: (sekino: number) => void,
    checkbtn:(button:boolean,sekino:number) =>  void,
    // checkzaseki:() => void;
  };
  
  // const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (ev:any) => {
  //   setBusyoValue(ev.target.value);
  // };
  
  export const ChangeButton = (
      { 
        sekino ,
        busyo ,
        name ,
        button, 
        changeno,
        changeNumber,
        checkthisno,
        checkbtn
    }: Props,
  ) => {
    // console.log(sekino);
    // console.log(busyo);
    // console.log(name);
    // console.log(button);
    // console.log(changeNumber);
    // console.log(checkbtn);
    // const [changeValue, setChangeValue] = useState("");
    const [changeValue, setChangeValue] = useState(() => {
        // ローカルストレージからTodoを取得
        const localStoragechangeValue = localStorage.getItem('changeValue');
        // console.log("load");
        // console.log(localStorageTodoList);

        // 配列に変換
        return JSON.parse(localStoragechangeValue ?? '[]');
    });
    
    // 第２引数のtodoListの値が変更されると発火
    useEffect(() => {
    // ローカルストレージに保存
    localStorage.setItem('changeValue', JSON.stringify(changeValue));
    // message(sekino,changeValue);
    }, [changeValue]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // ページの更新を防ぐ
        e.preventDefault();
    
        // 親に値を渡す
        // changeTodo(changeValue,busyoValue,changeno);
        // console.log(nameValue);
        // console.log(busyoValue);
    
        // 値を空に戻す
        // setChangeValue('');
        // setBusyoValue('総務経理部');
    };

    // const getmessagefunction = (sekino:number,getmessagestring:string) => {
    //     // console.log(getmessage);
    //     getmessage(sekino,getmessagestring);
    // };

    switch(busyo){
        case 'ゼロサム編集部':
            return(
                <button
                    className="zaseki-size zaseki-position zero-color"
                    title=""
                    onClick={() => {
                    changeNumber(sekino);
                    checkbtn(button,sekino);
                    checkthisno(sekino,changeno);
                    // checkzaseki();
                    }}
                >
                    <div className="sekibangou">
                        席番号：{sekino}<br/>
                    </div>
                    <div className="busyo-indent">
                        部署：{busyo}<br/>
                    </div>
                    名前：{name}<br/>
                    <form 
                        action=""
                        onSubmit={onSubmit}
                    >
                        
                    </form>
                </button>
            )
        case 'DMC・REX編集部':
        return(
            <button
                className="zaseki-size zaseki-position dmc-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div>
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        case 'ポストメディア編集部':
        return(
            <button
                className="zaseki-size zaseki-position post-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div>
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        case 'ノベル編集部':
        return(
            <button
                className="zaseki-size zaseki-position nobel-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div> 
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        case '百合姫編集部':
        return(
            <button
                className="zaseki-size zaseki-position yuri-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div>
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        case 'gateau編集部':
        return(
            <button
                className="zaseki-size zaseki-position gateau-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div>
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        case 'ライツ事業部':
        return(
            <button
                className="zaseki-size zaseki-position raitu-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div>
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        case '海外・新事業開発部':
        return(
            <button
                className="zaseki-size zaseki-position kaigai-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div>
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        case 'メディア事業部':
        return(
            <button
                className="zaseki-size zaseki-position media-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div>                
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        case '販売部':
        return(
            <button
                className="zaseki-size zaseki-position hanbai-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div>
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        case '編集総務部':
        return(
            <button
                className="zaseki-size zaseki-position hensyuu-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div>
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        case '経営企画部':
        return(
            <button
                className="zaseki-size zaseki-position keiei-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div>
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        case '総務経理部':
        return(
            <button
                className="zaseki-size zaseki-position soumu-color"
                title=""
                onClick={() => {
                changeNumber(sekino);
                checkbtn(button,sekino);
                }}
            >
                <div className="sekibangou">
                    席番号：{sekino}<br/>
                </div>
                <div className="busyo-indent">
                    部署：{busyo}<br/>
                </div>
                名前：{name}<br/>
                <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
            </button>
        )
        default:
            return(
                <button
                    // className="zaseki-size zaseki-position"
                    className="zaseki-size zaseki-position"
                    title=""
                    onClick={() => {
                    changeNumber(sekino);
                    checkbtn(button,sekino);
                    }}
                >
                    <div className="sekibangou">
                        席番号：{sekino}<br/>
                    </div>
                    部署：{busyo}<br/>
                    名前：{name}<br/>
                    <form 
                    action=""
                    onSubmit={onSubmit}
                >
                    
                </form>
                </button>
            )
    }
  }