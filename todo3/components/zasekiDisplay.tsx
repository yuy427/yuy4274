import React from "react";
import { useEffect, useState } from 'react';
import { Todo } from '../todo';
import { Trash2 } from 'lucide-react';
import {ChangeButton} from "./changebutton";
import {Number} from "./number";
import {ZasekiForm} from "./zasekiForm"

type Props = {
    todoList: Todo[];
    zasekino: number;
    zasekimode: boolean; 
    change:(arrno:number,id: number,zasekiid: string,sekino:number,name: string,busyo: string,message: string,tree:boolean,kintai: boolean,kinmu: boolean,kaigi: boolean,button:boolean) => void;
    setzasekino:(zasekino:Todo[]) => void;
    deleteTodo: (id: number) => void;
    resetmode:() => void;
  };

// 原因（genninn）
export const ZasekiDisplay = ({ 
    todoList,
    zasekino,
    zasekimode, 
    change,
    setzasekino,
    deleteTodo,
    resetmode 
}: Props)=> {
    
    // // todoListのコピー
    // let [todoListCopy, settodoListCopy] = useState<Todo[]>(() => {
    //     // ローカルストレージからTodoを取得
    //     const localStorageTodoListCopy = localStorage.getItem('todoListCopy');
    //     // console.log("load");
    //     // console.log(localStorageTodoList);

    //     // 配列に変換
    //     return JSON.parse(localStorageTodoListCopy ?? '[]');
    // });

    // // 第２引数のtodoListDisplayの値が変更されると発火
    // useEffect(() => {
    //     // ローカルストレージに保存
    //     localStorage.setItem('todoListCopy', JSON.stringify(todoList));
    //     setzasekino(todoListDisplay);
    // }, [todoList]);
    
    // 座席表時用の配列
    let [todoListDisplay, settodoListDisplay] = useState<Todo[]>(() => {
        // ローカルストレージからTodoを取得
        const localStorageTodoListDisplay = localStorage.getItem('todoListDisplay');
        // console.log("load");
        // console.log(localStorageTodoList);

        // 配列に変換
        return JSON.parse(localStorageTodoListDisplay ?? '[]');
    });

    // 第２引数のtodoListDisplayの値が変更されると発火
    useEffect(() => {
        // ローカルストレージに保存
        localStorage.setItem('todoListDisplay', JSON.stringify(todoListDisplay));
        setzasekino(todoListDisplay);
    }, [todoListDisplay]);

    let [passwordjudge,setpasswordjudge] = useState(false);
    const password = (password:string) => {
    
        console.log(password);
        if(password == "ichijinsha"){
            console.log("unlock");
            let boolean = true;
            setpasswordjudge(boolean);
        }else{
            console.log("lock");
            let boolean = false;
            setpasswordjudge(boolean);
        }
    
    };
    
    // 複製開始(kaisi)
    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [h1judge,seth1judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageH1judge = localStorage.getItem('h1judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageH1judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h1judge', JSON.stringify(h1judge));
        // ↓↓変更箇所
    }, [h1judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [i1judge,seti1judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageI1judge = localStorage.getItem('i1judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageI1judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i1judge', JSON.stringify(i1judge));
        // ↓↓変更箇所
    }, [i1judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [k1judge,setk1judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageK1judge = localStorage.getItem('k1judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageK1judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k1judge', JSON.stringify(k1judge));
        // ↓↓変更箇所
    }, [k1judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [l1judge,setl1judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragel1judge = localStorage.getItem('l1judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragel1judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l1judge', JSON.stringify(l1judge));
        // ↓↓変更箇所
    }, [l1judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [o1judge,seto1judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageo1judge = localStorage.getItem('o1judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageo1judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o1judge', JSON.stringify(o1judge));
        // ↓↓変更箇所
    }, [o1judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [r1judge,setr1judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorager1judge = localStorage.getItem('r1judge');
        // ↓↓変更箇所
        return JSON.parse(localStorager1judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r1judge', JSON.stringify(r1judge));
        // ↓↓変更箇所
    }, [r1judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [x1judge,setx1judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragex1judge = localStorage.getItem('x1judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragex1judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x1judge', JSON.stringify(x1judge));
        // ↓↓変更箇所
    }, [x1judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [aa1judge,setaa1judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaa1judge = localStorage.getItem('aa1judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa1judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa1judge', JSON.stringify(aa1judge));
        // ↓↓変更箇所
    }, [aa1judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [b2judge,setb2judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageb2judge = localStorage.getItem('b2judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageb2judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b2judge', JSON.stringify(b2judge));
        // ↓↓変更箇所
    }, [b2judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [c2judge,setc2judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragec2judge = localStorage.getItem('c2judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragec2judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c2judge', JSON.stringify(c2judge));
        // ↓↓変更箇所
    }, [c2judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [e2judge,sete2judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragee2judge = localStorage.getItem('e2judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragee2judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e2judge', JSON.stringify(e2judge));
        // ↓↓変更箇所
    }, [e2judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [f2judge,setf2judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragef2judge = localStorage.getItem('f2judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragef2judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f2judge', JSON.stringify(f2judge));
        // ↓↓変更箇所
    }, [f2judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [h2judge,seth2judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageh2judge = localStorage.getItem('h2judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageh2judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h2judge', JSON.stringify(h2judge));
        // ↓↓変更箇所
    }, [h2judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [i2judge,seti2judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragei2judge = localStorage.getItem('i2judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragei2judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i2judge', JSON.stringify(i2judge));
        // ↓↓変更箇所
    }, [i2judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [k2judge,setk2judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragek2judge = localStorage.getItem('k2judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragek2judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k2judge', JSON.stringify(k2judge));
        // ↓↓変更箇所
    }, [k2judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [l2judge,setl2judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragel2judge = localStorage.getItem('l2judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragel2judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l2judge', JSON.stringify(l2judge));
        // ↓↓変更箇所
    }, [l2judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [b3judge,setb3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageb3judge = localStorage.getItem('b3judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageb3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b3judge', JSON.stringify(b3judge));
        // ↓↓変更箇所
    }, [b3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [c3judge,setc3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragec3judge = localStorage.getItem('c3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragec3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c3judge', JSON.stringify(c3judge));
        // ↓↓変更箇所
    }, [c3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [e3judge,sete3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragee3judge = localStorage.getItem('e3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragee3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e3judge', JSON.stringify(e3judge));
        // ↓↓変更箇所
    }, [e3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [f3judge,setf3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragef3judge = localStorage.getItem('f3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragef3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f3judge', JSON.stringify(f3judge));
        // ↓↓変更箇所
    }, [f3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [h3judge,seth3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageh3judge = localStorage.getItem('h3judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageh3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h3judge', JSON.stringify(h3judge));
        // ↓↓変更箇所
    }, [h3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [i3judge,seti3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragei3judge = localStorage.getItem('i3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragei3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i3judge', JSON.stringify(i3judge));
        // ↓↓変更箇所
    }, [i3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [k3judge,setk3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragek3judge = localStorage.getItem('k3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragek3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k3judge', JSON.stringify(k3judge));
        // ↓↓変更箇所
    }, [k3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [l3judge,setl3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragel3judge = localStorage.getItem('l3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragel3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l3judge', JSON.stringify(l3judge));
        // ↓↓変更箇所
    }, [l3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [n3judge,setn3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragen3judge = localStorage.getItem('n3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragen3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n3judge', JSON.stringify(n3judge));
        // ↓↓変更箇所
    }, [n3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [o3judge,seto3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageo3judge = localStorage.getItem('o3judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageo3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o3judge', JSON.stringify(o3judge));
        // ↓↓変更箇所
    }, [o3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [q3judge,setq3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageq3judge = localStorage.getItem('q3judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageq3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q3judge', JSON.stringify(q3judge));
        // ↓↓変更箇所
    }, [q3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [r3judge,setr3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorager3judge = localStorage.getItem('r3judge');
        // ↓↓変更箇所
        return JSON.parse(localStorager3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r3judge', JSON.stringify(r3judge));
        // ↓↓変更箇所
    }, [r3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [t3judge,sett3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoraget3judge = localStorage.getItem('t3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoraget3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t3judge', JSON.stringify(t3judge));
        // ↓↓変更箇所
    }, [t3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [u3judge,setu3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageu3judge = localStorage.getItem('u3judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageu3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u3judge', JSON.stringify(u3judge));
        // ↓↓変更箇所
    }, [u3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [w3judge,setw3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragew3judge = localStorage.getItem('w3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragew3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w3judge', JSON.stringify(w3judge));
        // ↓↓変更箇所
    }, [w3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [x3judge,setx3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragex3judge = localStorage.getItem('x3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragex3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x3judge', JSON.stringify(x3judge));
        // ↓↓変更箇所
    }, [x3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [z3judge,setz3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragez3judge = localStorage.getItem('z3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragez3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z3judge', JSON.stringify(z3judge));
        // ↓↓変更箇所
    }, [z3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [aa3judge,setaa3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaa3judge = localStorage.getItem('aa3judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa3judge', JSON.stringify(aa3judge));
        // ↓↓変更箇所
    }, [aa3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ac3judge,setac3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageac3judge = localStorage.getItem('ac3judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageac3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac3judge', JSON.stringify(ac3judge));
        // ↓↓変更箇所
    }, [ac3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ad3judge,setad3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragead3judge = localStorage.getItem('ad3judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragead3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad3judge', JSON.stringify(ad3judge));
        // ↓↓変更箇所
    }, [ad3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [af3judge,setaf3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaf3judge = localStorage.getItem('af3judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af3judge', JSON.stringify(af3judge));
        // ↓↓変更箇所
    }, [af3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ag3judge,setag3judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageag3judge = localStorage.getItem('ag3judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageag3judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag3judge', JSON.stringify(ag3judge));
        // ↓↓変更箇所
    }, [ag3judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [b4judge,setb4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageb4judge = localStorage.getItem('b4judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageb4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b4judge', JSON.stringify(b4judge));
        // ↓↓変更箇所
    }, [b4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [c4judge,setc4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragec4judge = localStorage.getItem('c4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragec4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c4judge', JSON.stringify(c4judge));
        // ↓↓変更箇所
    }, [c4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [e4judge,sete4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragee4judge = localStorage.getItem('e4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragee4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e4judge', JSON.stringify(e4judge));
        // ↓↓変更箇所
    }, [e4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [f4judge,setf4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragef4judge = localStorage.getItem('f4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragef4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f4judge', JSON.stringify(f4judge));
        // ↓↓変更箇所
    }, [f4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [h4judge,seth4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageh4judge = localStorage.getItem('h4judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageh4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h4judge', JSON.stringify(h4judge));
        // ↓↓変更箇所
    }, [h4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [i4judge,seti4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragei4judge = localStorage.getItem('i4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragei4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i4judge', JSON.stringify(i4judge));
        // ↓↓変更箇所
    }, [i4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [k4judge,setk4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragek4judge = localStorage.getItem('k4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragek4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k4judge', JSON.stringify(k4judge));
        // ↓↓変更箇所
    }, [k4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [l4judge,setl4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragel4judge = localStorage.getItem('l4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragel4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l4judge', JSON.stringify(l4judge));
        // ↓↓変更箇所
    }, [l4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [n4judge,setn4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragen4judge = localStorage.getItem('n4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragen4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n4judge', JSON.stringify(n4judge));
        // ↓↓変更箇所
    }, [n4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [o4judge,seto4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageo4judge = localStorage.getItem('o4judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageo4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o4judge', JSON.stringify(o4judge));
        // ↓↓変更箇所
    }, [o4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [q4judge,setq4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageq4judge = localStorage.getItem('q4judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageq4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q4judge', JSON.stringify(q4judge));
        // ↓↓変更箇所
    }, [q4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [r4judge,setr4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorager4judge = localStorage.getItem('r4judge');
        // ↓↓変更箇所
        return JSON.parse(localStorager4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r4judge', JSON.stringify(r4judge));
        // ↓↓変更箇所
    }, [r4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [t4judge,sett4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoraget4judge = localStorage.getItem('t4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoraget4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t4judge', JSON.stringify(t4judge));
        // ↓↓変更箇所
    }, [t4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [u4judge,setu4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageu4judge = localStorage.getItem('u4judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageu4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u4judge', JSON.stringify(u4judge));
        // ↓↓変更箇所
    }, [u4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [w4judge,setw4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragew4judge = localStorage.getItem('w4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragew4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w4judge', JSON.stringify(w4judge));
        // ↓↓変更箇所
    }, [w4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [x4judge,setx4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragex4judge = localStorage.getItem('x4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragex4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x4judge', JSON.stringify(x4judge));
        // ↓↓変更箇所
    }, [x4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [z4judge,setz4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragez4judge = localStorage.getItem('z4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragez4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z4judge', JSON.stringify(z4judge));
        // ↓↓変更箇所
    }, [z4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [aa4judge,setaa4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaa4judge = localStorage.getItem('aa4judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa4judge', JSON.stringify(aa4judge));
        // ↓↓変更箇所
    }, [aa4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ac4judge,setac4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageac4judge = localStorage.getItem('ac4judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageac4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac4judge', JSON.stringify(ac4judge));
        // ↓↓変更箇所
    }, [ac4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ad4judge,setad4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragead4judge = localStorage.getItem('ad4judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragead4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad4judge', JSON.stringify(ad4judge));
        // ↓↓変更箇所
    }, [ad4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [af4judge,setaf4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaf4judge = localStorage.getItem('af4judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af4judge', JSON.stringify(af4judge));
        // ↓↓変更箇所
    }, [af4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ag4judge,setag4judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageag4judge = localStorage.getItem('ag4judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageag4judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag4judge', JSON.stringify(ag4judge));
        // ↓↓変更箇所
    }, [ag4judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [b5judge,setb5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageb5judge = localStorage.getItem('b5judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageb5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b5judge', JSON.stringify(b5judge));
        // ↓↓変更箇所
    }, [b5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [c5judge,setc5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragec5judge = localStorage.getItem('c5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragec5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c5judge', JSON.stringify(c5judge));
        // ↓↓変更箇所
    }, [c5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [e5judge,sete5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragee5judge = localStorage.getItem('e5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragee5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e5judge', JSON.stringify(e5judge));
        // ↓↓変更箇所
    }, [e5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [f5judge,setf5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragef5judge = localStorage.getItem('f5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragef5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f5judge', JSON.stringify(f5judge));
        // ↓↓変更箇所
    }, [f5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [h5judge,seth5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageh5judge = localStorage.getItem('h5judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageh5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h5judge', JSON.stringify(h5judge));
        // ↓↓変更箇所
    }, [h5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [i5judge,seti5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragei5judge = localStorage.getItem('i5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragei5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i5judge', JSON.stringify(i5judge));
        // ↓↓変更箇所
    }, [i5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [k5judge,setk5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragek5judge = localStorage.getItem('k5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragek5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k5judge', JSON.stringify(k5judge));
        // ↓↓変更箇所
    }, [k5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [l5judge,setl5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragel5judge = localStorage.getItem('l5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragel5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l5judge', JSON.stringify(l5judge));
        // ↓↓変更箇所
    }, [l5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [n5judge,setn5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragen5judge = localStorage.getItem('n5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragen5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n5judge', JSON.stringify(n5judge));
        // ↓↓変更箇所
    }, [n5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [o5judge,seto5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageo5judge = localStorage.getItem('o5judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageo5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o5judge', JSON.stringify(o5judge));
        // ↓↓変更箇所
    }, [o5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [q5judge,setq5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageq5judge = localStorage.getItem('q5judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageq5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q5judge', JSON.stringify(q5judge));
        // ↓↓変更箇所
    }, [q5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [r5judge,setr5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorager5judge = localStorage.getItem('r5judge');
        // ↓↓変更箇所
        return JSON.parse(localStorager5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r5judge', JSON.stringify(r5judge));
        // ↓↓変更箇所
    }, [r5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [t5judge,sett5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoraget5judge = localStorage.getItem('t5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoraget5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t5judge', JSON.stringify(t5judge));
        // ↓↓変更箇所
    }, [t5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [u5judge,setu5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageu5judge = localStorage.getItem('u5judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageu5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u5judge', JSON.stringify(u5judge));
        // ↓↓変更箇所
    }, [u5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [w5judge,setw5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragew5judge = localStorage.getItem('w5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragew5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w5judge', JSON.stringify(w5judge));
        // ↓↓変更箇所
    }, [w5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [x5judge,setx5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragex5judge = localStorage.getItem('x5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragex5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x5judge', JSON.stringify(x5judge));
        // ↓↓変更箇所
    }, [x5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [z5judge,setz5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragez5judge = localStorage.getItem('z5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragez5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z5judge', JSON.stringify(z5judge));
        // ↓↓変更箇所
    }, [z5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [aa5judge,setaa5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaa5judge = localStorage.getItem('aa5judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa5judge', JSON.stringify(aa5judge));
        // ↓↓変更箇所
    }, [aa5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ac5judge,setac5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageac5judge = localStorage.getItem('ac5judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageac5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac5judge', JSON.stringify(ac5judge));
        // ↓↓変更箇所
    }, [ac5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ad5judge,setad5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragead5judge = localStorage.getItem('ad5judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragead5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad5judge', JSON.stringify(ad5judge));
        // ↓↓変更箇所
    }, [ad5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [af5judge,setaf5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaf5judge = localStorage.getItem('af5judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af5judge', JSON.stringify(af5judge));
        // ↓↓変更箇所
    }, [af5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ag5judge,setag5judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageag5judge = localStorage.getItem('ag5judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageag5judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag5judge', JSON.stringify(ag5judge));
        // ↓↓変更箇所
    }, [ag5judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [b6judge,setb6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageb6judge = localStorage.getItem('b6judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageb6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b6judge', JSON.stringify(b6judge));
        // ↓↓変更箇所
    }, [b6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [c6judge,setc6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragec6judge = localStorage.getItem('c6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragec6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c6judge', JSON.stringify(c6judge));
        // ↓↓変更箇所
    }, [c6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [e6judge,sete6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragee6judge = localStorage.getItem('e6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragee6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e6judge', JSON.stringify(e6judge));
        // ↓↓変更箇所
    }, [e6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [f6judge,setf6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragef6judge = localStorage.getItem('f6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragef6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f6judge', JSON.stringify(f6judge));
        // ↓↓変更箇所
    }, [f6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [h6judge,seth6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageh6judge = localStorage.getItem('h6judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageh6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h6judge', JSON.stringify(h6judge));
        // ↓↓変更箇所
    }, [h6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [i6judge,seti6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragei6judge = localStorage.getItem('i6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragei6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i6judge', JSON.stringify(i6judge));
        // ↓↓変更箇所
    }, [i6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [k6judge,setk6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragek6judge = localStorage.getItem('k6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragek6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k6judge', JSON.stringify(k6judge));
        // ↓↓変更箇所
    }, [k6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [l6judge,setl6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragel6judge = localStorage.getItem('l6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragel6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l6judge', JSON.stringify(l6judge));
        // ↓↓変更箇所
    }, [l6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [n6judge,setn6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragen6judge = localStorage.getItem('n6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragen6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n6judge', JSON.stringify(n6judge));
        // ↓↓変更箇所
    }, [n6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [o6judge,seto6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageo6judge = localStorage.getItem('o6judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageo6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o6judge', JSON.stringify(o6judge));
        // ↓↓変更箇所
    }, [o6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [q6judge,setq6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageq6judge = localStorage.getItem('q6judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageq6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q6judge', JSON.stringify(q6judge));
        // ↓↓変更箇所
    }, [q6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [r6judge,setr6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorager6judge = localStorage.getItem('r6judge');
        // ↓↓変更箇所
        return JSON.parse(localStorager6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r6judge', JSON.stringify(r6judge));
        // ↓↓変更箇所
    }, [r6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [t6judge,sett6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoraget6judge = localStorage.getItem('t6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoraget6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t6judge', JSON.stringify(t6judge));
        // ↓↓変更箇所
    }, [t6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [u6judge,setu6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageu6judge = localStorage.getItem('u6judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageu6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u6judge', JSON.stringify(u6judge));
        // ↓↓変更箇所
    }, [u6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [w6judge,setw6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragew6judge = localStorage.getItem('w6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragew6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w6judge', JSON.stringify(w6judge));
        // ↓↓変更箇所
    }, [w6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [x6judge,setx6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragex6judge = localStorage.getItem('x6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragex6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x6judge', JSON.stringify(x6judge));
        // ↓↓変更箇所
    }, [x6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [z6judge,setz6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragez6judge = localStorage.getItem('z6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragez6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z6judge', JSON.stringify(z6judge));
        // ↓↓変更箇所
    }, [z6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [aa6judge,setaa6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaa6judge = localStorage.getItem('aa6judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa6judge', JSON.stringify(aa6judge));
        // ↓↓変更箇所
    }, [aa6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ac6judge,setac6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageac6judge = localStorage.getItem('ac6judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageac6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac6judge', JSON.stringify(ac6judge));
        // ↓↓変更箇所
    }, [ac6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ad6judge,setad6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragead6judge = localStorage.getItem('ad6judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragead6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad6judge', JSON.stringify(ad6judge));
        // ↓↓変更箇所
    }, [ad6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [af6judge,setaf6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaf6judge = localStorage.getItem('af6judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af6judge', JSON.stringify(af6judge));
        // ↓↓変更箇所
    }, [af6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ag6judge,setag6judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageag6judge = localStorage.getItem('ag6judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageag6judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag6judge', JSON.stringify(ag6judge));
        // ↓↓変更箇所
    }, [ag6judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [b7judge,setb7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageb7judge = localStorage.getItem('b7judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageb7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b7judge', JSON.stringify(b7judge));
        // ↓↓変更箇所
    }, [b7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [c7judge,setc7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragec7judge = localStorage.getItem('c7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragec7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c7judge', JSON.stringify(c7judge));
        // ↓↓変更箇所
    }, [c7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [e7judge,sete7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragee7judge = localStorage.getItem('e7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragee7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e7judge', JSON.stringify(e7judge));
        // ↓↓変更箇所
    }, [e7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [f7judge,setf7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragef7judge = localStorage.getItem('f7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragef7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f7judge', JSON.stringify(f7judge));
        // ↓↓変更箇所
    }, [f7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [h7judge,seth7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageh7judge = localStorage.getItem('h7judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageh7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h7judge', JSON.stringify(h7judge));
        // ↓↓変更箇所
    }, [h7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [i7judge,seti7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragei7judge = localStorage.getItem('i7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragei7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i7judge', JSON.stringify(i7judge));
        // ↓↓変更箇所
    }, [i7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [k7judge,setk7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragek7judge = localStorage.getItem('k7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragek7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k7judge', JSON.stringify(k7judge));
        // ↓↓変更箇所
    }, [k7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [l7judge,setl7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragel7judge = localStorage.getItem('l7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragel7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l7judge', JSON.stringify(l7judge));
        // ↓↓変更箇所
    }, [l7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [n7judge,setn7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragen7judge = localStorage.getItem('n7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragen7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n7judge', JSON.stringify(n7judge));
        // ↓↓変更箇所
    }, [n7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [o7judge,seto7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageo7judge = localStorage.getItem('o7judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageo7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o7judge', JSON.stringify(o7judge));
        // ↓↓変更箇所
    }, [o7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [q7judge,setq7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageq7judge = localStorage.getItem('q7judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageq7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q7judge', JSON.stringify(q7judge));
        // ↓↓変更箇所
    }, [q7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [r7judge,setr7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorager7judge = localStorage.getItem('r7judge');
        // ↓↓変更箇所
        return JSON.parse(localStorager7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r7judge', JSON.stringify(r7judge));
        // ↓↓変更箇所
    }, [r7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [t7judge,sett7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoraget7judge = localStorage.getItem('t7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoraget7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t7judge', JSON.stringify(t7judge));
        // ↓↓変更箇所
    }, [t7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [u7judge,setu7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageu7judge = localStorage.getItem('u7judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageu7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u7judge', JSON.stringify(u7judge));
        // ↓↓変更箇所
    }, [u7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [w7judge,setw7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragew7judge = localStorage.getItem('w7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragew7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w7judge', JSON.stringify(w7judge));
        // ↓↓変更箇所
    }, [w7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [x7judge,setx7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragex7judge = localStorage.getItem('x7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragex7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x7judge', JSON.stringify(x7judge));
        // ↓↓変更箇所
    }, [x7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [z7judge,setz7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragez7judge = localStorage.getItem('z7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragez7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z7judge', JSON.stringify(z7judge));
        // ↓↓変更箇所
    }, [z7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [aa7judge,setaa7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaa7judge = localStorage.getItem('aa7judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa7judge', JSON.stringify(aa7judge));
        // ↓↓変更箇所
    }, [aa7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ac7judge,setac7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageac7judge = localStorage.getItem('ac7judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageac7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac7judge', JSON.stringify(ac7judge));
        // ↓↓変更箇所
    }, [ac7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ad7judge,setad7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragead7judge = localStorage.getItem('ad7judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragead7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad7judge', JSON.stringify(ad7judge));
        // ↓↓変更箇所
    }, [ad7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [af7judge,setaf7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaf7judge = localStorage.getItem('af7judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af7judge', JSON.stringify(af7judge));
        // ↓↓変更箇所
    }, [af7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ag7judge,setag7judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageag7judge = localStorage.getItem('ag7judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageag7judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag7judge', JSON.stringify(ag7judge));
        // ↓↓変更箇所
    }, [ag7judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [b8judge,setb8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageb8judge = localStorage.getItem('b8judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageb8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b8judge', JSON.stringify(b8judge));
        // ↓↓変更箇所
    }, [b8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [c8judge,setc8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragec8judge = localStorage.getItem('c8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragec8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c8judge', JSON.stringify(c8judge));
        // ↓↓変更箇所
    }, [c8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [e8judge,sete8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragee8judge = localStorage.getItem('e8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragee8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e8judge', JSON.stringify(e8judge));
        // ↓↓変更箇所
    }, [e8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [f8judge,setf8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragef8judge = localStorage.getItem('f8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragef8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f8judge', JSON.stringify(f8judge));
        // ↓↓変更箇所
    }, [f8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [h8judge,seth8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageh8judge = localStorage.getItem('h8judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageh8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h8judge', JSON.stringify(h8judge));
        // ↓↓変更箇所
    }, [h8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [i8judge,seti8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragei8judge = localStorage.getItem('i8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragei8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i8judge', JSON.stringify(i8judge));
        // ↓↓変更箇所
    }, [i8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [k8judge,setk8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragek8judge = localStorage.getItem('k8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragek8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k8judge', JSON.stringify(k8judge));
        // ↓↓変更箇所
    }, [k8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [l8judge,setl8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragel8judge = localStorage.getItem('l8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragel8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l8judge', JSON.stringify(l8judge));
        // ↓↓変更箇所
    }, [l8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [n8judge,setn8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragen8judge = localStorage.getItem('n8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragen8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n8judge', JSON.stringify(n8judge));
        // ↓↓変更箇所
    }, [n8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [o8judge,seto8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageo8judge = localStorage.getItem('o8judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageo8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o8judge', JSON.stringify(o8judge));
        // ↓↓変更箇所
    }, [o8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [q8judge,setq8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageq8judge = localStorage.getItem('q8judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageq8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q8judge', JSON.stringify(q8judge));
        // ↓↓変更箇所
    }, [q8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [r8judge,setr8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorager8judge = localStorage.getItem('r8judge');
        // ↓↓変更箇所
        return JSON.parse(localStorager8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r8judge', JSON.stringify(r8judge));
        // ↓↓変更箇所
    }, [r8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [t8judge,sett8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoraget8judge = localStorage.getItem('t8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoraget8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t8judge', JSON.stringify(t8judge));
        // ↓↓変更箇所
    }, [t8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [u8judge,setu8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageu8judge = localStorage.getItem('u8judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageu8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u8judge', JSON.stringify(u8judge));
        // ↓↓変更箇所
    }, [u8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [w8judge,setw8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragew8judge = localStorage.getItem('w8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragew8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w8judge', JSON.stringify(w8judge));
        // ↓↓変更箇所
    }, [w8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [x8judge,setx8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragex8judge = localStorage.getItem('x8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragex8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x8judge', JSON.stringify(x8judge));
        // ↓↓変更箇所
    }, [x8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [z8judge,setz8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragez8judge = localStorage.getItem('z8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragez8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z8judge', JSON.stringify(z8judge));
        // ↓↓変更箇所
    }, [z8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [aa8judge,setaa8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaa8judge = localStorage.getItem('aa8judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa8judge', JSON.stringify(aa8judge));
        // ↓↓変更箇所
    }, [aa8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ac8judge,setac8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageac8judge = localStorage.getItem('ac8judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageac8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac8judge', JSON.stringify(ac8judge));
        // ↓↓変更箇所
    }, [ac8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ad8judge,setad8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragead8judge = localStorage.getItem('ad8judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragead8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad8judge', JSON.stringify(ad8judge));
        // ↓↓変更箇所
    }, [ad8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [af8judge,setaf8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaf8judge = localStorage.getItem('af8judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af8judge', JSON.stringify(af8judge));
        // ↓↓変更箇所
    }, [af8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ag8judge,setag8judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageag8judge = localStorage.getItem('ag8judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageag8judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag8judge', JSON.stringify(ag8judge));
        // ↓↓変更箇所
    }, [ag8judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [b9judge,setb9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageb9judge = localStorage.getItem('b9judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageb9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b9judge', JSON.stringify(b9judge));
        // ↓↓変更箇所
    }, [b9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [c9judge,setc9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragec9judge = localStorage.getItem('c9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragec9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c9judge', JSON.stringify(c9judge));
        // ↓↓変更箇所
    }, [c9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [e9judge,sete9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragee9judge = localStorage.getItem('e9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragee9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e9judge', JSON.stringify(e9judge));
        // ↓↓変更箇所
    }, [e9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [f9judge,setf9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragef9judge = localStorage.getItem('f9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragef9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f9judge', JSON.stringify(f9judge));
        // ↓↓変更箇所
    }, [f9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [h9judge,seth9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageh9judge = localStorage.getItem('h9judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageh9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h9judge', JSON.stringify(h9judge));
        // ↓↓変更箇所
    }, [h9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [i9judge,seti9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragei9judge = localStorage.getItem('i9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragei9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i9judge', JSON.stringify(i9judge));
        // ↓↓変更箇所
    }, [i9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [k9judge,setk9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragek9judge = localStorage.getItem('k9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragek9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k9judge', JSON.stringify(k9judge));
        // ↓↓変更箇所
    }, [k9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [l9judge,setl9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragel9judge = localStorage.getItem('l9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragel9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l9judge', JSON.stringify(l9judge));
        // ↓↓変更箇所
    }, [l9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [n9judge,setn9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragen9judge = localStorage.getItem('n9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragen9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n9judge', JSON.stringify(n9judge));
        // ↓↓変更箇所
    }, [n9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [o9judge,seto9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageo9judge = localStorage.getItem('o9judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageo9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o9judge', JSON.stringify(o9judge));
        // ↓↓変更箇所
    }, [o9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [q9judge,setq9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageq9judge = localStorage.getItem('q9judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageq9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q9judge', JSON.stringify(q9judge));
        // ↓↓変更箇所
    }, [q9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [r9judge,setr9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorager9judge = localStorage.getItem('r9judge');
        // ↓↓変更箇所
        return JSON.parse(localStorager9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r9judge', JSON.stringify(r9judge));
        // ↓↓変更箇所
    }, [r9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [t9judge,sett9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoraget9judge = localStorage.getItem('t9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoraget9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t9judge', JSON.stringify(t9judge));
        // ↓↓変更箇所
    }, [t9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [u9judge,setu9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageu9judge = localStorage.getItem('u9judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageu9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u9judge', JSON.stringify(u9judge));
        // ↓↓変更箇所
    }, [u9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [w9judge,setw9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragew9judge = localStorage.getItem('w9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragew9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w9judge', JSON.stringify(w9judge));
        // ↓↓変更箇所
    }, [w9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [x9judge,setx9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragex9judge = localStorage.getItem('x9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragex9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x9judge', JSON.stringify(x9judge));
        // ↓↓変更箇所
    }, [x9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [z9judge,setz9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragez9judge = localStorage.getItem('z9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragez9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z9judge', JSON.stringify(z9judge));
        // ↓↓変更箇所
    }, [z9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [aa9judge,setaa9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaa9judge = localStorage.getItem('aa9judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa9judge', JSON.stringify(aa9judge));
        // ↓↓変更箇所
    }, [aa9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ac9judge,setac9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageac9judge = localStorage.getItem('ac9judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageac9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac9judge', JSON.stringify(ac9judge));
        // ↓↓変更箇所
    }, [ac9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ad9judge,setad9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragead9judge = localStorage.getItem('ad9judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragead9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad9judge', JSON.stringify(ad9judge));
        // ↓↓変更箇所
    }, [ad9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [af9judge,setaf9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaf9judge = localStorage.getItem('af9judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af9judge', JSON.stringify(af9judge));
        // ↓↓変更箇所
    }, [af9judge]);
    
    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ag9judge,setag9judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageag9judge = localStorage.getItem('ag9judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageag9judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag9judge', JSON.stringify(ag9judge));
        // ↓↓変更箇所
    }, [ag9judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [b11judge,setb11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageb11judge = localStorage.getItem('b11judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageb11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b11judge', JSON.stringify(b11judge));
        // ↓↓変更箇所
    }, [b11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [c11judge,setc11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragec11judge = localStorage.getItem('c11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragec11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c11judge', JSON.stringify(c11judge));
        // ↓↓変更箇所
    }, [c11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [e11judge,sete11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragee11judge = localStorage.getItem('e11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragee11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e11judge', JSON.stringify(e11judge));
        // ↓↓変更箇所
    }, [e11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [f11judge,setf11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragef11judge = localStorage.getItem('f11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragef11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f11judge', JSON.stringify(f11judge));
        // ↓↓変更箇所
    }, [f11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [h11judge,seth11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageh11judge = localStorage.getItem('h11judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageh11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h11judge', JSON.stringify(h11judge));
        // ↓↓変更箇所
    }, [h11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [i11judge,seti11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragei11judge = localStorage.getItem('i11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragei11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i11judge', JSON.stringify(i11judge));
        // ↓↓変更箇所
    }, [i11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [k11judge,setk11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragek11judge = localStorage.getItem('k11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragek11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k11judge', JSON.stringify(k11judge));
        // ↓↓変更箇所
    }, [k11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [l11judge,setl11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragel11judge = localStorage.getItem('l11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragel11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l11judge', JSON.stringify(l11judge));
        // ↓↓変更箇所
    }, [l11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [n11judge,setn11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragen11judge = localStorage.getItem('n11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragen11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n11judge', JSON.stringify(n11judge));
        // ↓↓変更箇所
    }, [n11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [o11judge,seto11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageo11judge = localStorage.getItem('o11judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageo11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o11judge', JSON.stringify(o11judge));
        // ↓↓変更箇所
    }, [o11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [q11judge,setq11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageq11judge = localStorage.getItem('q11judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageq11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q11judge', JSON.stringify(q11judge));
        // ↓↓変更箇所
    }, [q11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [r11judge,setr11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorager11judge = localStorage.getItem('r11judge');
        // ↓↓変更箇所
        return JSON.parse(localStorager11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r11judge', JSON.stringify(r11judge));
        // ↓↓変更箇所
    }, [r11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [t11judge,sett11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoraget11judge = localStorage.getItem('t11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoraget11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t11judge', JSON.stringify(t11judge));
        // ↓↓変更箇所
    }, [t11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [u11judge,setu11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageu11judge = localStorage.getItem('u11judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageu11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u11judge', JSON.stringify(u11judge));
        // ↓↓変更箇所
    }, [u11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [w11judge,setw11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragew11judge = localStorage.getItem('w11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragew11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w11judge', JSON.stringify(w11judge));
        // ↓↓変更箇所
    }, [w11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [x11judge,setx11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragex11judge = localStorage.getItem('x11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragex11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x11judge', JSON.stringify(x11judge));
        // ↓↓変更箇所
    }, [x11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [z11judge,setz11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragez11judge = localStorage.getItem('z11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragez11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z11judge', JSON.stringify(z11judge));
        // ↓↓変更箇所
    }, [z11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [aa11judge,setaa11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaa11judge = localStorage.getItem('aa11judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa11judge', JSON.stringify(aa11judge));
        // ↓↓変更箇所
    }, [aa11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ac11judge,setac11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageac11judge = localStorage.getItem('ac11judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageac11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac11judge', JSON.stringify(ac11judge));
        // ↓↓変更箇所
    }, [ac11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ad11judge,setad11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragead11judge = localStorage.getItem('ad11judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragead11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad11judge', JSON.stringify(ad11judge));
        // ↓↓変更箇所
    }, [ad11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [af11judge,setaf11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaf11judge = localStorage.getItem('af11judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af11judge', JSON.stringify(af11judge));
        // ↓↓変更箇所
    }, [af11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ag11judge,setag11judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageag11judge = localStorage.getItem('ag11judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageag11judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag11judge', JSON.stringify(ag11judge));
        // ↓↓変更箇所
    }, [ag11judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [b12judge,setb12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageb12judge = localStorage.getItem('b12judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageb12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b12judge', JSON.stringify(b12judge));
        // ↓↓変更箇所
    }, [b12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [c12judge,setc12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragec12judge = localStorage.getItem('c12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragec12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c12judge', JSON.stringify(c12judge));
        // ↓↓変更箇所
    }, [c12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [e12judge,sete12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragee12judge = localStorage.getItem('e12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragee12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e12judge', JSON.stringify(e12judge));
        // ↓↓変更箇所
    }, [e12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [f12judge,setf12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragef12judge = localStorage.getItem('f12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragef12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f12judge', JSON.stringify(f12judge));
        // ↓↓変更箇所
    }, [f12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [h12judge,seth12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageh12judge = localStorage.getItem('h12judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageh12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h12judge', JSON.stringify(h12judge));
        // ↓↓変更箇所
    }, [h12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [i12judge,seti12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragei12judge = localStorage.getItem('i12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragei12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i12judge', JSON.stringify(i12judge));
        // ↓↓変更箇所
    }, [i12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [k12judge,setk12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragek12judge = localStorage.getItem('k12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragek12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k12judge', JSON.stringify(k12judge));
        // ↓↓変更箇所
    }, [k12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [l12judge,setl12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragel12judge = localStorage.getItem('l12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragel12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l12judge', JSON.stringify(l12judge));
        // ↓↓変更箇所
    }, [l12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [n12judge,setn12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragen12judge = localStorage.getItem('n12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragen12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n12judge', JSON.stringify(n12judge));
        // ↓↓変更箇所
    }, [n12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [o12judge,seto12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageo12judge = localStorage.getItem('o12judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageo12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o12judge', JSON.stringify(o12judge));
        // ↓↓変更箇所
    }, [o12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [q12judge,setq12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageq12judge = localStorage.getItem('q12judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageq12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q12judge', JSON.stringify(q12judge));
        // ↓↓変更箇所
    }, [q12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [r12judge,setr12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorager12judge = localStorage.getItem('r12judge');
        // ↓↓変更箇所
        return JSON.parse(localStorager12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r12judge', JSON.stringify(r12judge));
        // ↓↓変更箇所
    }, [r12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [t12judge,sett12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoraget12judge = localStorage.getItem('t12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoraget12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t12judge', JSON.stringify(t12judge));
        // ↓↓変更箇所
    }, [t12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [u12judge,setu12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageu12judge = localStorage.getItem('u12judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageu12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u12judge', JSON.stringify(u12judge));
        // ↓↓変更箇所
    }, [u12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [w12judge,setw12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragew12judge = localStorage.getItem('w12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragew12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w12judge', JSON.stringify(w12judge));
        // ↓↓変更箇所
    }, [w12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [x12judge,setx12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragex12judge = localStorage.getItem('x12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragex12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x12judge', JSON.stringify(x12judge));
        // ↓↓変更箇所
    }, [x12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [z12judge,setz12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragez12judge = localStorage.getItem('z12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragez12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z12judge', JSON.stringify(z12judge));
        // ↓↓変更箇所
    }, [z12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [aa12judge,setaa12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaa12judge = localStorage.getItem('aa12judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa12judge', JSON.stringify(aa12judge));
        // ↓↓変更箇所
    }, [aa12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ac12judge,setac12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageac12judge = localStorage.getItem('ac12judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageac12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac12judge', JSON.stringify(ac12judge));
        // ↓↓変更箇所
    }, [ac12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ad12judge,setad12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStoragead12judge = localStorage.getItem('ad12judge');
        // ↓↓変更箇所
        return JSON.parse(localStoragead12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad12judge', JSON.stringify(ad12judge));
        // ↓↓変更箇所
    }, [ad12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [af12judge,setaf12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageaf12judge = localStorage.getItem('af12judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af12judge', JSON.stringify(af12judge));
        // ↓↓変更箇所
    }, [af12judge]);

    // ↓↓複製箇所
    // 座席の表示非表示をコントロールする変数
    // ↓↓変更箇所
    let [ag12judge,setag12judge] = useState<boolean>(() => {
        // ↓↓変更箇所
        const localStorageag12judge = localStorage.getItem('ag12judge');
        // ↓↓変更箇所
        return JSON.parse(localStorageag12judge ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag12judge', JSON.stringify(ag12judge));
        // ↓↓変更箇所
    }, [ag12judge]);
    

    // 複製終了(syuuryou)


    let count = 0;
    const judge = () => {
        let boolean;
        count += 1;
        if(count % 2 == 0) {
            boolean = true;
            // ↓↓複製箇所
            seth1judge(boolean);
            // ↓↓複製箇所
            seti1judge(boolean);
            // ↓↓複製箇所
            setk1judge(boolean);
            // ↓↓複製箇所
            setl1judge(boolean);
            // ↓↓複製箇所
            seto1judge(boolean);
            // ↓↓複製箇所
            setr1judge(boolean);
            // ↓↓複製箇所
            setx1judge(boolean);
            // ↓↓複製箇所
            setaa1judge(boolean);
            // ↓↓複製箇所
            setb2judge(boolean);
            // ↓↓複製箇所
            setc2judge(boolean);
            // ↓↓複製箇所
            sete2judge(boolean);
            // ↓↓複製箇所
            setf2judge(boolean);
            // ↓↓複製箇所
            seth2judge(boolean);
            // ↓↓複製箇所
            seti2judge(boolean);
            // ↓↓複製箇所
            setk2judge(boolean);
            // ↓↓複製箇所
            setl2judge(boolean);
            // ↓↓複製箇所
            setb3judge(boolean);
            // ↓↓複製箇所
            setc3judge(boolean);
            // ↓↓複製箇所
            sete3judge(boolean);
            // ↓↓複製箇所
            setf3judge(boolean);
            // ↓↓複製箇所
            seth3judge(boolean);
            // ↓↓複製箇所
            seti3judge(boolean);
            // ↓↓複製箇所
            setk3judge(boolean);
            // ↓↓複製箇所
            setl3judge(boolean);
            // ↓↓複製箇所
            setn3judge(boolean);
            // ↓↓複製箇所
            seto3judge(boolean);
            // ↓↓複製箇所
            setq3judge(boolean);
            // ↓↓複製箇所
            setr3judge(boolean);
            // ↓↓複製箇所
            sett3judge(boolean);
            // ↓↓複製箇所
            setu3judge(boolean);
            // ↓↓複製箇所
            setw3judge(boolean);
            // ↓↓複製箇所
            setx3judge(boolean);
            // ↓↓複製箇所
            setz3judge(boolean);
            // ↓↓複製箇所
            setaa3judge(boolean);
            // ↓↓複製箇所
            setac3judge(boolean);
            // ↓↓複製箇所
            setad3judge(boolean);
            // ↓↓複製箇所
            setaf3judge(boolean);
            // ↓↓複製箇所
            setag3judge(boolean);
            // ↓↓複製箇所
            setb4judge(boolean);
            // ↓↓複製箇所
            setc4judge(boolean);
            // ↓↓複製箇所
            sete4judge(boolean);
            // ↓↓複製箇所
            setf4judge(boolean);
            // ↓↓複製箇所
            seth4judge(boolean);
            // ↓↓複製箇所
            seti4judge(boolean);
            // ↓↓複製箇所
            setk4judge(boolean);
            // ↓↓複製箇所
            setl4judge(boolean);
            // ↓↓複製箇所
            setn4judge(boolean);
            // ↓↓複製箇所
            seto4judge(boolean);
            // ↓↓複製箇所
            setq4judge(boolean);
            // ↓↓複製箇所
            setr4judge(boolean);
            // ↓↓複製箇所
            sett4judge(boolean);
            // ↓↓複製箇所
            setu4judge(boolean);
            // ↓↓複製箇所
            setw4judge(boolean);
            // ↓↓複製箇所
            setx4judge(boolean);
            // ↓↓複製箇所
            setz4judge(boolean);
            // ↓↓複製箇所
            setaa4judge(boolean);
            // ↓↓複製箇所
            setac4judge(boolean);
            // ↓↓複製箇所
            setad4judge(boolean);
            // ↓↓複製箇所
            setaf4judge(boolean);
            // ↓↓複製箇所
            setag4judge(boolean);
            // ↓↓複製箇所
            setb5judge(boolean);
            // ↓↓複製箇所
            setc5judge(boolean);
            // ↓↓複製箇所
            sete5judge(boolean);
            // ↓↓複製箇所
            setf5judge(boolean);
            // ↓↓複製箇所
            seth5judge(boolean);
            // ↓↓複製箇所
            seti5judge(boolean);
            // ↓↓複製箇所
            setk5judge(boolean);
            // ↓↓複製箇所
            setl5judge(boolean);
            // ↓↓複製箇所
            setn5judge(boolean);
            // ↓↓複製箇所
            seto5judge(boolean);
            // ↓↓複製箇所
            setq5judge(boolean);
            // ↓↓複製箇所
            setr5judge(boolean);
            // ↓↓複製箇所
            sett5judge(boolean);
            // ↓↓複製箇所
            setu5judge(boolean);
            // ↓↓複製箇所
            setw5judge(boolean);
            // ↓↓複製箇所
            setx5judge(boolean);
            // ↓↓複製箇所
            setz5judge(boolean);
            // ↓↓複製箇所
            setaa5judge(boolean);
            // ↓↓複製箇所
            setac5judge(boolean);
            // ↓↓複製箇所
            setad5judge(boolean);
            // ↓↓複製箇所
            setaf5judge(boolean);
            // ↓↓複製箇所
            setag5judge(boolean);
            // ↓↓複製箇所
            setb6judge(boolean);
            // ↓↓複製箇所
            setc6judge(boolean);
            // ↓↓複製箇所
            sete6judge(boolean);
            // ↓↓複製箇所
            setf6judge(boolean);
            // ↓↓複製箇所
            seth6judge(boolean);
            // ↓↓複製箇所
            seti6judge(boolean);
            // ↓↓複製箇所
            setk6judge(boolean);
            // ↓↓複製箇所
            setl6judge(boolean);
            // ↓↓複製箇所
            setn6judge(boolean);
            // ↓↓複製箇所
            seto6judge(boolean);
            // ↓↓複製箇所
            setq6judge(boolean);
            // ↓↓複製箇所
            setr6judge(boolean);
            // ↓↓複製箇所
            sett6judge(boolean);
            // ↓↓複製箇所
            setu6judge(boolean);
            // ↓↓複製箇所
            setw6judge(boolean);
            // ↓↓複製箇所
            setx6judge(boolean);
            // ↓↓複製箇所
            setz6judge(boolean);
            // ↓↓複製箇所
            setaa6judge(boolean);
            // ↓↓複製箇所
            setac6judge(boolean);
            // ↓↓複製箇所
            setad6judge(boolean);
            // ↓↓複製箇所
            setaf6judge(boolean);
            // ↓↓複製箇所
            setag6judge(boolean);
            // ↓↓複製箇所
            setb7judge(boolean);
            // ↓↓複製箇所
            setc7judge(boolean);
            // ↓↓複製箇所
            sete7judge(boolean);
            // ↓↓複製箇所
            setf7judge(boolean);
            // ↓↓複製箇所
            seth7judge(boolean);
            // ↓↓複製箇所
            seti7judge(boolean);
            // ↓↓複製箇所
            setk7judge(boolean);
            // ↓↓複製箇所
            setl7judge(boolean);
            // ↓↓複製箇所
            setn7judge(boolean);
            // ↓↓複製箇所
            seto7judge(boolean);
            // ↓↓複製箇所
            setq7judge(boolean);
            // ↓↓複製箇所
            setr7judge(boolean);
            // ↓↓複製箇所
            sett7judge(boolean);
            // ↓↓複製箇所
            setu7judge(boolean);
            // ↓↓複製箇所
            setw7judge(boolean);
            // ↓↓複製箇所
            setx7judge(boolean);
            // ↓↓複製箇所
            setz7judge(boolean);
            // ↓↓複製箇所
            setaa7judge(boolean);
            // ↓↓複製箇所
            setac7judge(boolean);
            // ↓↓複製箇所
            setad7judge(boolean);
            // ↓↓複製箇所
            setaf7judge(boolean);
            // ↓↓複製箇所
            setag7judge(boolean);
            // ↓↓複製箇所
            setb8judge(boolean);
            // ↓↓複製箇所
            setc8judge(boolean);
            // ↓↓複製箇所
            sete8judge(boolean);
            // ↓↓複製箇所
            setf8judge(boolean);
            // ↓↓複製箇所
            seth8judge(boolean);
            // ↓↓複製箇所
            seti8judge(boolean);
            // ↓↓複製箇所
            setk8judge(boolean);
            // ↓↓複製箇所
            setl8judge(boolean);
            // ↓↓複製箇所
            setn8judge(boolean);
            // ↓↓複製箇所
            seto8judge(boolean);
            // ↓↓複製箇所
            setq8judge(boolean);
            // ↓↓複製箇所
            setr8judge(boolean);
            // ↓↓複製箇所
            sett8judge(boolean);
            // ↓↓複製箇所
            setu8judge(boolean);
            // ↓↓複製箇所
            setw8judge(boolean);
            // ↓↓複製箇所
            setx8judge(boolean);
            // ↓↓複製箇所
            setz8judge(boolean);
            // ↓↓複製箇所
            setaa8judge(boolean);
            // ↓↓複製箇所
            setac8judge(boolean);
            // ↓↓複製箇所
            setad8judge(boolean);
            // ↓↓複製箇所
            setaf8judge(boolean);
            // ↓↓複製箇所
            setag8judge(boolean);
            // ↓↓複製箇所
            setb9judge(boolean);
            // ↓↓複製箇所
            setc9judge(boolean);
            // ↓↓複製箇所
            sete9judge(boolean);
            // ↓↓複製箇所
            setf9judge(boolean);
            // ↓↓複製箇所
            seth9judge(boolean);
            // ↓↓複製箇所
            seti9judge(boolean);
            // ↓↓複製箇所
            setk9judge(boolean);
            // ↓↓複製箇所
            setl9judge(boolean);
            // ↓↓複製箇所
            setn9judge(boolean);
            // ↓↓複製箇所
            seto9judge(boolean);
            // ↓↓複製箇所
            setq9judge(boolean);
            // ↓↓複製箇所
            setr9judge(boolean);
            // ↓↓複製箇所
            sett9judge(boolean);
            // ↓↓複製箇所
            setu9judge(boolean);
            // ↓↓複製箇所
            setw9judge(boolean);
            // ↓↓複製箇所
            setx9judge(boolean);
            // ↓↓複製箇所
            setz9judge(boolean);
            // ↓↓複製箇所
            setaa9judge(boolean);
            // ↓↓複製箇所
            setac9judge(boolean);
            // ↓↓複製箇所
            setad9judge(boolean);
            // ↓↓複製箇所
            setaf9judge(boolean);
            // ↓↓複製箇所
            setag9judge(boolean);
            // ↓↓複製箇所
            setb11judge(boolean);
            // ↓↓複製箇所
            setc11judge(boolean);
            // ↓↓複製箇所
            sete11judge(boolean);
            // ↓↓複製箇所
            setf11judge(boolean);
            // ↓↓複製箇所
            seth11judge(boolean);
            // ↓↓複製箇所
            seti11judge(boolean);
            // ↓↓複製箇所
            setk11judge(boolean);
            // ↓↓複製箇所
            setl11judge(boolean);
            // ↓↓複製箇所
            setn11judge(boolean);
            // ↓↓複製箇所
            seto11judge(boolean);
            // ↓↓複製箇所
            setq11judge(boolean);
            // ↓↓複製箇所
            setr11judge(boolean);
            // ↓↓複製箇所
            sett11judge(boolean);
            // ↓↓複製箇所
            setu11judge(boolean);
            // ↓↓複製箇所
            setw11judge(boolean);
            // ↓↓複製箇所
            setx11judge(boolean);
            // ↓↓複製箇所
            setz11judge(boolean);
            // ↓↓複製箇所
            setaa11judge(boolean);
            // ↓↓複製箇所
            setac11judge(boolean);
            // ↓↓複製箇所
            setad11judge(boolean);
            // ↓↓複製箇所
            setaf11judge(boolean);
            // ↓↓複製箇所
            setag11judge(boolean);
            // ↓↓複製箇所
            setb12judge(boolean);
            // ↓↓複製箇所
            setc12judge(boolean);
            // ↓↓複製箇所
            sete12judge(boolean);
            // ↓↓複製箇所
            setf12judge(boolean);
            // ↓↓複製箇所
            seth12judge(boolean);
            // ↓↓複製箇所
            seti12judge(boolean);
            // ↓↓複製箇所
            setk12judge(boolean);
            // ↓↓複製箇所
            setl12judge(boolean);
            // ↓↓複製箇所
            setn12judge(boolean);
            // ↓↓複製箇所
            seto12judge(boolean);
            // ↓↓複製箇所
            setq12judge(boolean);
            // ↓↓複製箇所
            setr12judge(boolean);
            // ↓↓複製箇所
            sett12judge(boolean);
            // ↓↓複製箇所
            setu12judge(boolean);
            // ↓↓複製箇所
            setw12judge(boolean);
            // ↓↓複製箇所
            setx12judge(boolean);
            // ↓↓複製箇所
            setz12judge(boolean);
            // ↓↓複製箇所
            setaa12judge(boolean);
            // ↓↓複製箇所
            setac12judge(boolean);
            // ↓↓複製箇所
            setad12judge(boolean);
            // ↓↓複製箇所
            setaf12judge(boolean);
            // ↓↓複製箇所
            setag12judge(boolean);
        } else {
            boolean = false;
            // ↓↓複製箇所
            seth1judge(boolean);
            // ↓↓複製箇所
            seti1judge(boolean);
            // ↓↓複製箇所
            setk1judge(boolean);
            // ↓↓複製箇所
            setl1judge(boolean);
            // ↓↓複製箇所
            seto1judge(boolean);
            // ↓↓複製箇所
            setr1judge(boolean);
            // ↓↓複製箇所
            setx1judge(boolean);
            // ↓↓複製箇所
            setaa1judge(boolean);
            // ↓↓複製箇所
            setb2judge(boolean);
            // ↓↓複製箇所
            setc2judge(boolean);
            // ↓↓複製箇所
            sete2judge(boolean);
            // ↓↓複製箇所
            setf2judge(boolean);
            // ↓↓複製箇所
            seth2judge(boolean);
            // ↓↓複製箇所
            seti2judge(boolean);
            // ↓↓複製箇所
            setk2judge(boolean);
            // ↓↓複製箇所
            setl2judge(boolean);
            // ↓↓複製箇所
            setb3judge(boolean);
            // ↓↓複製箇所
            setc3judge(boolean);
            // ↓↓複製箇所
            sete3judge(boolean);
            // ↓↓複製箇所
            setf3judge(boolean);
            // ↓↓複製箇所
            seth3judge(boolean);
            // ↓↓複製箇所
            seti3judge(boolean);
            // ↓↓複製箇所
            setk3judge(boolean);
            // ↓↓複製箇所
            setl3judge(boolean);
            // ↓↓複製箇所
            setn3judge(boolean);
            // ↓↓複製箇所
            seto3judge(boolean);
            // ↓↓複製箇所
            setq3judge(boolean);
            // ↓↓複製箇所
            setr3judge(boolean);
            // ↓↓複製箇所
            sett3judge(boolean);
            // ↓↓複製箇所
            setu3judge(boolean);
            // ↓↓複製箇所
            setw3judge(boolean);
            // ↓↓複製箇所
            setx3judge(boolean);
            // ↓↓複製箇所
            setz3judge(boolean);
            // ↓↓複製箇所
            setaa3judge(boolean);
            // ↓↓複製箇所
            setac3judge(boolean);
            // ↓↓複製箇所
            setad3judge(boolean);
            // ↓↓複製箇所
            setaf3judge(boolean);
            // ↓↓複製箇所
            setag3judge(boolean);
            // ↓↓複製箇所
            setb4judge(boolean);
            // ↓↓複製箇所
            setc4judge(boolean);
            // ↓↓複製箇所
            sete4judge(boolean);
            // ↓↓複製箇所
            setf4judge(boolean);
            // ↓↓複製箇所
            seth4judge(boolean);
            // ↓↓複製箇所
            seti4judge(boolean);
            // ↓↓複製箇所
            setk4judge(boolean);
            // ↓↓複製箇所
            setl4judge(boolean);
            // ↓↓複製箇所
            setn4judge(boolean);
            // ↓↓複製箇所
            seto4judge(boolean);
            // ↓↓複製箇所
            setq4judge(boolean);
            // ↓↓複製箇所
            setr4judge(boolean);
            // ↓↓複製箇所
            sett4judge(boolean);
            // ↓↓複製箇所
            setu4judge(boolean);
            // ↓↓複製箇所
            setw4judge(boolean);
            // ↓↓複製箇所
            setx4judge(boolean);
            // ↓↓複製箇所
            setz4judge(boolean);
            // ↓↓複製箇所
            setaa4judge(boolean);
            // ↓↓複製箇所
            setac4judge(boolean);
            // ↓↓複製箇所
            setad4judge(boolean);
            // ↓↓複製箇所
            setaf4judge(boolean);
            // ↓↓複製箇所
            setag4judge(boolean);
            // ↓↓複製箇所
            setb5judge(boolean);
            // ↓↓複製箇所
            setc5judge(boolean);
            // ↓↓複製箇所
            sete5judge(boolean);
            // ↓↓複製箇所
            setf5judge(boolean);
            // ↓↓複製箇所
            seth5judge(boolean);
            // ↓↓複製箇所
            seti5judge(boolean);
            // ↓↓複製箇所
            setk5judge(boolean);
            // ↓↓複製箇所
            setl5judge(boolean);
            // ↓↓複製箇所
            setn5judge(boolean);
            // ↓↓複製箇所
            seto5judge(boolean);
            // ↓↓複製箇所
            setq5judge(boolean);
            // ↓↓複製箇所
            setr5judge(boolean);
            // ↓↓複製箇所
            sett5judge(boolean);
            // ↓↓複製箇所
            setu5judge(boolean);
            // ↓↓複製箇所
            setw5judge(boolean);
            // ↓↓複製箇所
            setx5judge(boolean);
            // ↓↓複製箇所
            setz5judge(boolean);
            // ↓↓複製箇所
            setaa5judge(boolean);
            // ↓↓複製箇所
            setac5judge(boolean);
            // ↓↓複製箇所
            setad5judge(boolean);
            // ↓↓複製箇所
            setaf5judge(boolean);
            // ↓↓複製箇所
            setag5judge(boolean);
            // ↓↓複製箇所
            setb6judge(boolean);
            // ↓↓複製箇所
            setc6judge(boolean);
            // ↓↓複製箇所
            sete6judge(boolean);
            // ↓↓複製箇所
            setf6judge(boolean);
            // ↓↓複製箇所
            seth6judge(boolean);
            // ↓↓複製箇所
            seti6judge(boolean);
            // ↓↓複製箇所
            setk6judge(boolean);
            // ↓↓複製箇所
            setl6judge(boolean);
            // ↓↓複製箇所
            setn6judge(boolean);
            // ↓↓複製箇所
            seto6judge(boolean);
            // ↓↓複製箇所
            setq6judge(boolean);
            // ↓↓複製箇所
            setr6judge(boolean);
            // ↓↓複製箇所
            sett6judge(boolean);
            // ↓↓複製箇所
            setu6judge(boolean);
            // ↓↓複製箇所
            setw6judge(boolean);
            // ↓↓複製箇所
            setx6judge(boolean);
            // ↓↓複製箇所
            setz6judge(boolean);
            // ↓↓複製箇所
            setaa6judge(boolean);
            // ↓↓複製箇所
            setac6judge(boolean);
            // ↓↓複製箇所
            setad6judge(boolean);
            // ↓↓複製箇所
            setaf6judge(boolean);
            // ↓↓複製箇所
            setag6judge(boolean);
            // ↓↓複製箇所
            setb7judge(boolean);
            // ↓↓複製箇所
            setc7judge(boolean);
            // ↓↓複製箇所
            sete7judge(boolean);
            // ↓↓複製箇所
            setf7judge(boolean);
            // ↓↓複製箇所
            seth7judge(boolean);
            // ↓↓複製箇所
            seti7judge(boolean);
            // ↓↓複製箇所
            setk7judge(boolean);
            // ↓↓複製箇所
            setl7judge(boolean);
            // ↓↓複製箇所
            setn7judge(boolean);
            // ↓↓複製箇所
            seto7judge(boolean);
            // ↓↓複製箇所
            setq7judge(boolean);
            // ↓↓複製箇所
            setr7judge(boolean);
            // ↓↓複製箇所
            sett7judge(boolean);
            // ↓↓複製箇所
            setu7judge(boolean);
            // ↓↓複製箇所
            setw7judge(boolean);
            // ↓↓複製箇所
            setx7judge(boolean);
            // ↓↓複製箇所
            setz7judge(boolean);
            // ↓↓複製箇所
            setaa7judge(boolean);
            // ↓↓複製箇所
            setac7judge(boolean);
            // ↓↓複製箇所
            setad7judge(boolean);
            // ↓↓複製箇所
            setaf7judge(boolean);
            // ↓↓複製箇所
            setag7judge(boolean);
            // ↓↓複製箇所
            setb8judge(boolean);
            // ↓↓複製箇所
            setc8judge(boolean);
            // ↓↓複製箇所
            sete8judge(boolean);
            // ↓↓複製箇所
            setf8judge(boolean);
            // ↓↓複製箇所
            seth8judge(boolean);
            // ↓↓複製箇所
            seti8judge(boolean);
            // ↓↓複製箇所
            setk8judge(boolean);
            // ↓↓複製箇所
            setl8judge(boolean);
            // ↓↓複製箇所
            setn8judge(boolean);
            // ↓↓複製箇所
            seto8judge(boolean);
            // ↓↓複製箇所
            setq8judge(boolean);
            // ↓↓複製箇所
            setr8judge(boolean);
            // ↓↓複製箇所
            sett8judge(boolean);
            // ↓↓複製箇所
            setu8judge(boolean);
            // ↓↓複製箇所
            setw8judge(boolean);
            // ↓↓複製箇所
            setx8judge(boolean);
            // ↓↓複製箇所
            setz8judge(boolean);
            // ↓↓複製箇所
            setaa8judge(boolean);
            // ↓↓複製箇所
            setac8judge(boolean);
            // ↓↓複製箇所
            setad8judge(boolean);
            // ↓↓複製箇所
            setaf8judge(boolean);
            // ↓↓複製箇所
            setag8judge(boolean);
            // ↓↓複製箇所
            setb9judge(boolean);
            // ↓↓複製箇所
            setc9judge(boolean);
            // ↓↓複製箇所
            sete9judge(boolean);
            // ↓↓複製箇所
            setf9judge(boolean);
            // ↓↓複製箇所
            seth9judge(boolean);
            // ↓↓複製箇所
            seti9judge(boolean);
            // ↓↓複製箇所
            setk9judge(boolean);
            // ↓↓複製箇所
            setl9judge(boolean);
            // ↓↓複製箇所
            setn9judge(boolean);
            // ↓↓複製箇所
            seto9judge(boolean);
            // ↓↓複製箇所
            setq9judge(boolean);
            // ↓↓複製箇所
            setr9judge(boolean);
            // ↓↓複製箇所
            sett9judge(boolean);
            // ↓↓複製箇所
            setu9judge(boolean);
            // ↓↓複製箇所
            setw9judge(boolean);
            // ↓↓複製箇所
            setx9judge(boolean);
            // ↓↓複製箇所
            setz9judge(boolean);
            // ↓↓複製箇所
            setaa9judge(boolean);
            // ↓↓複製箇所
            setac9judge(boolean);
            // ↓↓複製箇所
            setad9judge(boolean);
            // ↓↓複製箇所
            setaf9judge(boolean);
            // ↓↓複製箇所
            setag9judge(boolean);
            // ↓↓複製箇所
            setb11judge(boolean);
            // ↓↓複製箇所
            setc11judge(boolean);
            // ↓↓複製箇所
            sete11judge(boolean);
            // ↓↓複製箇所
            setf11judge(boolean);
            // ↓↓複製箇所
            seth11judge(boolean);
            // ↓↓複製箇所
            seti11judge(boolean);
            // ↓↓複製箇所
            setk11judge(boolean);
            // ↓↓複製箇所
            setl11judge(boolean);
            // ↓↓複製箇所
            setn11judge(boolean);
            // ↓↓複製箇所
            seto11judge(boolean);
            // ↓↓複製箇所
            setq11judge(boolean);
            // ↓↓複製箇所
            setr11judge(boolean);
            // ↓↓複製箇所
            sett11judge(boolean);
            // ↓↓複製箇所
            setu11judge(boolean);
            // ↓↓複製箇所
            setw11judge(boolean);
            // ↓↓複製箇所
            setx11judge(boolean);
            // ↓↓複製箇所
            setz11judge(boolean);
            // ↓↓複製箇所
            setaa11judge(boolean);
            // ↓↓複製箇所
            setac11judge(boolean);
            // ↓↓複製箇所
            setad11judge(boolean);
            // ↓↓複製箇所
            setaf11judge(boolean);
            // ↓↓複製箇所
            setag11judge(boolean);
            // ↓↓複製箇所
            setb12judge(boolean);
            // ↓↓複製箇所
            setc12judge(boolean);
            // ↓↓複製箇所
            sete12judge(boolean);
            // ↓↓複製箇所
            setf12judge(boolean);
            // ↓↓複製箇所
            seth12judge(boolean);
            // ↓↓複製箇所
            seti12judge(boolean);
            // ↓↓複製箇所
            setk12judge(boolean);
            // ↓↓複製箇所
            setl12judge(boolean);
            // ↓↓複製箇所
            setn12judge(boolean);
            // ↓↓複製箇所
            seto12judge(boolean);
            // ↓↓複製箇所
            setq12judge(boolean);
            // ↓↓複製箇所
            setr12judge(boolean);
            // ↓↓複製箇所
            sett12judge(boolean);
            // ↓↓複製箇所
            setu12judge(boolean);
            // ↓↓複製箇所
            setw12judge(boolean);
            // ↓↓複製箇所
            setx12judge(boolean);
            // ↓↓複製箇所
            setz12judge(boolean);
            // ↓↓複製箇所
            setaa12judge(boolean);
            // ↓↓複製箇所
            setac12judge(boolean);
            // ↓↓複製箇所
            setad12judge(boolean);
            // ↓↓複製箇所
            setaf12judge(boolean);
            // ↓↓複製箇所
            setag12judge(boolean);
        }
        // console.log(count);
        // console.log(h1);
    }

    // 配列番号をコントロールする変数
    const [resetcount,setresetcount] = useState<number>(() => {
        
        const localStorageResetcount = localStorage.getItem('resetcount');
        
        return JSON.parse(localStorageResetcount ?? '[]');
    });

    useEffect(() => {
        // ローカルストレージに保存
        
        localStorage.setItem('resetcount', JSON.stringify(resetcount));

        // console.log(resetcount);
        
    }, [resetcount]);

    const zero = 0;
    let [lodejudge,setlodejudge] = useState(false);
    const lodejudgefunc = () => {
        let boolean = true;
        setlodejudge(boolean);
        
    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [h1place,seth1place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageH1place = localStorage.getItem('h1place');
        // ↓↓変更箇所
        return JSON.parse(localStorageH1place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h1place', JSON.stringify(h1place));
        // ↓↓変更箇所
    }, [h1place]);
    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    let h1placefunc = () => {
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return h1place;
        }else{
            // ↓↓変更箇所
            // console.log('h1zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [i1place,seti1place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageI1place = localStorage.getItem('i1place');
        // ↓↓変更箇所
        return JSON.parse(localStorageI1place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i1place', JSON.stringify(i1place));
        // ↓↓変更箇所
    }, [i1place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const i1placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return i1place;
        }else{
            // ↓↓変更箇所
            // console.log('i1zero');
            return 0;
        }
        // return 0;

    };
    
    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [k1place,setk1place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageK1place = localStorage.getItem('k1place');
        // ↓↓変更箇所
        return JSON.parse(localStorageK1place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k1place', JSON.stringify(k1place));
        // ↓↓変更箇所
    }, [k1place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const k1placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return k1place;
        }else{
            // ↓↓変更箇所
            // console.log('k1zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [l1place,setl1place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragel1place = localStorage.getItem('l1place');
        // ↓↓変更箇所
        return JSON.parse(localStoragel1place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l1place', JSON.stringify(l1place));
        // ↓↓変更箇所
    }, [l1place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const l1placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return l1place;
        }else{
            // ↓↓変更箇所
            // console.log('l1zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [o1place,seto1place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageo1place = localStorage.getItem('o1place');
        // ↓↓変更箇所
        return JSON.parse(localStorageo1place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o1place', JSON.stringify(o1place));
        // ↓↓変更箇所
    }, [o1place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const o1placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return o1place;
        }else{
            // ↓↓変更箇所
            // console.log('o1zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [r1place,setr1place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorager1place = localStorage.getItem('r1place');
        // ↓↓変更箇所
        return JSON.parse(localStorager1place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r1place', JSON.stringify(r1place));
        // ↓↓変更箇所
    }, [r1place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const r1placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return r1place;
        }else{
            // ↓↓変更箇所
            // console.log('r1zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [x1place,setx1place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragex1place = localStorage.getItem('x1place');
        // ↓↓変更箇所
        return JSON.parse(localStoragex1place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x1place', JSON.stringify(x1place));
        // ↓↓変更箇所
    }, [x1place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const x1placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return x1place;
        }else{
            // ↓↓変更箇所
            // console.log('x1zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [aa1place,setaa1place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaa1place = localStorage.getItem('aa1place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa1place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa1place', JSON.stringify(aa1place));
        // ↓↓変更箇所
    }, [aa1place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const aa1placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return aa1place;
        }else{
            // ↓↓変更箇所
            // console.log('aa1zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [b2place,setb2place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageb2place = localStorage.getItem('b2place');
        // ↓↓変更箇所
        return JSON.parse(localStorageb2place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b2place', JSON.stringify(b2place));
        // ↓↓変更箇所
    }, [b2place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const b2placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return b2place;
        }else{
            // ↓↓変更箇所
            // console.log('b2zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [c2place,setc2place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragec2place = localStorage.getItem('c2place');
        // ↓↓変更箇所
        return JSON.parse(localStoragec2place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c2place', JSON.stringify(c2place));
        // ↓↓変更箇所
    }, [c2place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const c2placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return c2place;
        }else{
            // ↓↓変更箇所
            // console.log('c2zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [e2place,sete2place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragee2place = localStorage.getItem('e2place');
        // ↓↓変更箇所
        return JSON.parse(localStoragee2place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e2place', JSON.stringify(e2place));
        // ↓↓変更箇所
    }, [e2place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const e2placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return e2place;
        }else{
            // ↓↓変更箇所
            // console.log('e2zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [f2place,setf2place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragef2place = localStorage.getItem('f2place');
        // ↓↓変更箇所
        return JSON.parse(localStoragef2place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f2place', JSON.stringify(f2place));
        // ↓↓変更箇所
    }, [f2place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const f2placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return f2place;
        }else{
            // ↓↓変更箇所
            // console.log('f2zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [h2place,seth2place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageh2place = localStorage.getItem('h2place');
        // ↓↓変更箇所
        return JSON.parse(localStorageh2place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h2place', JSON.stringify(h2place));
        // ↓↓変更箇所
    }, [h2place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const h2placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return h2place;
        }else{
            // ↓↓変更箇所
            // console.log('h2zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [i2place,seti2place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragei2place = localStorage.getItem('i2place');
        // ↓↓変更箇所
        return JSON.parse(localStoragei2place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i2place', JSON.stringify(i2place));
        // ↓↓変更箇所
    }, [i2place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const i2placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return i2place;
        }else{
            // ↓↓変更箇所
            // console.log('i2zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [k2place,setk2place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragek2place = localStorage.getItem('k2place');
        // ↓↓変更箇所
        return JSON.parse(localStoragek2place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k2place', JSON.stringify(k2place));
        // ↓↓変更箇所
    }, [k2place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const k2placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return k2place;
        }else{
            // ↓↓変更箇所
            // console.log('k2zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [l2place,setl2place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragel2place = localStorage.getItem('l2place');
        // ↓↓変更箇所
        return JSON.parse(localStoragel2place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l2place', JSON.stringify(l2place));
        // ↓↓変更箇所
    }, [l2place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const l2placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return l2place;
        }else{
            // ↓↓変更箇所
            // console.log('l2zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [b3place,setb3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageb3place = localStorage.getItem('b3place');
        // ↓↓変更箇所
        return JSON.parse(localStorageb3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b3place', JSON.stringify(b3place));
        // ↓↓変更箇所
    }, [b3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const b3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return b3place;
        }else{
            // ↓↓変更箇所
            // console.log('b3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [c3place,setc3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragec3place = localStorage.getItem('c3place');
        // ↓↓変更箇所
        return JSON.parse(localStoragec3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c3place', JSON.stringify(c3place));
        // ↓↓変更箇所
    }, [c3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const c3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return c3place;
        }else{
            // ↓↓変更箇所
            // console.log('c3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [e3place,sete3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragee3place = localStorage.getItem('e3place');
        // ↓↓変更箇所
        return JSON.parse(localStoragee3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e3place', JSON.stringify(e3place));
        // ↓↓変更箇所
    }, [e3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const e3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return e3place;
        }else{
            // ↓↓変更箇所
            // console.log('e3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [f3place,setf3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragef3place = localStorage.getItem('f3place');
        // ↓↓変更箇所
        return JSON.parse(localStoragef3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f3place', JSON.stringify(f3place));
        // ↓↓変更箇所
    }, [f3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const f3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return f3place;
        }else{
            // ↓↓変更箇所
            // console.log('f3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [h3place,seth3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageh3place = localStorage.getItem('h3place');
        // ↓↓変更箇所
        return JSON.parse(localStorageh3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h3place', JSON.stringify(h3place));
        // ↓↓変更箇所
    }, [h3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const h3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return h3place;
        }else{
            // ↓↓変更箇所
            // console.log('h3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [i3place,seti3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragei3place = localStorage.getItem('i3place');
        // ↓↓変更箇所
        return JSON.parse(localStoragei3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i3place', JSON.stringify(i3place));
        // ↓↓変更箇所
    }, [i3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const i3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return i3place;
        }else{
            // ↓↓変更箇所
            // console.log('i3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [k3place,setk3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragek3place = localStorage.getItem('k3place');
        // ↓↓変更箇所
        return JSON.parse(localStoragek3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k3place', JSON.stringify(k3place));
        // ↓↓変更箇所
    }, [k3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const k3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return k3place;
        }else{
            // ↓↓変更箇所
            // console.log('k3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [l3place,setl3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragel3place = localStorage.getItem('l3place');
        // ↓↓変更箇所
        return JSON.parse(localStoragel3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l3place', JSON.stringify(l3place));
        // ↓↓変更箇所
    }, [l3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const l3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return l3place;
        }else{
            // ↓↓変更箇所
            // console.log('l3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [n3place,setn3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragen3place = localStorage.getItem('n3place');
        // ↓↓変更箇所
        return JSON.parse(localStoragen3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n3place', JSON.stringify(n3place));
        // ↓↓変更箇所
    }, [n3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const n3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return n3place;
        }else{
            // ↓↓変更箇所
            // console.log('n3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [o3place,seto3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageo3place = localStorage.getItem('o3place');
        // ↓↓変更箇所
        return JSON.parse(localStorageo3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o3place', JSON.stringify(o3place));
        // ↓↓変更箇所
    }, [o3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const o3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return o3place;
        }else{
            // ↓↓変更箇所
            // console.log('o3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [q3place,setq3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageq3place = localStorage.getItem('q3place');
        // ↓↓変更箇所
        return JSON.parse(localStorageq3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q3place', JSON.stringify(q3place));
        // ↓↓変更箇所
    }, [q3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const q3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return q3place;
        }else{
            // ↓↓変更箇所
            // console.log('q3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [r3place,setr3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorager3place = localStorage.getItem('r3place');
        // ↓↓変更箇所
        return JSON.parse(localStorager3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r3place', JSON.stringify(r3place));
        // ↓↓変更箇所
    }, [r3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const r3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return r3place;
        }else{
            // ↓↓変更箇所
            // console.log('r3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [t3place,sett3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoraget3place = localStorage.getItem('t3place');
        // ↓↓変更箇所
        return JSON.parse(localStoraget3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t3place', JSON.stringify(t3place));
        // ↓↓変更箇所
    }, [t3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const t3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return t3place;
        }else{
            // ↓↓変更箇所
            // console.log('t3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [u3place,setu3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageu3place = localStorage.getItem('u3place');
        // ↓↓変更箇所
        return JSON.parse(localStorageu3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u3place', JSON.stringify(u3place));
        // ↓↓変更箇所
    }, [u3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const u3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return u3place;
        }else{
            // ↓↓変更箇所
            // console.log('u3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [w3place,setw3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragew3place = localStorage.getItem('w3place');
        // ↓↓変更箇所
        return JSON.parse(localStoragew3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w3place', JSON.stringify(w3place));
        // ↓↓変更箇所
    }, [w3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const w3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return w3place;
        }else{
            // ↓↓変更箇所
            // console.log('w3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [x3place,setx3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragex3place = localStorage.getItem('x3place');
        // ↓↓変更箇所
        return JSON.parse(localStoragex3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x3place', JSON.stringify(x3place));
        // ↓↓変更箇所
    }, [x3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const x3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return x3place;
        }else{
            // ↓↓変更箇所
            // console.log('x3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [z3place,setz3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragez3place = localStorage.getItem('z3place');
        // ↓↓変更箇所
        return JSON.parse(localStoragez3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z3place', JSON.stringify(z3place));
        // ↓↓変更箇所
    }, [z3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const z3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return z3place;
        }else{
            // ↓↓変更箇所
            // console.log('z3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [aa3place,setaa3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaa3place = localStorage.getItem('aa3place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa3place', JSON.stringify(aa3place));
        // ↓↓変更箇所
    }, [aa3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const aa3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return aa3place;
        }else{
            // ↓↓変更箇所
            // console.log('aa3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ac3place,setac3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageac3place = localStorage.getItem('ac3place');
        // ↓↓変更箇所
        return JSON.parse(localStorageac3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac3place', JSON.stringify(ac3place));
        // ↓↓変更箇所
    }, [ac3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ac3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ac3place;
        }else{
            // ↓↓変更箇所
            // console.log('ac3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ad3place,setad3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragead3place = localStorage.getItem('ad3place');
        // ↓↓変更箇所
        return JSON.parse(localStoragead3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad3place', JSON.stringify(ad3place));
        // ↓↓変更箇所
    }, [ad3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ad3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ad3place;
        }else{
            // ↓↓変更箇所
            // console.log('ad3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [af3place,setaf3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaf3place = localStorage.getItem('af3place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af3place', JSON.stringify(af3place));
        // ↓↓変更箇所
    }, [af3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const af3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return af3place;
        }else{
            // ↓↓変更箇所
            // console.log('af3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ag3place,setag3place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageag3place = localStorage.getItem('ag3place');
        // ↓↓変更箇所
        return JSON.parse(localStorageag3place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag3place', JSON.stringify(ag3place));
        // ↓↓変更箇所
    }, [ag3place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ag3placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ag3place;
        }else{
            // ↓↓変更箇所
            // console.log('ag3zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [b4place,setb4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageb4place = localStorage.getItem('b4place');
        // ↓↓変更箇所
        return JSON.parse(localStorageb4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b4place', JSON.stringify(b4place));
        // ↓↓変更箇所
    }, [b4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const b4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return b4place;
        }else{
            // ↓↓変更箇所
            // console.log('b4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [c4place,setc4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragec4place = localStorage.getItem('c4place');
        // ↓↓変更箇所
        return JSON.parse(localStoragec4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c4place', JSON.stringify(c4place));
        // ↓↓変更箇所
    }, [c4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const c4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return c4place;
        }else{
            // ↓↓変更箇所
            // console.log('c4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [e4place,sete4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragee4place = localStorage.getItem('e4place');
        // ↓↓変更箇所
        return JSON.parse(localStoragee4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e4place', JSON.stringify(e4place));
        // ↓↓変更箇所
    }, [e4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const e4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return e4place;
        }else{
            // ↓↓変更箇所
            // console.log('e4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [f4place,setf4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragef4place = localStorage.getItem('f4place');
        // ↓↓変更箇所
        return JSON.parse(localStoragef4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f4place', JSON.stringify(f4place));
        // ↓↓変更箇所
    }, [f4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const f4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return f4place;
        }else{
            // ↓↓変更箇所
            // console.log('f4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [h4place,seth4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageh4place = localStorage.getItem('h4place');
        // ↓↓変更箇所
        return JSON.parse(localStorageh4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h4place', JSON.stringify(h4place));
        // ↓↓変更箇所
    }, [h4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const h4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return h4place;
        }else{
            // ↓↓変更箇所
            // console.log('h4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [i4place,seti4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragei4place = localStorage.getItem('i4place');
        // ↓↓変更箇所
        return JSON.parse(localStoragei4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i4place', JSON.stringify(i4place));
        // ↓↓変更箇所
    }, [i4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const i4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return i4place;
        }else{
            // ↓↓変更箇所
            // console.log('i4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [k4place,setk4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragek4place = localStorage.getItem('k4place');
        // ↓↓変更箇所
        return JSON.parse(localStoragek4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k4place', JSON.stringify(k4place));
        // ↓↓変更箇所
    }, [k4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const k4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return k4place;
        }else{
            // ↓↓変更箇所
            // console.log('k4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [l4place,setl4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragel4place = localStorage.getItem('l4place');
        // ↓↓変更箇所
        return JSON.parse(localStoragel4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l4place', JSON.stringify(l4place));
        // ↓↓変更箇所
    }, [l4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const l4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return l4place;
        }else{
            // ↓↓変更箇所
            // console.log('l4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [n4place,setn4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragen4place = localStorage.getItem('n4place');
        // ↓↓変更箇所
        return JSON.parse(localStoragen4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n4place', JSON.stringify(n4place));
        // ↓↓変更箇所
    }, [n4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const n4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return n4place;
        }else{
            // ↓↓変更箇所
            // console.log('n4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [o4place,seto4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageo4place = localStorage.getItem('o4place');
        // ↓↓変更箇所
        return JSON.parse(localStorageo4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o4place', JSON.stringify(o4place));
        // ↓↓変更箇所
    }, [o4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const o4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return o4place;
        }else{
            // ↓↓変更箇所
            // console.log('o4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [q4place,setq4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageq4place = localStorage.getItem('q4place');
        // ↓↓変更箇所
        return JSON.parse(localStorageq4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q4place', JSON.stringify(q4place));
        // ↓↓変更箇所
    }, [q4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const q4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return q4place;
        }else{
            // ↓↓変更箇所
            // console.log('q4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [r4place,setr4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorager4place = localStorage.getItem('r4place');
        // ↓↓変更箇所
        return JSON.parse(localStorager4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r4place', JSON.stringify(r4place));
        // ↓↓変更箇所
    }, [r4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const r4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return r4place;
        }else{
            // ↓↓変更箇所
            // console.log('r4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [t4place,sett4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoraget4place = localStorage.getItem('t4place');
        // ↓↓変更箇所
        return JSON.parse(localStoraget4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t4place', JSON.stringify(t4place));
        // ↓↓変更箇所
    }, [t4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const t4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return t4place;
        }else{
            // ↓↓変更箇所
            // console.log('t4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [u4place,setu4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageu4place = localStorage.getItem('u4place');
        // ↓↓変更箇所
        return JSON.parse(localStorageu4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u4place', JSON.stringify(u4place));
        // ↓↓変更箇所
    }, [u4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const u4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return u4place;
        }else{
            // ↓↓変更箇所
            // console.log('u4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [w4place,setw4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragew4place = localStorage.getItem('w4place');
        // ↓↓変更箇所
        return JSON.parse(localStoragew4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w4place', JSON.stringify(w4place));
        // ↓↓変更箇所
    }, [w4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const w4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return w4place;
        }else{
            // ↓↓変更箇所
            // console.log('w4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [x4place,setx4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragex4place = localStorage.getItem('x4place');
        // ↓↓変更箇所
        return JSON.parse(localStoragex4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x4place', JSON.stringify(x4place));
        // ↓↓変更箇所
    }, [x4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const x4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return x4place;
        }else{
            // ↓↓変更箇所
            // console.log('x4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [z4place,setz4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragez4place = localStorage.getItem('z4place');
        // ↓↓変更箇所
        return JSON.parse(localStoragez4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z4place', JSON.stringify(z4place));
        // ↓↓変更箇所
    }, [z4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const z4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return z4place;
        }else{
            // ↓↓変更箇所
            // console.log('z4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [aa4place,setaa4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaa4place = localStorage.getItem('aa4place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa4place', JSON.stringify(aa4place));
        // ↓↓変更箇所
    }, [aa4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const aa4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return aa4place;
        }else{
            // ↓↓変更箇所
            // console.log('aa4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ac4place,setac4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageac4place = localStorage.getItem('ac4place');
        // ↓↓変更箇所
        return JSON.parse(localStorageac4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac4place', JSON.stringify(ac4place));
        // ↓↓変更箇所
    }, [ac4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ac4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ac4place;
        }else{
            // ↓↓変更箇所
            // console.log('ac4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ad4place,setad4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragead4place = localStorage.getItem('ad4place');
        // ↓↓変更箇所
        return JSON.parse(localStoragead4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad4place', JSON.stringify(ad4place));
        // ↓↓変更箇所
    }, [ad4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ad4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ad4place;
        }else{
            // ↓↓変更箇所
            // console.log('ad4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [af4place,setaf4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaf4place = localStorage.getItem('af4place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af4place', JSON.stringify(af4place));
        // ↓↓変更箇所
    }, [af4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const af4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return af4place;
        }else{
            // ↓↓変更箇所
            // console.log('af4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ag4place,setag4place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageag4place = localStorage.getItem('ag4place');
        // ↓↓変更箇所
        return JSON.parse(localStorageag4place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag4place', JSON.stringify(ag4place));
        // ↓↓変更箇所
    }, [ag4place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ag4placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ag4place;
        }else{
            // ↓↓変更箇所
            // console.log('ag4zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [b5place,setb5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageb5place = localStorage.getItem('b5place');
        // ↓↓変更箇所
        return JSON.parse(localStorageb5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b5place', JSON.stringify(b5place));
        // ↓↓変更箇所
    }, [b5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const b5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return b5place;
        }else{
            // ↓↓変更箇所
            // console.log('b5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [c5place,setc5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragec5place = localStorage.getItem('c5place');
        // ↓↓変更箇所
        return JSON.parse(localStoragec5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c5place', JSON.stringify(c5place));
        // ↓↓変更箇所
    }, [c5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const c5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return c5place;
        }else{
            // ↓↓変更箇所
            // console.log('c5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [e5place,sete5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragee5place = localStorage.getItem('e5place');
        // ↓↓変更箇所
        return JSON.parse(localStoragee5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e5place', JSON.stringify(e5place));
        // ↓↓変更箇所
    }, [e5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const e5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return e5place;
        }else{
            // ↓↓変更箇所
            // console.log('e5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [f5place,setf5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragef5place = localStorage.getItem('f5place');
        // ↓↓変更箇所
        return JSON.parse(localStoragef5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f5place', JSON.stringify(f5place));
        // ↓↓変更箇所
    }, [f5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const f5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return f5place;
        }else{
            // ↓↓変更箇所
            // console.log('f5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [h5place,seth5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageh5place = localStorage.getItem('h5place');
        // ↓↓変更箇所
        return JSON.parse(localStorageh5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h5place', JSON.stringify(h5place));
        // ↓↓変更箇所
    }, [h5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const h5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return h5place;
        }else{
            // ↓↓変更箇所
            // console.log('h5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [i5place,seti5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragei5place = localStorage.getItem('i5place');
        // ↓↓変更箇所
        return JSON.parse(localStoragei5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i5place', JSON.stringify(i5place));
        // ↓↓変更箇所
    }, [i5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const i5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return i5place;
        }else{
            // ↓↓変更箇所
            // console.log('i5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [k5place,setk5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragek5place = localStorage.getItem('k5place');
        // ↓↓変更箇所
        return JSON.parse(localStoragek5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k5place', JSON.stringify(k5place));
        // ↓↓変更箇所
    }, [k5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const k5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return k5place;
        }else{
            // ↓↓変更箇所
            // console.log('k5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [l5place,setl5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragel5place = localStorage.getItem('l5place');
        // ↓↓変更箇所
        return JSON.parse(localStoragel5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l5place', JSON.stringify(l5place));
        // ↓↓変更箇所
    }, [l5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const l5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return l5place;
        }else{
            // ↓↓変更箇所
            // console.log('l5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [n5place,setn5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragen5place = localStorage.getItem('n5place');
        // ↓↓変更箇所
        return JSON.parse(localStoragen5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n5place', JSON.stringify(n5place));
        // ↓↓変更箇所
    }, [n5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const n5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return n5place;
        }else{
            // ↓↓変更箇所
            // console.log('n5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [o5place,seto5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageo5place = localStorage.getItem('o5place');
        // ↓↓変更箇所
        return JSON.parse(localStorageo5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o5place', JSON.stringify(o5place));
        // ↓↓変更箇所
    }, [o5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const o5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return o5place;
        }else{
            // ↓↓変更箇所
            // console.log('o5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [q5place,setq5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageq5place = localStorage.getItem('q5place');
        // ↓↓変更箇所
        return JSON.parse(localStorageq5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q5place', JSON.stringify(q5place));
        // ↓↓変更箇所
    }, [q5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const q5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return q5place;
        }else{
            // ↓↓変更箇所
            // console.log('q5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [r5place,setr5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorager5place = localStorage.getItem('r5place');
        // ↓↓変更箇所
        return JSON.parse(localStorager5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r5place', JSON.stringify(r5place));
        // ↓↓変更箇所
    }, [r5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const r5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return r5place;
        }else{
            // ↓↓変更箇所
            // console.log('r5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [t5place,sett5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoraget5place = localStorage.getItem('t5place');
        // ↓↓変更箇所
        return JSON.parse(localStoraget5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t5place', JSON.stringify(t5place));
        // ↓↓変更箇所
    }, [t5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const t5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return t5place;
        }else{
            // ↓↓変更箇所
            // console.log('t5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [u5place,setu5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageu5place = localStorage.getItem('u5place');
        // ↓↓変更箇所
        return JSON.parse(localStorageu5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u5place', JSON.stringify(u5place));
        // ↓↓変更箇所
    }, [u5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const u5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return u5place;
        }else{
            // ↓↓変更箇所
            // console.log('u5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [w5place,setw5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragew5place = localStorage.getItem('w5place');
        // ↓↓変更箇所
        return JSON.parse(localStoragew5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w5place', JSON.stringify(w5place));
        // ↓↓変更箇所
    }, [w5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const w5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return w5place;
        }else{
            // ↓↓変更箇所
            // console.log('w5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [x5place,setx5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragex5place = localStorage.getItem('x5place');
        // ↓↓変更箇所
        return JSON.parse(localStoragex5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x5place', JSON.stringify(x5place));
        // ↓↓変更箇所
    }, [x5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const x5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return x5place;
        }else{
            // ↓↓変更箇所
            // console.log('x5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [z5place,setz5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragez5place = localStorage.getItem('z5place');
        // ↓↓変更箇所
        return JSON.parse(localStoragez5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z5place', JSON.stringify(z5place));
        // ↓↓変更箇所
    }, [z5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const z5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return z5place;
        }else{
            // ↓↓変更箇所
            // console.log('z5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [aa5place,setaa5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaa5place = localStorage.getItem('aa5place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa5place', JSON.stringify(aa5place));
        // ↓↓変更箇所
    }, [aa5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const aa5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return aa5place;
        }else{
            // ↓↓変更箇所
            // console.log('aa5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ac5place,setac5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageac5place = localStorage.getItem('ac5place');
        // ↓↓変更箇所
        return JSON.parse(localStorageac5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac5place', JSON.stringify(ac5place));
        // ↓↓変更箇所
    }, [ac5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ac5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ac5place;
        }else{
            // ↓↓変更箇所
            // console.log('ac5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ad5place,setad5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragead5place = localStorage.getItem('ad5place');
        // ↓↓変更箇所
        return JSON.parse(localStoragead5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad5place', JSON.stringify(ad5place));
        // ↓↓変更箇所
    }, [ad5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ad5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ad5place;
        }else{
            // ↓↓変更箇所
            // console.log('ad5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [af5place,setaf5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaf5place = localStorage.getItem('af5place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af5place', JSON.stringify(af5place));
        // ↓↓変更箇所
    }, [af5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const af5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return af5place;
        }else{
            // ↓↓変更箇所
            // console.log('af5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ag5place,setag5place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageag5place = localStorage.getItem('ag5place');
        // ↓↓変更箇所
        return JSON.parse(localStorageag5place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag5place', JSON.stringify(ag5place));
        // ↓↓変更箇所
    }, [ag5place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ag5placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ag5place;
        }else{
            // ↓↓変更箇所
            // console.log('ag5zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [b6place,setb6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageb6place = localStorage.getItem('b6place');
        // ↓↓変更箇所
        return JSON.parse(localStorageb6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b6place', JSON.stringify(b6place));
        // ↓↓変更箇所
    }, [b6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const b6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return b6place;
        }else{
            // ↓↓変更箇所
            // console.log('b6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [c6place,setc6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragec6place = localStorage.getItem('c6place');
        // ↓↓変更箇所
        return JSON.parse(localStoragec6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c6place', JSON.stringify(c6place));
        // ↓↓変更箇所
    }, [c6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const c6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return c6place;
        }else{
            // ↓↓変更箇所
            // console.log('c6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [e6place,sete6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragee6place = localStorage.getItem('e6place');
        // ↓↓変更箇所
        return JSON.parse(localStoragee6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e6place', JSON.stringify(e6place));
        // ↓↓変更箇所
    }, [e6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const e6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return e6place;
        }else{
            // ↓↓変更箇所
            // console.log('e6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [f6place,setf6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragef6place = localStorage.getItem('f6place');
        // ↓↓変更箇所
        return JSON.parse(localStoragef6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f6place', JSON.stringify(f6place));
        // ↓↓変更箇所
    }, [f6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const f6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return f6place;
        }else{
            // ↓↓変更箇所
            // console.log('f6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [h6place,seth6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageh6place = localStorage.getItem('h6place');
        // ↓↓変更箇所
        return JSON.parse(localStorageh6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h6place', JSON.stringify(h6place));
        // ↓↓変更箇所
    }, [h6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const h6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return h6place;
        }else{
            // ↓↓変更箇所
            // console.log('h6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [i6place,seti6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragei6place = localStorage.getItem('i6place');
        // ↓↓変更箇所
        return JSON.parse(localStoragei6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i6place', JSON.stringify(i6place));
        // ↓↓変更箇所
    }, [i6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const i6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return i6place;
        }else{
            // ↓↓変更箇所
            // console.log('i6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [k6place,setk6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragek6place = localStorage.getItem('k6place');
        // ↓↓変更箇所
        return JSON.parse(localStoragek6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k6place', JSON.stringify(k6place));
        // ↓↓変更箇所
    }, [k6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const k6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return k6place;
        }else{
            // ↓↓変更箇所
            // console.log('k6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [l6place,setl6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragel6place = localStorage.getItem('l6place');
        // ↓↓変更箇所
        return JSON.parse(localStoragel6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l6place', JSON.stringify(l6place));
        // ↓↓変更箇所
    }, [l6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const l6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return l6place;
        }else{
            // ↓↓変更箇所
            // console.log('l6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [n6place,setn6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragen6place = localStorage.getItem('n6place');
        // ↓↓変更箇所
        return JSON.parse(localStoragen6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n6place', JSON.stringify(n6place));
        // ↓↓変更箇所
    }, [n6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const n6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return n6place;
        }else{
            // ↓↓変更箇所
            // console.log('n6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [o6place,seto6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageo6place = localStorage.getItem('o6place');
        // ↓↓変更箇所
        return JSON.parse(localStorageo6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o6place', JSON.stringify(o6place));
        // ↓↓変更箇所
    }, [o6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const o6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return o6place;
        }else{
            // ↓↓変更箇所
            // console.log('o6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [q6place,setq6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageq6place = localStorage.getItem('q6place');
        // ↓↓変更箇所
        return JSON.parse(localStorageq6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q6place', JSON.stringify(q6place));
        // ↓↓変更箇所
    }, [q6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const q6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return q6place;
        }else{
            // ↓↓変更箇所
            // console.log('q6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [r6place,setr6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorager6place = localStorage.getItem('r6place');
        // ↓↓変更箇所
        return JSON.parse(localStorager6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r6place', JSON.stringify(r6place));
        // ↓↓変更箇所
    }, [r6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const r6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return r6place;
        }else{
            // ↓↓変更箇所
            // console.log('r6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [t6place,sett6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoraget6place = localStorage.getItem('t6place');
        // ↓↓変更箇所
        return JSON.parse(localStoraget6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t6place', JSON.stringify(t6place));
        // ↓↓変更箇所
    }, [t6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const t6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return t6place;
        }else{
            // ↓↓変更箇所
            // console.log('t6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [u6place,setu6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageu6place = localStorage.getItem('u6place');
        // ↓↓変更箇所
        return JSON.parse(localStorageu6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u6place', JSON.stringify(u6place));
        // ↓↓変更箇所
    }, [u6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const u6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return u6place;
        }else{
            // ↓↓変更箇所
            // console.log('u6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [w6place,setw6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragew6place = localStorage.getItem('w6place');
        // ↓↓変更箇所
        return JSON.parse(localStoragew6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w6place', JSON.stringify(w6place));
        // ↓↓変更箇所
    }, [w6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const w6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return w6place;
        }else{
            // ↓↓変更箇所
            // console.log('w6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [x6place,setx6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragex6place = localStorage.getItem('x6place');
        // ↓↓変更箇所
        return JSON.parse(localStoragex6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x6place', JSON.stringify(x6place));
        // ↓↓変更箇所
    }, [x6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const x6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return x6place;
        }else{
            // ↓↓変更箇所
            // console.log('x6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [z6place,setz6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragez6place = localStorage.getItem('z6place');
        // ↓↓変更箇所
        return JSON.parse(localStoragez6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z6place', JSON.stringify(z6place));
        // ↓↓変更箇所
    }, [z6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const z6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return z6place;
        }else{
            // ↓↓変更箇所
            // console.log('z6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [aa6place,setaa6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaa6place = localStorage.getItem('aa6place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa6place', JSON.stringify(aa6place));
        // ↓↓変更箇所
    }, [aa6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const aa6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return aa6place;
        }else{
            // ↓↓変更箇所
            // console.log('aa6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ac6place,setac6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageac6place = localStorage.getItem('ac6place');
        // ↓↓変更箇所
        return JSON.parse(localStorageac6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac6place', JSON.stringify(ac6place));
        // ↓↓変更箇所
    }, [ac6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ac6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ac6place;
        }else{
            // ↓↓変更箇所
            // console.log('ac6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ad6place,setad6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragead6place = localStorage.getItem('ad6place');
        // ↓↓変更箇所
        return JSON.parse(localStoragead6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad6place', JSON.stringify(ad6place));
        // ↓↓変更箇所
    }, [ad6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ad6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ad6place;
        }else{
            // ↓↓変更箇所
            // console.log('ad6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [af6place,setaf6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaf6place = localStorage.getItem('af6place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af6place', JSON.stringify(af6place));
        // ↓↓変更箇所
    }, [af6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const af6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return af6place;
        }else{
            // ↓↓変更箇所
            // console.log('af6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ag6place,setag6place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageag6place = localStorage.getItem('ag6place');
        // ↓↓変更箇所
        return JSON.parse(localStorageag6place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag6place', JSON.stringify(ag6place));
        // ↓↓変更箇所
    }, [ag6place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ag6placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ag6place;
        }else{
            // ↓↓変更箇所
            // console.log('ag6zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [b7place,setb7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageb7place = localStorage.getItem('b7place');
        // ↓↓変更箇所
        return JSON.parse(localStorageb7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b7place', JSON.stringify(b7place));
        // ↓↓変更箇所
    }, [b7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const b7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return b7place;
        }else{
            // ↓↓変更箇所
            // console.log('b7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [c7place,setc7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragec7place = localStorage.getItem('c7place');
        // ↓↓変更箇所
        return JSON.parse(localStoragec7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c7place', JSON.stringify(c7place));
        // ↓↓変更箇所
    }, [c7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const c7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return c7place;
        }else{
            // ↓↓変更箇所
            // console.log('c7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [e7place,sete7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragee7place = localStorage.getItem('e7place');
        // ↓↓変更箇所
        return JSON.parse(localStoragee7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e7place', JSON.stringify(e7place));
        // ↓↓変更箇所
    }, [e7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const e7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return e7place;
        }else{
            // ↓↓変更箇所
            // console.log('e7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [f7place,setf7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragef7place = localStorage.getItem('f7place');
        // ↓↓変更箇所
        return JSON.parse(localStoragef7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f7place', JSON.stringify(f7place));
        // ↓↓変更箇所
    }, [f7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const f7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return f7place;
        }else{
            // ↓↓変更箇所
            // console.log('f7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [h7place,seth7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageh7place = localStorage.getItem('h7place');
        // ↓↓変更箇所
        return JSON.parse(localStorageh7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h7place', JSON.stringify(h7place));
        // ↓↓変更箇所
    }, [h7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const h7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return h7place;
        }else{
            // ↓↓変更箇所
            // console.log('h7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [i7place,seti7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragei7place = localStorage.getItem('i7place');
        // ↓↓変更箇所
        return JSON.parse(localStoragei7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i7place', JSON.stringify(i7place));
        // ↓↓変更箇所
    }, [i7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const i7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return i7place;
        }else{
            // ↓↓変更箇所
            // console.log('i7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [k7place,setk7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragek7place = localStorage.getItem('k7place');
        // ↓↓変更箇所
        return JSON.parse(localStoragek7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k7place', JSON.stringify(k7place));
        // ↓↓変更箇所
    }, [k7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const k7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return k7place;
        }else{
            // ↓↓変更箇所
            // console.log('k7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [l7place,setl7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragel7place = localStorage.getItem('l7place');
        // ↓↓変更箇所
        return JSON.parse(localStoragel7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l7place', JSON.stringify(l7place));
        // ↓↓変更箇所
    }, [l7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const l7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return l7place;
        }else{
            // ↓↓変更箇所
            // console.log('l7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [n7place,setn7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragen7place = localStorage.getItem('n7place');
        // ↓↓変更箇所
        return JSON.parse(localStoragen7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n7place', JSON.stringify(n7place));
        // ↓↓変更箇所
    }, [n7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const n7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return n7place;
        }else{
            // ↓↓変更箇所
            // console.log('n7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [o7place,seto7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageo7place = localStorage.getItem('o7place');
        // ↓↓変更箇所
        return JSON.parse(localStorageo7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o7place', JSON.stringify(o7place));
        // ↓↓変更箇所
    }, [o7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const o7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return o7place;
        }else{
            // ↓↓変更箇所
            // console.log('o7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [q7place,setq7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageq7place = localStorage.getItem('q7place');
        // ↓↓変更箇所
        return JSON.parse(localStorageq7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q7place', JSON.stringify(q7place));
        // ↓↓変更箇所
    }, [q7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const q7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return q7place;
        }else{
            // ↓↓変更箇所
            // console.log('q7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [r7place,setr7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorager7place = localStorage.getItem('r7place');
        // ↓↓変更箇所
        return JSON.parse(localStorager7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r7place', JSON.stringify(r7place));
        // ↓↓変更箇所
    }, [r7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const r7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return r7place;
        }else{
            // ↓↓変更箇所
            // console.log('r7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [t7place,sett7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoraget7place = localStorage.getItem('t7place');
        // ↓↓変更箇所
        return JSON.parse(localStoraget7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t7place', JSON.stringify(t7place));
        // ↓↓変更箇所
    }, [t7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const t7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return t7place;
        }else{
            // ↓↓変更箇所
            // console.log('t7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [u7place,setu7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageu7place = localStorage.getItem('u7place');
        // ↓↓変更箇所
        return JSON.parse(localStorageu7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u7place', JSON.stringify(u7place));
        // ↓↓変更箇所
    }, [u7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const u7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return u7place;
        }else{
            // ↓↓変更箇所
            // console.log('u7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [w7place,setw7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragew7place = localStorage.getItem('w7place');
        // ↓↓変更箇所
        return JSON.parse(localStoragew7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w7place', JSON.stringify(w7place));
        // ↓↓変更箇所
    }, [w7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const w7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return w7place;
        }else{
            // ↓↓変更箇所
            // console.log('w7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [x7place,setx7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragex7place = localStorage.getItem('x7place');
        // ↓↓変更箇所
        return JSON.parse(localStoragex7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x7place', JSON.stringify(x7place));
        // ↓↓変更箇所
    }, [x7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const x7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return x7place;
        }else{
            // ↓↓変更箇所
            // console.log('x7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [z7place,setz7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragez7place = localStorage.getItem('z7place');
        // ↓↓変更箇所
        return JSON.parse(localStoragez7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z7place', JSON.stringify(z7place));
        // ↓↓変更箇所
    }, [z7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const z7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return z7place;
        }else{
            // ↓↓変更箇所
            // console.log('z7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [aa7place,setaa7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaa7place = localStorage.getItem('aa7place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa7place', JSON.stringify(aa7place));
        // ↓↓変更箇所
    }, [aa7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const aa7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return aa7place;
        }else{
            // ↓↓変更箇所
            // console.log('aa7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ac7place,setac7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageac7place = localStorage.getItem('ac7place');
        // ↓↓変更箇所
        return JSON.parse(localStorageac7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac7place', JSON.stringify(ac7place));
        // ↓↓変更箇所
    }, [ac7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ac7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ac7place;
        }else{
            // ↓↓変更箇所
            // console.log('ac7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ad7place,setad7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragead7place = localStorage.getItem('ad7place');
        // ↓↓変更箇所
        return JSON.parse(localStoragead7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad7place', JSON.stringify(ad7place));
        // ↓↓変更箇所
    }, [ad7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ad7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ad7place;
        }else{
            // ↓↓変更箇所
            // console.log('ad7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [af7place,setaf7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaf7place = localStorage.getItem('af7place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af7place', JSON.stringify(af7place));
        // ↓↓変更箇所
    }, [af7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const af7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return af7place;
        }else{
            // ↓↓変更箇所
            // console.log('af7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ag7place,setag7place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageag7place = localStorage.getItem('ag7place');
        // ↓↓変更箇所
        return JSON.parse(localStorageag7place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag7place', JSON.stringify(ag7place));
        // ↓↓変更箇所
    }, [ag7place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ag7placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ag7place;
        }else{
            // ↓↓変更箇所
            // console.log('ag7zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [b8place,setb8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageb8place = localStorage.getItem('b8place');
        // ↓↓変更箇所
        return JSON.parse(localStorageb8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b8place', JSON.stringify(b8place));
        // ↓↓変更箇所
    }, [b8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const b8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return b8place;
        }else{
            // ↓↓変更箇所
            // console.log('b8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [c8place,setc8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragec8place = localStorage.getItem('c8place');
        // ↓↓変更箇所
        return JSON.parse(localStoragec8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c8place', JSON.stringify(c8place));
        // ↓↓変更箇所
    }, [c8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const c8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return c8place;
        }else{
            // ↓↓変更箇所
            // console.log('c8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [e8place,sete8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragee8place = localStorage.getItem('e8place');
        // ↓↓変更箇所
        return JSON.parse(localStoragee8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e8place', JSON.stringify(e8place));
        // ↓↓変更箇所
    }, [e8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const e8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return e8place;
        }else{
            // ↓↓変更箇所
            // console.log('e8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [f8place,setf8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragef8place = localStorage.getItem('f8place');
        // ↓↓変更箇所
        return JSON.parse(localStoragef8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f8place', JSON.stringify(f8place));
        // ↓↓変更箇所
    }, [f8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const f8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return f8place;
        }else{
            // ↓↓変更箇所
            // console.log('f8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [h8place,seth8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageh8place = localStorage.getItem('h8place');
        // ↓↓変更箇所
        return JSON.parse(localStorageh8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h8place', JSON.stringify(h8place));
        // ↓↓変更箇所
    }, [h8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const h8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return h8place;
        }else{
            // ↓↓変更箇所
            // console.log('h8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [i8place,seti8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragei8place = localStorage.getItem('i8place');
        // ↓↓変更箇所
        return JSON.parse(localStoragei8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i8place', JSON.stringify(i8place));
        // ↓↓変更箇所
    }, [i8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const i8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return i8place;
        }else{
            // ↓↓変更箇所
            // console.log('i8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [k8place,setk8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragek8place = localStorage.getItem('k8place');
        // ↓↓変更箇所
        return JSON.parse(localStoragek8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k8place', JSON.stringify(k8place));
        // ↓↓変更箇所
    }, [k8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const k8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return k8place;
        }else{
            // ↓↓変更箇所
            // console.log('k8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [l8place,setl8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragel8place = localStorage.getItem('l8place');
        // ↓↓変更箇所
        return JSON.parse(localStoragel8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l8place', JSON.stringify(l8place));
        // ↓↓変更箇所
    }, [l8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const l8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return l8place;
        }else{
            // ↓↓変更箇所
            // console.log('l8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [n8place,setn8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragen8place = localStorage.getItem('n8place');
        // ↓↓変更箇所
        return JSON.parse(localStoragen8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n8place', JSON.stringify(n8place));
        // ↓↓変更箇所
    }, [n8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const n8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return n8place;
        }else{
            // ↓↓変更箇所
            // console.log('n8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [o8place,seto8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageo8place = localStorage.getItem('o8place');
        // ↓↓変更箇所
        return JSON.parse(localStorageo8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o8place', JSON.stringify(o8place));
        // ↓↓変更箇所
    }, [o8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const o8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return o8place;
        }else{
            // ↓↓変更箇所
            // console.log('o8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [q8place,setq8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageq8place = localStorage.getItem('q8place');
        // ↓↓変更箇所
        return JSON.parse(localStorageq8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q8place', JSON.stringify(q8place));
        // ↓↓変更箇所
    }, [q8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const q8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return q8place;
        }else{
            // ↓↓変更箇所
            // console.log('q8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [r8place,setr8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorager8place = localStorage.getItem('r8place');
        // ↓↓変更箇所
        return JSON.parse(localStorager8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r8place', JSON.stringify(r8place));
        // ↓↓変更箇所
    }, [r8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const r8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return r8place;
        }else{
            // ↓↓変更箇所
            // console.log('r8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [t8place,sett8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoraget8place = localStorage.getItem('t8place');
        // ↓↓変更箇所
        return JSON.parse(localStoraget8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t8place', JSON.stringify(t8place));
        // ↓↓変更箇所
    }, [t8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const t8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return t8place;
        }else{
            // ↓↓変更箇所
            // console.log('t8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [u8place,setu8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageu8place = localStorage.getItem('u8place');
        // ↓↓変更箇所
        return JSON.parse(localStorageu8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u8place', JSON.stringify(u8place));
        // ↓↓変更箇所
    }, [u8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const u8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return u8place;
        }else{
            // ↓↓変更箇所
            // console.log('u8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [w8place,setw8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragew8place = localStorage.getItem('w8place');
        // ↓↓変更箇所
        return JSON.parse(localStoragew8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w8place', JSON.stringify(w8place));
        // ↓↓変更箇所
    }, [w8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const w8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return w8place;
        }else{
            // ↓↓変更箇所
            // console.log('w8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [x8place,setx8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragex8place = localStorage.getItem('x8place');
        // ↓↓変更箇所
        return JSON.parse(localStoragex8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x8place', JSON.stringify(x8place));
        // ↓↓変更箇所
    }, [x8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const x8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return x8place;
        }else{
            // ↓↓変更箇所
            // console.log('x8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [z8place,setz8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragez8place = localStorage.getItem('z8place');
        // ↓↓変更箇所
        return JSON.parse(localStoragez8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z8place', JSON.stringify(z8place));
        // ↓↓変更箇所
    }, [z8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const z8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return z8place;
        }else{
            // ↓↓変更箇所
            // console.log('z8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [aa8place,setaa8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaa8place = localStorage.getItem('aa8place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa8place', JSON.stringify(aa8place));
        // ↓↓変更箇所
    }, [aa8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const aa8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return aa8place;
        }else{
            // ↓↓変更箇所
            // console.log('aa8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ac8place,setac8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageac8place = localStorage.getItem('ac8place');
        // ↓↓変更箇所
        return JSON.parse(localStorageac8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac8place', JSON.stringify(ac8place));
        // ↓↓変更箇所
    }, [ac8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ac8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ac8place;
        }else{
            // ↓↓変更箇所
            // console.log('ac8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ad8place,setad8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragead8place = localStorage.getItem('ad8place');
        // ↓↓変更箇所
        return JSON.parse(localStoragead8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad8place', JSON.stringify(ad8place));
        // ↓↓変更箇所
    }, [ad8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ad8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ad8place;
        }else{
            // ↓↓変更箇所
            // console.log('ad8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [af8place,setaf8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaf8place = localStorage.getItem('af8place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af8place', JSON.stringify(af8place));
        // ↓↓変更箇所
    }, [af8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const af8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return af8place;
        }else{
            // ↓↓変更箇所
            // console.log('af8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ag8place,setag8place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageag8place = localStorage.getItem('ag8place');
        // ↓↓変更箇所
        return JSON.parse(localStorageag8place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag8place', JSON.stringify(ag8place));
        // ↓↓変更箇所
    }, [ag8place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ag8placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ag8place;
        }else{
            // ↓↓変更箇所
            // console.log('ag8zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [b9place,setb9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageb9place = localStorage.getItem('b9place');
        // ↓↓変更箇所
        return JSON.parse(localStorageb9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b9place', JSON.stringify(b9place));
        // ↓↓変更箇所
    }, [b9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const b9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return b9place;
        }else{
            // ↓↓変更箇所
            // console.log('b9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [c9place,setc9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragec9place = localStorage.getItem('c9place');
        // ↓↓変更箇所
        return JSON.parse(localStoragec9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c9place', JSON.stringify(c9place));
        // ↓↓変更箇所
    }, [c9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const c9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return c9place;
        }else{
            // ↓↓変更箇所
            // console.log('c9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [e9place,sete9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragee9place = localStorage.getItem('e9place');
        // ↓↓変更箇所
        return JSON.parse(localStoragee9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e9place', JSON.stringify(e9place));
        // ↓↓変更箇所
    }, [e9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const e9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return e9place;
        }else{
            // ↓↓変更箇所
            // console.log('e9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [f9place,setf9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragef9place = localStorage.getItem('f9place');
        // ↓↓変更箇所
        return JSON.parse(localStoragef9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f9place', JSON.stringify(f9place));
        // ↓↓変更箇所
    }, [f9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const f9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return f9place;
        }else{
            // ↓↓変更箇所
            // console.log('f9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [h9place,seth9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageh9place = localStorage.getItem('h9place');
        // ↓↓変更箇所
        return JSON.parse(localStorageh9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h9place', JSON.stringify(h9place));
        // ↓↓変更箇所
    }, [h9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const h9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return h9place;
        }else{
            // ↓↓変更箇所
            // console.log('h9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [i9place,seti9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragei9place = localStorage.getItem('i9place');
        // ↓↓変更箇所
        return JSON.parse(localStoragei9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i9place', JSON.stringify(i9place));
        // ↓↓変更箇所
    }, [i9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const i9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return i9place;
        }else{
            // ↓↓変更箇所
            // console.log('i9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [k9place,setk9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragek9place = localStorage.getItem('k9place');
        // ↓↓変更箇所
        return JSON.parse(localStoragek9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k9place', JSON.stringify(k9place));
        // ↓↓変更箇所
    }, [k9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const k9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return k9place;
        }else{
            // ↓↓変更箇所
            // console.log('k9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [l9place,setl9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragel9place = localStorage.getItem('l9place');
        // ↓↓変更箇所
        return JSON.parse(localStoragel9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l9place', JSON.stringify(l9place));
        // ↓↓変更箇所
    }, [l9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const l9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return l9place;
        }else{
            // ↓↓変更箇所
            // console.log('l9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [n9place,setn9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragen9place = localStorage.getItem('n9place');
        // ↓↓変更箇所
        return JSON.parse(localStoragen9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n9place', JSON.stringify(n9place));
        // ↓↓変更箇所
    }, [n9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const n9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return n9place;
        }else{
            // ↓↓変更箇所
            // console.log('n9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [o9place,seto9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageo9place = localStorage.getItem('o9place');
        // ↓↓変更箇所
        return JSON.parse(localStorageo9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o9place', JSON.stringify(o9place));
        // ↓↓変更箇所
    }, [o9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const o9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return o9place;
        }else{
            // ↓↓変更箇所
            // console.log('o9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [q9place,setq9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageq9place = localStorage.getItem('q9place');
        // ↓↓変更箇所
        return JSON.parse(localStorageq9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q9place', JSON.stringify(q9place));
        // ↓↓変更箇所
    }, [q9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const q9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return q9place;
        }else{
            // ↓↓変更箇所
            // console.log('q9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [r9place,setr9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorager9place = localStorage.getItem('r9place');
        // ↓↓変更箇所
        return JSON.parse(localStorager9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r9place', JSON.stringify(r9place));
        // ↓↓変更箇所
    }, [r9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const r9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return r9place;
        }else{
            // ↓↓変更箇所
            // console.log('r9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [t9place,sett9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoraget9place = localStorage.getItem('t9place');
        // ↓↓変更箇所
        return JSON.parse(localStoraget9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t9place', JSON.stringify(t9place));
        // ↓↓変更箇所
    }, [t9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const t9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return t9place;
        }else{
            // ↓↓変更箇所
            // console.log('t9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [u9place,setu9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageu9place = localStorage.getItem('u9place');
        // ↓↓変更箇所
        return JSON.parse(localStorageu9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u9place', JSON.stringify(u9place));
        // ↓↓変更箇所
    }, [u9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const u9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return u9place;
        }else{
            // ↓↓変更箇所
            // console.log('u9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [w9place,setw9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragew9place = localStorage.getItem('w9place');
        // ↓↓変更箇所
        return JSON.parse(localStoragew9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w9place', JSON.stringify(w9place));
        // ↓↓変更箇所
    }, [w9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const w9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return w9place;
        }else{
            // ↓↓変更箇所
            // console.log('w9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [x9place,setx9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragex9place = localStorage.getItem('x9place');
        // ↓↓変更箇所
        return JSON.parse(localStoragex9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x9place', JSON.stringify(x9place));
        // ↓↓変更箇所
    }, [x9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const x9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return x9place;
        }else{
            // ↓↓変更箇所
            // console.log('x9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [z9place,setz9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragez9place = localStorage.getItem('z9place');
        // ↓↓変更箇所
        return JSON.parse(localStoragez9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z9place', JSON.stringify(z9place));
        // ↓↓変更箇所
    }, [z9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const z9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return z9place;
        }else{
            // ↓↓変更箇所
            // console.log('z9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [aa9place,setaa9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaa9place = localStorage.getItem('aa9place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa9place', JSON.stringify(aa9place));
        // ↓↓変更箇所
    }, [aa9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const aa9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            // console.log("aa9set");
            return aa9place;
        }else{
            // ↓↓変更箇所
            // console.log('aa9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ac9place,setac9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageac9place = localStorage.getItem('ac9place');
        // ↓↓変更箇所
        return JSON.parse(localStorageac9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac9place', JSON.stringify(ac9place));
        // ↓↓変更箇所
    }, [ac9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ac9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ac9place;
        }else{
            // ↓↓変更箇所
            // console.log('ac9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ad9place,setad9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragead9place = localStorage.getItem('ad9place');
        // ↓↓変更箇所
        return JSON.parse(localStoragead9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad9place', JSON.stringify(ad9place));
        // ↓↓変更箇所
    }, [ad9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ad9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ad9place;
        }else{
            // ↓↓変更箇所
            // console.log('ad9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [af9place,setaf9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaf9place = localStorage.getItem('af9place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af9place', JSON.stringify(af9place));
        // ↓↓変更箇所
    }, [af9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const af9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return af9place;
        }else{
            // ↓↓変更箇所
            // console.log('af9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ag9place,setag9place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageag9place = localStorage.getItem('ag9place');
        // ↓↓変更箇所
        return JSON.parse(localStorageag9place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag9place', JSON.stringify(ag9place));
        // ↓↓変更箇所
    }, [ag9place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ag9placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ag9place;
        }else{
            // ↓↓変更箇所
            // console.log('ag9zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [b11place,setb11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageb11place = localStorage.getItem('b11place');
        // ↓↓変更箇所
        return JSON.parse(localStorageb11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b11place', JSON.stringify(b11place));
        // ↓↓変更箇所
    }, [b11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const b11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return b11place;
        }else{
            // ↓↓変更箇所
            // console.log('b11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [c11place,setc11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragec11place = localStorage.getItem('c11place');
        // ↓↓変更箇所
        return JSON.parse(localStoragec11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c11place', JSON.stringify(c11place));
        // ↓↓変更箇所
    }, [c11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const c11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return c11place;
        }else{
            // ↓↓変更箇所
            // console.log('c11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [e11place,sete11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragee11place = localStorage.getItem('e11place');
        // ↓↓変更箇所
        return JSON.parse(localStoragee11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e11place', JSON.stringify(e11place));
        // ↓↓変更箇所
    }, [e11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const e11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return e11place;
        }else{
            // ↓↓変更箇所
            // console.log('e11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [f11place,setf11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragef11place = localStorage.getItem('f11place');
        // ↓↓変更箇所
        return JSON.parse(localStoragef11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f11place', JSON.stringify(f11place));
        // ↓↓変更箇所
    }, [f11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const f11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return f11place;
        }else{
            // ↓↓変更箇所
            // console.log('f11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [h11place,seth11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageh11place = localStorage.getItem('h11place');
        // ↓↓変更箇所
        return JSON.parse(localStorageh11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h11place', JSON.stringify(h11place));
        // ↓↓変更箇所
    }, [h11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const h11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return h11place;
        }else{
            // ↓↓変更箇所
            // console.log('h11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [i11place,seti11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragei11place = localStorage.getItem('i11place');
        // ↓↓変更箇所
        return JSON.parse(localStoragei11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i11place', JSON.stringify(i11place));
        // ↓↓変更箇所
    }, [h11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const i11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return i11place;
        }else{
            // ↓↓変更箇所
            // console.log('i11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [k11place,setk11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragek11place = localStorage.getItem('k11place');
        // ↓↓変更箇所
        return JSON.parse(localStoragek11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k11place', JSON.stringify(k11place));
        // ↓↓変更箇所
    }, [k11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const k11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return k11place;
        }else{
            // ↓↓変更箇所
            // console.log('k11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [l11place,setl11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragel11place = localStorage.getItem('l11place');
        // ↓↓変更箇所
        return JSON.parse(localStoragel11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l11place', JSON.stringify(l11place));
        // ↓↓変更箇所
    }, [l11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const l11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return l11place;
        }else{
            // ↓↓変更箇所
            // console.log('l11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [n11place,setn11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragen11place = localStorage.getItem('n11place');
        // ↓↓変更箇所
        return JSON.parse(localStoragen11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n11place', JSON.stringify(n11place));
        // ↓↓変更箇所
    }, [n11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const n11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return n11place;
        }else{
            // ↓↓変更箇所
            // console.log('n11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [o11place,seto11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageo11place = localStorage.getItem('o11place');
        // ↓↓変更箇所
        return JSON.parse(localStorageo11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o11place', JSON.stringify(o11place));
        // ↓↓変更箇所
    }, [o11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const o11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return o11place;
        }else{
            // ↓↓変更箇所
            // console.log('o11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [q11place,setq11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageq11place = localStorage.getItem('q11place');
        // ↓↓変更箇所
        return JSON.parse(localStorageq11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q11place', JSON.stringify(q11place));
        // ↓↓変更箇所
    }, [q11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const q11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return q11place;
        }else{
            // ↓↓変更箇所
            // console.log('q11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [r11place,setr11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorager11place = localStorage.getItem('r11place');
        // ↓↓変更箇所
        return JSON.parse(localStorager11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r11place', JSON.stringify(r11place));
        // ↓↓変更箇所
    }, [r11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const r11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return r11place;
        }else{
            // ↓↓変更箇所
            // console.log('r11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [t11place,sett11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoraget11place = localStorage.getItem('t11place');
        // ↓↓変更箇所
        return JSON.parse(localStoraget11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t11place', JSON.stringify(t11place));
        // ↓↓変更箇所
    }, [t11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const t11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return t11place;
        }else{
            // ↓↓変更箇所
            // console.log('t11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [u11place,setu11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageu11place = localStorage.getItem('u11place');
        // ↓↓変更箇所
        return JSON.parse(localStorageu11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u11place', JSON.stringify(u11place));
        // ↓↓変更箇所
    }, [u11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const u11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return u11place;
        }else{
            // ↓↓変更箇所
            // console.log('u11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [w11place,setw11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragew11place = localStorage.getItem('w11place');
        // ↓↓変更箇所
        return JSON.parse(localStoragew11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w11place', JSON.stringify(w11place));
        // ↓↓変更箇所
    }, [w11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const w11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return w11place;
        }else{
            // ↓↓変更箇所
            // console.log('w11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [x11place,setx11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragex11place = localStorage.getItem('x11place');
        // ↓↓変更箇所
        return JSON.parse(localStoragex11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x11place', JSON.stringify(x11place));
        // ↓↓変更箇所
    }, [x11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const x11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return x11place;
        }else{
            // ↓↓変更箇所
            // console.log('x11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [z11place,setz11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragez11place = localStorage.getItem('z11place');
        // ↓↓変更箇所
        return JSON.parse(localStoragez11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z11place', JSON.stringify(z11place));
        // ↓↓変更箇所
    }, [z11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const z11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return z11place;
        }else{
            // ↓↓変更箇所
            // console.log('z11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [aa11place,setaa11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaa11place = localStorage.getItem('aa11place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa11place', JSON.stringify(aa11place));
        // ↓↓変更箇所
    }, [aa11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const aa11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return aa11place;
        }else{
            // ↓↓変更箇所
            // console.log('aa11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ac11place,setac11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageac11place = localStorage.getItem('ac11place');
        // ↓↓変更箇所
        return JSON.parse(localStorageac11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac11place', JSON.stringify(ac11place));
        // ↓↓変更箇所
    }, [ac11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ac11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ac11place;
        }else{
            // ↓↓変更箇所
            // console.log('ac11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ad11place,setad11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragead11place = localStorage.getItem('ad11place');
        // ↓↓変更箇所
        return JSON.parse(localStoragead11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad11place', JSON.stringify(ad11place));
        // ↓↓変更箇所
    }, [ad11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ad11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ad11place;
        }else{
            // ↓↓変更箇所
            // console.log('ad11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [af11place,setaf11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaf11place = localStorage.getItem('af11place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af11place', JSON.stringify(af11place));
        // ↓↓変更箇所
    }, [ad11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const af11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return af11place;
        }else{
            // ↓↓変更箇所
            // console.log('af11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ag11place,setag11place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageag11place = localStorage.getItem('ag11place');
        // ↓↓変更箇所
        return JSON.parse(localStorageag11place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag11place', JSON.stringify(ag11place));
        // ↓↓変更箇所
    }, [ag11place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ag11placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ag11place;
        }else{
            // ↓↓変更箇所
            // console.log('ag11zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [b12place,setb12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageb12place = localStorage.getItem('b12place');
        // ↓↓変更箇所
        return JSON.parse(localStorageb12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('b12place', JSON.stringify(b12place));
        // ↓↓変更箇所
    }, [b12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const b12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return b12place;
        }else{
            // ↓↓変更箇所
            // console.log('b12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [c12place,setc12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragec12place = localStorage.getItem('c12place');
        // ↓↓変更箇所
        return JSON.parse(localStoragec12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('c12place', JSON.stringify(c12place));
        // ↓↓変更箇所
    }, [c12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const c12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return c12place;
        }else{
            // ↓↓変更箇所
            // console.log('c12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [e12place,sete12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragee12place = localStorage.getItem('e12place');
        // ↓↓変更箇所
        return JSON.parse(localStoragee12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('e12place', JSON.stringify(e12place));
        // ↓↓変更箇所
    }, [e12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const e12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return e12place;
        }else{
            // ↓↓変更箇所
            // console.log('e12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [f12place,setf12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragef12place = localStorage.getItem('f12place');
        // ↓↓変更箇所
        return JSON.parse(localStoragef12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('f12place', JSON.stringify(f12place));
        // ↓↓変更箇所
    }, [f12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const f12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return f12place;
        }else{
            // ↓↓変更箇所
            // console.log('f12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [h12place,seth12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageh12place = localStorage.getItem('h12place');
        // ↓↓変更箇所
        return JSON.parse(localStorageh12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('h12place', JSON.stringify(h12place));
        // ↓↓変更箇所
    }, [h12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const h12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return h12place;
        }else{
            // ↓↓変更箇所
            // console.log('h12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [i12place,seti12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragei12place = localStorage.getItem('i12place');
        // ↓↓変更箇所
        return JSON.parse(localStoragei12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('i12place', JSON.stringify(i12place));
        // ↓↓変更箇所
    }, [i12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const i12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return i12place;
        }else{
            // ↓↓変更箇所
            // console.log('i12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [k12place,setk12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragek12place = localStorage.getItem('k12place');
        // ↓↓変更箇所
        return JSON.parse(localStoragek12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('k12place', JSON.stringify(k12place));
        // ↓↓変更箇所
    }, [k12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const k12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return k12place;
        }else{
            // ↓↓変更箇所
            // console.log('k12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [l12place,setl12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragel12place = localStorage.getItem('l12place');
        // ↓↓変更箇所
        return JSON.parse(localStoragel12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('l12place', JSON.stringify(l12place));
        // ↓↓変更箇所
    }, [l12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const l12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return l12place;
        }else{
            // ↓↓変更箇所
            // console.log('l12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [n12place,setn12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragen12place = localStorage.getItem('n12place');
        // ↓↓変更箇所
        return JSON.parse(localStoragen12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('n12place', JSON.stringify(n12place));
        // ↓↓変更箇所
    }, [n12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const n12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return n12place;
        }else{
            // ↓↓変更箇所
            // console.log('n12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [o12place,seto12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageo12place = localStorage.getItem('o12place');
        // ↓↓変更箇所
        return JSON.parse(localStorageo12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('o12place', JSON.stringify(o12place));
        // ↓↓変更箇所
    }, [o12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const o12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return o12place;
        }else{
            // ↓↓変更箇所
            // console.log('o12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [q12place,setq12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageq12place = localStorage.getItem('q12place');
        // ↓↓変更箇所
        return JSON.parse(localStorageq12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('q12place', JSON.stringify(q12place));
        // ↓↓変更箇所
    }, [q12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const q12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return q12place;
        }else{
            // ↓↓変更箇所
            // console.log('q12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [r12place,setr12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorager12place = localStorage.getItem('r12place');
        // ↓↓変更箇所
        return JSON.parse(localStorager12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('r12place', JSON.stringify(r12place));
        // ↓↓変更箇所
    }, [r12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const r12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return r12place;
        }else{
            // ↓↓変更箇所
            // console.log('r12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [t12place,sett12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoraget12place = localStorage.getItem('t12place');
        // ↓↓変更箇所
        return JSON.parse(localStoraget12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('t12place', JSON.stringify(t12place));
        // ↓↓変更箇所
    }, [t12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const t12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return t12place;
        }else{
            // ↓↓変更箇所
            // console.log('t12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [u12place,setu12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageu12place = localStorage.getItem('u12place');
        // ↓↓変更箇所
        return JSON.parse(localStorageu12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('u12place', JSON.stringify(u12place));
        // ↓↓変更箇所
    }, [u12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const u12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return u12place;
        }else{
            // ↓↓変更箇所
            // console.log('u12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [w12place,setw12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragew12place = localStorage.getItem('w12place');
        // ↓↓変更箇所
        return JSON.parse(localStoragew12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('w12place', JSON.stringify(w12place));
        // ↓↓変更箇所
    }, [w12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const w12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return w12place;
        }else{
            // ↓↓変更箇所
            // console.log('w12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [x12place,setx12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragex12place = localStorage.getItem('x12place');
        // ↓↓変更箇所
        return JSON.parse(localStoragex12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('x12place', JSON.stringify(x12place));
        // ↓↓変更箇所
    }, [x12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const x12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return x12place;
        }else{
            // ↓↓変更箇所
            // console.log('x12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [z12place,setz12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragez12place = localStorage.getItem('z12place');
        // ↓↓変更箇所
        return JSON.parse(localStoragez12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('z12place', JSON.stringify(z12place));
        // ↓↓変更箇所
    }, [z12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const z12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return z12place;
        }else{
            // ↓↓変更箇所
            // console.log('z12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [aa12place,setaa12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaa12place = localStorage.getItem('aa12place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaa12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('aa12place', JSON.stringify(aa12place));
        // ↓↓変更箇所
    }, [aa12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const aa12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return aa12place;
        }else{
            // ↓↓変更箇所
            // console.log('aa12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ac12place,setac12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageac12place = localStorage.getItem('ac12place');
        // ↓↓変更箇所
        return JSON.parse(localStorageac12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ac12place', JSON.stringify(ac12place));
        // ↓↓変更箇所
    }, [ac12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ac12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ac12place;
        }else{
            // ↓↓変更箇所
            // console.log('ac12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ad12place,setad12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStoragead12place = localStorage.getItem('ad12place');
        // ↓↓変更箇所
        return JSON.parse(localStoragead12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ad12place', JSON.stringify(ad12place));
        // ↓↓変更箇所
    }, [ad12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ad12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ad12place;
        }else{
            // ↓↓変更箇所
            // console.log('ad12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [af12place,setaf12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageaf12place = localStorage.getItem('af12place');
        // ↓↓変更箇所
        return JSON.parse(localStorageaf12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('af12place', JSON.stringify(af12place));
        // ↓↓変更箇所
    }, [af12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const af12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return af12place;
        }else{
            // ↓↓変更箇所
            // console.log('af12zero');
            return 0;
        }
        // return 0;

    };

    // ↓↓複製箇所
    // 配列番号の記憶
    // ↓↓変更箇所
    let [ag12place,setag12place] = useState<number>(() => {
        // ↓↓変更箇所
        const localStorageag12place = localStorage.getItem('ag12place');
        // ↓↓変更箇所
        return JSON.parse(localStorageag12place ?? '[]');
    });

    // ↓↓複製箇所
    useEffect(() => {
        // ローカルストレージに保存
        // ↓↓変更箇所
        localStorage.setItem('ag12place', JSON.stringify(ag12place));
        // ↓↓変更箇所
    }, [ag12place]);

    // ↓↓複製箇所
    // 配列でundifinedにしないための関数
    // ↓↓変更箇所
    const ag12placefunc = () => {
        // return i1place;
        // let resetcount = 0;
        if(lodejudge){
            // ↓↓変更箇所
            return ag12place;
        }else{
            // ↓↓変更箇所
            // console.log('ag12zero');
            return 0;
        }
        // return 0;

    };

    // 複製終了(syuuryou)



    const reset = () => {
        let boolean;
        boolean = false;
        setsekigaejudge(boolean);
        // ↓↓複製箇所
        seth1judge(boolean);
        // ↓↓複製箇所
        seth1place(zero);
        // ↓↓複製箇所
        seti1judge(boolean);
        // ↓↓複製箇所
        seti1place(zero);
        // ↓↓複製箇所
        setk1judge(boolean);
        // ↓↓複製箇所
        setk1place(zero);
        // ↓↓複製箇所
        setl1judge(boolean);
        // ↓↓複製箇所
        setl1place(zero);
        // ↓↓複製箇所
        seto1judge(boolean);
        // ↓↓複製箇所
        seto1place(zero);
        // ↓↓複製箇所
        setr1judge(boolean);
        // ↓↓複製箇所
        setr1place(zero);
        // ↓↓複製箇所
        setx1judge(boolean);
        // ↓↓複製箇所
        setx1place(zero);
        // ↓↓複製箇所
        setaa1judge(boolean);
        // ↓↓複製箇所
        setaa1place(zero);
        // ↓↓複製箇所
        setb2judge(boolean);
        // ↓↓複製箇所
        setb2place(zero);
        // ↓↓複製箇所
        setc2judge(boolean);
        // ↓↓複製箇所
        setc2place(zero);
        // ↓↓複製箇所
        sete2judge(boolean);
        // ↓↓複製箇所
        sete2place(zero);
        // ↓↓複製箇所
        setf2judge(boolean);
        // ↓↓複製箇所
        setf2place(zero);
        // ↓↓複製箇所
        seth2judge(boolean);
        // ↓↓複製箇所
        seth2place(zero);
        // ↓↓複製箇所
        seti2judge(boolean);
        // ↓↓複製箇所
        seti2place(zero);
        // ↓↓複製箇所
        setk2judge(boolean);
        // ↓↓複製箇所
        setk2place(zero);
        // ↓↓複製箇所
        setl2judge(boolean);
        // ↓↓複製箇所
        setl2place(zero);
        // ↓↓複製箇所
        setb3judge(boolean);
        // ↓↓複製箇所
        setb3place(zero);
        // ↓↓複製箇所
        setc3judge(boolean);
        // ↓↓複製箇所
        setc3place(zero);
        // ↓↓複製箇所
        sete3judge(boolean);
        // ↓↓複製箇所
        sete3place(zero);
        // ↓↓複製箇所
        setf3judge(boolean);
        // ↓↓複製箇所
        setf3place(zero);
        // ↓↓複製箇所
        seth3judge(boolean);
        // ↓↓複製箇所
        seth3place(zero);
        // ↓↓複製箇所
        seti3judge(boolean);
        // ↓↓複製箇所
        seti3place(zero);
        // ↓↓複製箇所
        setk3judge(boolean);
        // ↓↓複製箇所
        setk3place(zero);
        // ↓↓複製箇所
        setl3judge(boolean);
        // ↓↓複製箇所
        setl3place(zero);
        // ↓↓複製箇所
        setn3judge(boolean);
        // ↓↓複製箇所
        setn3place(zero);
        // ↓↓複製箇所
        seto3judge(boolean);
        // ↓↓複製箇所
        seto3place(zero);
        // ↓↓複製箇所
        setq3judge(boolean);
        // ↓↓複製箇所
        setq3place(zero);
        // ↓↓複製箇所
        setr3judge(boolean);
        // ↓↓複製箇所
        setr3place(zero);
        // ↓↓複製箇所
        sett3judge(boolean);
        // ↓↓複製箇所
        sett3place(zero);
        // ↓↓複製箇所
        setu3judge(boolean);
        // ↓↓複製箇所
        setu3place(zero);
        // ↓↓複製箇所
        setw3judge(boolean);
        // ↓↓複製箇所
        setw3place(zero);
        // ↓↓複製箇所
        setx3judge(boolean);
        // ↓↓複製箇所
        setx3place(zero);
        // ↓↓複製箇所
        setz3judge(boolean);
        // ↓↓複製箇所
        setz3place(zero);
        // ↓↓複製箇所
        setaa3judge(boolean);
        // ↓↓複製箇所
        setaa3place(zero);
        // ↓↓複製箇所
        setac3judge(boolean);
        // ↓↓複製箇所
        setac3place(zero);
        // ↓↓複製箇所
        setad3judge(boolean);
        // ↓↓複製箇所
        setad3place(zero);
        // ↓↓複製箇所
        setaf3judge(boolean);
        // ↓↓複製箇所
        setaf3place(zero);
        // ↓↓複製箇所
        setag3judge(boolean);
        // ↓↓複製箇所
        setag3place(zero);
        // ↓↓複製箇所
        setb4judge(boolean);
        // ↓↓複製箇所
        setb4place(zero);
        // ↓↓複製箇所
        setc4judge(boolean);
        // ↓↓複製箇所
        setc4place(zero);
        // ↓↓複製箇所
        sete4judge(boolean);
        // ↓↓複製箇所
        sete4place(zero);
        // ↓↓複製箇所
        setf4judge(boolean);
        // ↓↓複製箇所
        setf4place(zero);
        // ↓↓複製箇所
        seth4judge(boolean);
        // ↓↓複製箇所
        seth4place(zero);
        // ↓↓複製箇所
        seti4judge(boolean);
        // ↓↓複製箇所
        seti4place(zero);
        // ↓↓複製箇所
        setk4judge(boolean);
        // ↓↓複製箇所
        setk4place(zero);
        // ↓↓複製箇所
        setl4judge(boolean);
        // ↓↓複製箇所
        setl4place(zero);
        // ↓↓複製箇所
        setn4judge(boolean);
        // ↓↓複製箇所
        setn4place(zero);
        // ↓↓複製箇所
        seto4judge(boolean);
        // ↓↓複製箇所
        seto4place(zero);
        // ↓↓複製箇所
        setq4judge(boolean);
        // ↓↓複製箇所
        setq4place(zero);
        // ↓↓複製箇所
        setr4judge(boolean);
        // ↓↓複製箇所
        setr4place(zero);
        // ↓↓複製箇所
        sett4judge(boolean);
        // ↓↓複製箇所
        sett4place(zero);
        // ↓↓複製箇所
        setu4judge(boolean);
        // ↓↓複製箇所
        setu4place(zero);
        // ↓↓複製箇所
        setw4judge(boolean);
        // ↓↓複製箇所
        setw4place(zero);
        // ↓↓複製箇所
        setx4judge(boolean);
        // ↓↓複製箇所
        setx4place(zero);
        // ↓↓複製箇所
        setz4judge(boolean);
        // ↓↓複製箇所
        setz4place(zero);
        // ↓↓複製箇所
        setaa4judge(boolean);
        // ↓↓複製箇所
        setaa4place(zero);
        // ↓↓複製箇所
        setac4judge(boolean);
        // ↓↓複製箇所
        setac4place(zero);
        // ↓↓複製箇所
        setad4judge(boolean);
        // ↓↓複製箇所
        setad4place(zero);
        // ↓↓複製箇所
        setaf4judge(boolean);
        // ↓↓複製箇所
        setaf4place(zero);
        // ↓↓複製箇所
        setag4judge(boolean);
        // ↓↓複製箇所
        setag4place(zero);
        // ↓↓複製箇所
        setb5judge(boolean);
        // ↓↓複製箇所
        setb5place(zero);
        // ↓↓複製箇所
        setc5judge(boolean);
        // ↓↓複製箇所
        setc5place(zero);
        // ↓↓複製箇所
        sete5judge(boolean);
        // ↓↓複製箇所
        sete5place(zero);
        // ↓↓複製箇所
        setf5judge(boolean);
        // ↓↓複製箇所
        setf5place(zero);
        // ↓↓複製箇所
        seth5judge(boolean);
        // ↓↓複製箇所
        seth5place(zero);
        // ↓↓複製箇所
        seti5judge(boolean);
        // ↓↓複製箇所
        seti5place(zero);
        // ↓↓複製箇所
        setk5judge(boolean);
        // ↓↓複製箇所
        setk5place(zero);
        // ↓↓複製箇所
        setl5judge(boolean);
        // ↓↓複製箇所
        setl5place(zero);
        // ↓↓複製箇所
        setn5judge(boolean);
        // ↓↓複製箇所
        setn5place(zero);
        // ↓↓複製箇所
        seto5judge(boolean);
        // ↓↓複製箇所
        seto5place(zero);
        // ↓↓複製箇所
        setq5judge(boolean);
        // ↓↓複製箇所
        setq5place(zero);
        // ↓↓複製箇所
        setr5judge(boolean);
        // ↓↓複製箇所
        setr5place(zero);
        // ↓↓複製箇所
        sett5judge(boolean);
        // ↓↓複製箇所
        sett5place(zero);
        // ↓↓複製箇所
        setu5judge(boolean);
        // ↓↓複製箇所
        setu5place(zero);
        // ↓↓複製箇所
        setw5judge(boolean);
        // ↓↓複製箇所
        setw5place(zero);
        // ↓↓複製箇所
        setx5judge(boolean);
        // ↓↓複製箇所
        setx5place(zero);
        // ↓↓複製箇所
        setz5judge(boolean);
        // ↓↓複製箇所
        setz5place(zero);
        // ↓↓複製箇所
        setaa5judge(boolean);
        // ↓↓複製箇所
        setaa5place(zero);
        // ↓↓複製箇所
        setac5judge(boolean);
        // ↓↓複製箇所
        setac5place(zero);
        // ↓↓複製箇所
        setad5judge(boolean);
        // ↓↓複製箇所
        setad5place(zero);
        // ↓↓複製箇所
        setaf5judge(boolean);
        // ↓↓複製箇所
        setaf5place(zero);
        // ↓↓複製箇所
        setag5judge(boolean);
        // ↓↓複製箇所
        setag5place(zero);
        // ↓↓複製箇所
        setb6judge(boolean);
        // ↓↓複製箇所
        setb6place(zero);
        // ↓↓複製箇所
        setc6judge(boolean);
        // ↓↓複製箇所
        setc6place(zero);
        // ↓↓複製箇所
        sete6judge(boolean);
        // ↓↓複製箇所
        sete6place(zero);
        // ↓↓複製箇所
        setf6judge(boolean);
        // ↓↓複製箇所
        setf6place(zero);
        // ↓↓複製箇所
        seth6judge(boolean);
        // ↓↓複製箇所
        seth6place(zero);
        // ↓↓複製箇所
        seti6judge(boolean);
        // ↓↓複製箇所
        seti6place(zero);
        // ↓↓複製箇所
        setk6judge(boolean);
        // ↓↓複製箇所
        setk6place(zero);
        // ↓↓複製箇所
        setl6judge(boolean);
        // ↓↓複製箇所
        setl6place(zero);
        // ↓↓複製箇所
        setn6judge(boolean);
        // ↓↓複製箇所
        setn6place(zero);
        // ↓↓複製箇所
        seto6judge(boolean);
        // ↓↓複製箇所
        seto6place(zero);
        // ↓↓複製箇所
        setq6judge(boolean);
        // ↓↓複製箇所
        setq6place(zero);
        // ↓↓複製箇所
        setr6judge(boolean);
        // ↓↓複製箇所
        setr6place(zero);
        // ↓↓複製箇所
        sett6judge(boolean);
        // ↓↓複製箇所
        sett6place(zero);
        // ↓↓複製箇所
        setu6judge(boolean);
        // ↓↓複製箇所
        setu6place(zero);
        // ↓↓複製箇所
        setw6judge(boolean);
        // ↓↓複製箇所
        setw6place(zero);
        // ↓↓複製箇所
        setx6judge(boolean);
        // ↓↓複製箇所
        setx6place(zero);
        // ↓↓複製箇所
        setz6judge(boolean);
        // ↓↓複製箇所
        setz6place(zero);
        // ↓↓複製箇所
        setaa6judge(boolean);
        // ↓↓複製箇所
        setaa6place(zero);
        // ↓↓複製箇所
        setac6judge(boolean);
        // ↓↓複製箇所
        setac6place(zero);
        // ↓↓複製箇所
        setad6judge(boolean);
        // ↓↓複製箇所
        setad6place(zero);
        // ↓↓複製箇所
        setaf6judge(boolean);
        // ↓↓複製箇所
        setaf6place(zero);
        // ↓↓複製箇所
        setag6judge(boolean);
        // ↓↓複製箇所
        setag6place(zero);
        // ↓↓複製箇所
        setb7judge(boolean);
        // ↓↓複製箇所
        setb7place(zero);
        // ↓↓複製箇所
        setc7judge(boolean);
        // ↓↓複製箇所
        setc7place(zero);
        // ↓↓複製箇所
        setc7judge(boolean);
        // ↓↓複製箇所
        sete7place(zero);
        // ↓↓複製箇所
        sete7judge(boolean);
        // ↓↓複製箇所
        setf7place(zero);
        // ↓↓複製箇所
        setf7judge(boolean);
        // ↓↓複製箇所
        seth7place(zero);
        // ↓↓複製箇所
        seth7judge(boolean);
        // ↓↓複製箇所
        seti7place(zero);
        // ↓↓複製箇所
        seti7judge(boolean);
        // ↓↓複製箇所
        setk7place(zero);
        // ↓↓複製箇所
        setk7judge(boolean);
        // ↓↓複製箇所
        setl7place(zero);
        // ↓↓複製箇所
        setl7judge(boolean);
        // ↓↓複製箇所
        setn7place(zero);
        // ↓↓複製箇所
        setn7judge(boolean);
        // ↓↓複製箇所
        seto7judge(boolean);
        // ↓↓複製箇所
        seto7place(zero);
        // ↓↓複製箇所
        setq7judge(boolean);
        // ↓↓複製箇所
        setq7place(zero);
        // ↓↓複製箇所
        setr7judge(boolean);
        // ↓↓複製箇所
        setr7place(zero);
        // ↓↓複製箇所
        sett7judge(boolean);
        // ↓↓複製箇所
        sett7place(zero);
        // ↓↓複製箇所
        setu7judge(boolean);
        // ↓↓複製箇所
        setu7place(zero);
        // ↓↓複製箇所
        setw7judge(boolean);
        // ↓↓複製箇所
        setw7place(zero);
        // ↓↓複製箇所
        setx7judge(boolean);
        // ↓↓複製箇所
        setx7place(zero);
        // ↓↓複製箇所
        setz7judge(boolean);
        // ↓↓複製箇所
        setz7place(zero);
        // ↓↓複製箇所
        setaa7judge(boolean);
        // ↓↓複製箇所
        setaa7place(zero);
        // ↓↓複製箇所
        setac7judge(boolean);
        // ↓↓複製箇所
        setac7place(zero);
        // ↓↓複製箇所
        setad7judge(boolean);
        // ↓↓複製箇所
        setad7place(zero);
        // ↓↓複製箇所
        setaf7judge(boolean);
        // ↓↓複製箇所
        setaf7place(zero);
        // ↓↓複製箇所
        setag7judge(boolean);
        // ↓↓複製箇所
        setag7place(zero);
        // ↓↓複製箇所
        setb8judge(boolean);
        // ↓↓複製箇所
        setb8place(zero);
        // ↓↓複製箇所
        setc8judge(boolean);
        // ↓↓複製箇所
        setc8place(zero);
        // ↓↓複製箇所
        sete8judge(boolean);
        // ↓↓複製箇所
        sete8place(zero);
        // ↓↓複製箇所
        setf8judge(boolean);
        // ↓↓複製箇所
        setf8place(zero);
        // ↓↓複製箇所
        seth8judge(boolean);
        // ↓↓複製箇所
        seth8place(zero);
        // ↓↓複製箇所
        seti8judge(boolean);
        // ↓↓複製箇所
        seti8place(zero);
        // ↓↓複製箇所
        setk8judge(boolean);
        // ↓↓複製箇所
        setk8place(zero);
        // ↓↓複製箇所
        setl8judge(boolean);
        // ↓↓複製箇所
        setl8place(zero);
        // ↓↓複製箇所
        setn8judge(boolean);
        // ↓↓複製箇所
        setn8place(zero);
        // ↓↓複製箇所
        seto8judge(boolean);
        // ↓↓複製箇所
        seto8place(zero);
        // ↓↓複製箇所
        setq8judge(boolean);
        // ↓↓複製箇所
        setq8place(zero);
        // ↓↓複製箇所
        setr8judge(boolean);
        // ↓↓複製箇所
        setr8place(zero);
        // ↓↓複製箇所
        sett8judge(boolean);
        // ↓↓複製箇所
        sett8place(zero);
        // ↓↓複製箇所
        setu8judge(boolean);
        // ↓↓複製箇所
        setu8place(zero);
        // ↓↓複製箇所
        setw8judge(boolean);
        // ↓↓複製箇所
        setw8place(zero);
        // ↓↓複製箇所
        setx8judge(boolean);
        // ↓↓複製箇所
        setx8place(zero);
        // ↓↓複製箇所
        setz8judge(boolean);
        // ↓↓複製箇所
        setz8place(zero);
        // ↓↓複製箇所
        setaa8judge(boolean);
        // ↓↓複製箇所
        setaa8place(zero);
        // ↓↓複製箇所
        setac8judge(boolean);
        // ↓↓複製箇所
        setac8place(zero);
        // ↓↓複製箇所
        setad8judge(boolean);
        // ↓↓複製箇所
        setad8place(zero);
        // ↓↓複製箇所
        setaf8judge(boolean);
        // ↓↓複製箇所
        setaf8place(zero);
        // ↓↓複製箇所
        setag8judge(boolean);
        // ↓↓複製箇所
        setag8place(zero);
        // ↓↓複製箇所
        setb9judge(boolean);
        // ↓↓複製箇所
        setb9place(zero);
        // ↓↓複製箇所
        setc9judge(boolean);
        // ↓↓複製箇所
        setc9place(zero);
        // ↓↓複製箇所
        sete9judge(boolean);
        // ↓↓複製箇所
        sete9place(zero);
        // ↓↓複製箇所
        setf9judge(boolean);
        // ↓↓複製箇所
        setf9place(zero);
        // ↓↓複製箇所
        seth9judge(boolean);
        // ↓↓複製箇所
        seth9place(zero);
        // ↓↓複製箇所
        seti9judge(boolean);
        // ↓↓複製箇所
        seti9place(zero);
        // ↓↓複製箇所
        setk9judge(boolean);
        // ↓↓複製箇所
        setk9place(zero);
        // ↓↓複製箇所
        setl9judge(boolean);
        // ↓↓複製箇所
        setl9place(zero);
        // ↓↓複製箇所
        setn9judge(boolean);
        // ↓↓複製箇所
        setn9place(zero);
        // ↓↓複製箇所
        seto9judge(boolean);
        // ↓↓複製箇所
        seto9place(zero);
        // ↓↓複製箇所
        setq9judge(boolean);
        // ↓↓複製箇所
        setq9place(zero);
        // ↓↓複製箇所
        setr9judge(boolean);
        // ↓↓複製箇所
        setr9place(zero);
        // ↓↓複製箇所
        sett9judge(boolean);
        // ↓↓複製箇所
        sett9place(zero);
        // ↓↓複製箇所
        setu9judge(boolean);
        // ↓↓複製箇所
        setu9place(zero);
        // ↓↓複製箇所
        setw9judge(boolean);
        // ↓↓複製箇所
        setw9place(zero);
        // ↓↓複製箇所
        setx9judge(boolean);
        // ↓↓複製箇所
        setx9place(zero);
        // ↓↓複製箇所
        setz9judge(boolean);
        // ↓↓複製箇所
        setz9place(zero);
        // ↓↓複製箇所
        setaa9judge(boolean);
        // ↓↓複製箇所
        setaa9place(zero);
        // ↓↓複製箇所
        setac9judge(boolean);
        // ↓↓複製箇所
        setac9place(zero);
        // ↓↓複製箇所
        setad9judge(boolean);
        // ↓↓複製箇所
        setad9place(zero);
        // ↓↓複製箇所
        setaf9judge(boolean);
        // ↓↓複製箇所
        setaf9place(zero);
        // ↓↓複製箇所
        setag9judge(boolean);
        // ↓↓複製箇所
        setag9place(zero);
        // ↓↓複製箇所
        setb11judge(boolean);
        // ↓↓複製箇所
        setb11place(zero);
        // ↓↓複製箇所
        setc11judge(boolean);
        // ↓↓複製箇所
        setc11place(zero);
        // ↓↓複製箇所
        sete11judge(boolean);
        // ↓↓複製箇所
        sete11place(zero);
        // ↓↓複製箇所
        setf11judge(boolean);
        // ↓↓複製箇所
        setf11place(zero);
        // ↓↓複製箇所
        seth11judge(boolean);
        // ↓↓複製箇所
        seth11place(zero);
        // ↓↓複製箇所
        seti11judge(boolean);
        // ↓↓複製箇所
        seti11place(zero);
        // ↓↓複製箇所
        setk11judge(boolean);
        // ↓↓複製箇所
        setk11place(zero);
        // ↓↓複製箇所
        setl11judge(boolean);
        // ↓↓複製箇所
        setl11place(zero);
        // ↓↓複製箇所
        setn11judge(boolean);
        // ↓↓複製箇所
        setn11place(zero);
        // ↓↓複製箇所
        seto11judge(boolean);
        // ↓↓複製箇所
        seto11place(zero);
        // ↓↓複製箇所
        setq11judge(boolean);
        // ↓↓複製箇所
        setq11place(zero);
        // ↓↓複製箇所
        setr11judge(boolean);
        // ↓↓複製箇所
        setr11place(zero);
        // ↓↓複製箇所
        sett11judge(boolean);
        // ↓↓複製箇所
        sett11place(zero);
        // ↓↓複製箇所
        setu11judge(boolean);
        // ↓↓複製箇所
        setu11place(zero);
        // ↓↓複製箇所
        setw11judge(boolean);
        // ↓↓複製箇所
        setw11place(zero);
        // ↓↓複製箇所
        setx11judge(boolean);
        // ↓↓複製箇所
        setx11place(zero);
        // ↓↓複製箇所
        setz11judge(boolean);
        // ↓↓複製箇所
        setz11place(zero);
        // ↓↓複製箇所
        setaa11judge(boolean);
        // ↓↓複製箇所
        setaa11place(zero);
        // ↓↓複製箇所
        setac11judge(boolean);
        // ↓↓複製箇所
        setac11place(zero);
        // ↓↓複製箇所
        setad11judge(boolean);
        // ↓↓複製箇所
        setad11place(zero);
        // ↓↓複製箇所
        setaf11judge(boolean);
        // ↓↓複製箇所
        setaf11place(zero);
        // ↓↓複製箇所
        setag11judge(boolean);
        // ↓↓複製箇所
        setag11place(zero);
        // ↓↓複製箇所
        setb12judge(boolean);
        // ↓↓複製箇所
        setb12place(zero);
        // ↓↓複製箇所
        setc12judge(boolean);
        // ↓↓複製箇所
        setc12place(zero);
        // ↓↓複製箇所
        sete12judge(boolean);
        // ↓↓複製箇所
        sete12place(zero);
        // ↓↓複製箇所
        setf12judge(boolean);
        // ↓↓複製箇所
        setf12place(zero);
        // ↓↓複製箇所
        seth12judge(boolean);
        // ↓↓複製箇所
        seth12place(zero);
        // ↓↓複製箇所
        seti12judge(boolean);
        // ↓↓複製箇所
        seti12place(zero);
        // ↓↓複製箇所
        setk12judge(boolean);
        // ↓↓複製箇所
        setk12place(zero);
        // ↓↓複製箇所
        setl12judge(boolean);
        // ↓↓複製箇所
        setl12place(zero);
        // ↓↓複製箇所
        setn12judge(boolean);
        // ↓↓複製箇所
        setn12place(zero);
        // ↓↓複製箇所
        seto12judge(boolean);
        // ↓↓複製箇所
        seto12place(zero);
        // ↓↓複製箇所
        setq12judge(boolean);
        // ↓↓複製箇所
        setq12place(zero);
        // ↓↓複製箇所
        setr12judge(boolean);
        // ↓↓複製箇所
        setr12place(zero);
        // ↓↓複製箇所
        sett12judge(boolean);
        // ↓↓複製箇所
        sett12place(zero);
        // ↓↓複製箇所
        setu12judge(boolean);
        // ↓↓複製箇所
        setu12place(zero);
        // ↓↓複製箇所
        setw12judge(boolean);
        // ↓↓複製箇所
        setw12place(zero);
        // ↓↓複製箇所
        setx12judge(boolean);
        // ↓↓複製箇所
        setx12place(zero);
        // ↓↓複製箇所
        setz12judge(boolean);
        // ↓↓複製箇所
        setz12place(zero);
        // ↓↓複製箇所
        setaa12judge(boolean);
        // ↓↓複製箇所
        setaa12place(zero);
        // ↓↓複製箇所
        setac12judge(boolean);
        // ↓↓複製箇所
        setac12place(zero);
        // ↓↓複製箇所
        setad12judge(boolean);
        // ↓↓複製箇所
        setad12place(zero);
        // ↓↓複製箇所
        setaf12judge(boolean);
        // ↓↓複製箇所
        setaf12place(zero);
        // ↓↓複製箇所
        setag12place(zero);
        


        // ↓↓複製箇所
        console.log("H1",h1place);
        // ↓↓複製箇所
        console.log("I1",i1place);
        // ↓↓複製箇所
        console.log("K1",k1place);
        // ↓↓複製箇所
        console.log("L1",l1place);
        // ↓↓複製箇所
        console.log("O1",o1place);
        // ↓↓複製箇所
        console.log("R1",r1place);
        // ↓↓複製箇所
        console.log("X1",r1place);
        // ↓↓複製箇所
        console.log("AA1",aa1place);
        // ↓↓複製箇所
        console.log("B2",b2place);
        // ↓↓複製箇所
        console.log("C2",c2place);
        // ↓↓複製箇所
        console.log("E2",e2place);
        // ↓↓複製箇所
        console.log("F2",f2place);
        // ↓↓複製箇所
        console.log("H2",h2place);
        // ↓↓複製箇所
        console.log("I2",i2place);
        // ↓↓複製箇所
        console.log("K2",k2place);
        // ↓↓複製箇所
        console.log("L2",l2place);
        // ↓↓複製箇所
        console.log("B3",b3place);
        // ↓↓複製箇所
        console.log("C3",e3place);
        // ↓↓複製箇所
        console.log("E3",e3place);
        // ↓↓複製箇所
        console.log("F3",f3place);
        // ↓↓複製箇所
        console.log("H3",h3place);
        // ↓↓複製箇所
        console.log("I3",i3place);
        // ↓↓複製箇所
        console.log("K3",k3place);
        // ↓↓複製箇所
        console.log("L3",l3place);
        // ↓↓複製箇所
        console.log("N3",n3place);
        // ↓↓複製箇所
        console.log("O3",o3place);
        // ↓↓複製箇所
        console.log("Q3",q3place);
        // ↓↓複製箇所
        console.log("R3",r3place);
        // ↓↓複製箇所
        console.log("T3",t3place);
        // ↓↓複製箇所
        console.log("U3",u3place);
        // ↓↓複製箇所
        console.log("W3",w3place);
        // ↓↓複製箇所
        console.log("X3",x3place);
        // ↓↓複製箇所
        console.log("Z3",z3place);
        // ↓↓複製箇所
        console.log("AA3",aa3place);
        // ↓↓複製箇所
        console.log("AC3",ac3place);
        // ↓↓複製箇所
        console.log("AD3",ad3place);
        // ↓↓複製箇所
        console.log("AF3",af3place);
        // ↓↓複製箇所
        console.log("AG3",ag3place);
        // ↓↓複製箇所
        console.log("B4",b4place);
        // ↓↓複製箇所
        console.log("C4",c4place);
        // ↓↓複製箇所
        console.log("E4",e4place);
        // ↓↓複製箇所
        console.log("F4",f4place);
        // ↓↓複製箇所
        console.log("H4",h4place);
        // ↓↓複製箇所
        console.log("I4",i4place);
        // ↓↓複製箇所
        console.log("K4",k4place);
        // ↓↓複製箇所
        console.log("L4",l4place);
        // ↓↓複製箇所
        console.log("N4",n4place);
        // ↓↓複製箇所
        console.log("O4",o4place);
        // ↓↓複製箇所
        console.log("Q4",q4place);
        // ↓↓複製箇所
        console.log("R4",r4place);
        // ↓↓複製箇所
        console.log("T4",t4place);
        // ↓↓複製箇所
        console.log("U4",u4place);
        // ↓↓複製箇所
        console.log("W4",w4place);
        // ↓↓複製箇所
        console.log("X4",x4place);
        // ↓↓複製箇所
        console.log("Z4",z4place);
        // ↓↓複製箇所
        console.log("AA4",aa4place);
        // ↓↓複製箇所
        console.log("AC4",ac4place);
        // ↓↓複製箇所
        console.log("AD4",ad4place);
        // ↓↓複製箇所
        console.log("AF4",af4place);
        // ↓↓複製箇所
        console.log("AG4",ag4place);
        // ↓↓複製箇所
        console.log("B5",b5place);
        // ↓↓複製箇所
        console.log("C5",c5place);
        // ↓↓複製箇所
        console.log("E5",e5place);
        // ↓↓複製箇所
        console.log("F5",f5place);
        // ↓↓複製箇所
        console.log("H5",h5place);
        // ↓↓複製箇所
        console.log("I5",i5place);
        // ↓↓複製箇所
        console.log("K5",k5place);
        // ↓↓複製箇所
        console.log("L5",l5place);
        // ↓↓複製箇所
        console.log("N5",n5place);
        // ↓↓複製箇所
        console.log("O5",o5place);
        // ↓↓複製箇所
        console.log("Q5",q5place);
        // ↓↓複製箇所
        console.log("R5",r5place);
        // ↓↓複製箇所
        console.log("T5",t5place);
        // ↓↓複製箇所
        console.log("U5",u5place);
        // ↓↓複製箇所
        console.log("W5",w5place);
        // ↓↓複製箇所
        console.log("X5",x5place);
        // ↓↓複製箇所
        console.log("Z5",z5place);
        // ↓↓複製箇所
        console.log("AA5",aa5place);
        // ↓↓複製箇所
        console.log("AC5",aa5place);
        // ↓↓複製箇所
        console.log("AD5",ad5place);
        // ↓↓複製箇所
        console.log("AF5",af5place);
        // ↓↓複製箇所
        console.log("AG5",ag5place);
        // ↓↓複製箇所
        console.log("B6",b6place);
        // ↓↓複製箇所
        console.log("C6",c6place);
        // ↓↓複製箇所
        console.log("E6",e6place);
        // ↓↓複製箇所
        console.log("F6",f6place);
        // ↓↓複製箇所
        console.log("H6",h6place);
        // ↓↓複製箇所
        console.log("I6",i6place);
        // ↓↓複製箇所
        console.log("K6",k6place);
        // ↓↓複製箇所
        console.log("L6",l6place);
        // ↓↓複製箇所
        console.log("N6",n6place);
        // ↓↓複製箇所
        console.log("O6",o6place);
        // ↓↓複製箇所
        console.log("Q6",q6place);
        // ↓↓複製箇所
        console.log("R6",r6place);
        // ↓↓複製箇所
        console.log("T6",t6place);
        // ↓↓複製箇所
        console.log("U6",u6place);
        // ↓↓複製箇所
        console.log("W6",w6place);
        // ↓↓複製箇所
        console.log("X6",x6place);
        // ↓↓複製箇所
        console.log("Z6",z6place);
        // ↓↓複製箇所
        console.log("AA6",aa6place);
        // ↓↓複製箇所
        console.log("AC6",ac6place);
        // ↓↓複製箇所
        console.log("AD6",ad6place);
        // ↓↓複製箇所
        console.log("AF6",af6place);
        // ↓↓複製箇所
        console.log("AG6",ag6place);
        // ↓↓複製箇所
        console.log("B7",b7place);
        // ↓↓複製箇所
        console.log("C7",c7place);
        // ↓↓複製箇所
        console.log("E7",e7place);
        // ↓↓複製箇所
        console.log("F7",f7place);
        // ↓↓複製箇所
        console.log("H7",h7place);
        // ↓↓複製箇所
        console.log("I7",i7place);
        // ↓↓複製箇所
        console.log("K7",k7place);
        // ↓↓複製箇所
        console.log("L7",l7place);
        // ↓↓複製箇所
        console.log("N7",n7place);
        // ↓↓複製箇所
        console.log("O7",o7place);
        // ↓↓複製箇所
        console.log("Q7",q7place);
        // ↓↓複製箇所
        console.log("R7",q7place);
        // ↓↓複製箇所
        console.log("T7",t7place);
        // ↓↓複製箇所
        console.log("U7",u7place);
        // ↓↓複製箇所
        console.log("W7",w7place);
        // ↓↓複製箇所
        console.log("X7",x7place);
        // ↓↓複製箇所
        console.log("Z7",z7place);
        // ↓↓複製箇所
        console.log("AA7",aa7place);
        // ↓↓複製箇所
        console.log("AC7",ac7place);
        // ↓↓複製箇所
        console.log("AD7",ad7place);
        // ↓↓複製箇所
        console.log("AF7",af7place);
        // ↓↓複製箇所
        console.log("AG7",ag7place);
        // ↓↓複製箇所
        console.log("B8",b8place);
        // ↓↓複製箇所
        console.log("C8",c8place);
        // ↓↓複製箇所
        console.log("E8",e8place);
        // ↓↓複製箇所
        console.log("F8",f8place);
        // ↓↓複製箇所
        console.log("H8",h8place);
        // ↓↓複製箇所
        console.log("I8",i8place);
        // ↓↓複製箇所
        console.log("K8",k8place);
        // ↓↓複製箇所
        console.log("L8",l8place);
        // ↓↓複製箇所
        console.log("N8",n8place);
        // ↓↓複製箇所
        console.log("O8",o8place);
        // ↓↓複製箇所
        console.log("Q8",q8place);
        // ↓↓複製箇所
        console.log("R8",r8place);
        // ↓↓複製箇所
        console.log("T8",t8place);
        // ↓↓複製箇所
        console.log("U8",u8place);
        // ↓↓複製箇所
        console.log("W8",w8place);
        // ↓↓複製箇所
        console.log("X8",x8place);
        // ↓↓複製箇所
        console.log("Z8",z8place);
        // ↓↓複製箇所
        console.log("AA8",aa8place);
        // ↓↓複製箇所
        console.log("AC8",ac8place);
        // ↓↓複製箇所
        console.log("AD8",ad8place);
        // ↓↓複製箇所
        console.log("AF8",af8place);
        // ↓↓複製箇所
        console.log("AG8",ag8place);
        // ↓↓複製箇所
        console.log("B9",b9place);
        // ↓↓複製箇所
        console.log("C9",c9place);
        // ↓↓複製箇所
        console.log("E9",e9place);
        // ↓↓複製箇所
        console.log("F9",f9place);
        // ↓↓複製箇所
        console.log("H9",h9place);
        // ↓↓複製箇所
        console.log("I9",i9place);
        // ↓↓複製箇所
        console.log("K9",k9place);
        // ↓↓複製箇所
        console.log("L9",l9place);
        // ↓↓複製箇所
        console.log("N9",n9place);
        // ↓↓複製箇所
        console.log("O9",o9place);
        // ↓↓複製箇所
        console.log("Q9",q9place);
        // ↓↓複製箇所
        console.log("R9",r9place);
        // ↓↓複製箇所
        console.log("T9",t9place);
        // ↓↓複製箇所
        console.log("U9",u9place);
        // ↓↓複製箇所
        console.log("W9",w9place);
        // ↓↓複製箇所
        console.log("X9",x9place);
        // ↓↓複製箇所
        console.log("Z9",z9place);
        // ↓↓複製箇所
        console.log("AA9",aa9place);
        // ↓↓複製箇所
        console.log("AC9",ac9place);
        // ↓↓複製箇所
        console.log("AD9",ad9place);
        // ↓↓複製箇所
        console.log("AF9",af9place);
        // ↓↓複製箇所
        console.log("AG9",ag9place);
        // ↓↓複製箇所
        console.log("B11",b11place);
        // ↓↓複製箇所
        console.log("C11",c11place);
        // ↓↓複製箇所
        console.log("E11",e11place);
        // ↓↓複製箇所
        console.log("F11",f11place);
        // ↓↓複製箇所
        console.log("H11",h11place);
        // ↓↓複製箇所
        console.log("I11",i11place);
        // ↓↓複製箇所
        console.log("K11",k11place);
        // ↓↓複製箇所
        console.log("L11",l11place);
        // ↓↓複製箇所
        console.log("N11",n11place);
        // ↓↓複製箇所
        console.log("O11",o11place);
        // ↓↓複製箇所
        console.log("Q11",q11place);
        // ↓↓複製箇所
        console.log("R11",r11place);
        // ↓↓複製箇所
        console.log("T11",t11place);
        // ↓↓複製箇所
        console.log("U11",u11place);
        // ↓↓複製箇所
        console.log("W11",w11place);
        // ↓↓複製箇所
        console.log("X11",x11place);
        // ↓↓複製箇所
        console.log("Z11",z11place);
        // ↓↓複製箇所
        console.log("AA11",aa11place);
        // ↓↓複製箇所
        console.log("AC11",ac11place);
        // ↓↓複製箇所
        console.log("AD11",ad11place);
        // ↓↓複製箇所
        console.log("AF11",af11place);
        // ↓↓複製箇所
        console.log("AG11",ag11place);
        // ↓↓複製箇所
        console.log("B12",b12place);
        // ↓↓複製箇所
        console.log("C12",c12place);
        // ↓↓複製箇所
        console.log("E12",e12place);
        // ↓↓複製箇所
        console.log("F12",f12place);
        // ↓↓複製箇所
        console.log("H12",h12place);
        // ↓↓複製箇所
        console.log("I12",i12place);
        // ↓↓複製箇所
        console.log("K12",k12place);
        // ↓↓複製箇所
        console.log("L12",l12place);
        // ↓↓複製箇所
        console.log("N12",n12place);
        // ↓↓複製箇所
        console.log("O12",o12place);
        // ↓↓複製箇所
        console.log("Q12",q12place);
        // ↓↓複製箇所
        console.log("R12",r12place);
        // ↓↓複製箇所
        console.log("T12",t12place);
        // ↓↓複製箇所
        console.log("U12",u12place);
        // ↓↓複製箇所
        console.log("W12",w12place);
        // ↓↓複製箇所
        console.log("X12",x12place);
        // ↓↓複製箇所
        console.log("Z12",z12place);
        // ↓↓複製箇所
        console.log("AA12",aa12place);
        // ↓↓複製箇所
        console.log("AC12",ac12place);
        // ↓↓複製箇所
        console.log("AD12",ad12place);
        // ↓↓複製箇所
        console.log("AF12",af12place);
        // ↓↓複製箇所
        console.log("AG12",ag12place);



        if(todoListDisplay.length < 340){
            for(let i=0; i<340 - todoListDisplay.length; i++) {
                settodoListDisplay((prevTodoList) => {
                    const newTodo = {
                        id: Date.now(),
                        zasekiid: "",
                        sekino:0,
                        name:"",
                        busyo:"",
                        message:"",
                        tree: false,
                        kintai: false,
                        kinmu: false,
                        kaigi: false,
                        button: false,
                    };
                    return [...prevTodoList,newTodo];
                });   
            }
        }
        // console.log(todoListDisplay);
        let count:number = 0;
        setresetcount(count);
        // console.log(count);
    }


    // const dummy = ()=> {
    //     // 何もしない
    // };

    // 座席の配置
    const getzaseki = (zasekiid:string)=> {
        // console.log(zaseki);
        // console.log(zasekimode);
        // console.log(todoListDisplay);
        // todoListDisplayにデータをコピー
        if(!zasekimode){
            // settodoListCopy((prevTodoList) => {
            //     for(let i = 0; i < todoList.length; i++){
            //         prevTodoList[i].id = todoList[i].id;
            //         prevTodoList[i].sekino = todoList[i].sekino;
            //         prevTodoList[i].name = todoList[i].name;
            //         prevTodoList[i].busyo = todoList[i].busyo;
            //         prevTodoList[i].message = todoList[i].message;
            //         prevTodoList[i].tree = todoList[i].tree;
            //         prevTodoList[i].kintai = todoList[i].kintai;
            //         prevTodoList[i].kinmu = todoList[i].kinmu;
            //         prevTodoList[i].kaigi = todoList[i].kaigi;
            //         prevTodoList[i].button = todoList[i].button;
            //     }
            //     return [...prevTodoList];
            // });
            // console.log("todoList[0]",todoList[0]);
            // console.log("todoList[1]",todoList[1]);
            // console.log("todoListCopy[0]",todoListCopy[0]);
            // console.log("todoListCopy[1]",todoListCopy[1]);
            // lodecountfunc();
            let thisno=0;
            
            settodoListDisplay((prevTodoList) => {
                for(let i = 0; i < prevTodoList.length; i++){
                    if(prevTodoList[i].busyo === ""){
                        thisno = i;
                        break;
                    }
                }
                for(let i = 0; i < todoList.length; i++){
                    if(todoList[i].sekino === zasekino){
                        // console.log("displayok",i);
                        prevTodoList[thisno].id = todoList[i].id;
                        prevTodoList[thisno].zasekiid = zasekiid;
                        prevTodoList[thisno].sekino = todoList[i].sekino;
                        prevTodoList[thisno].name = todoList[i].name;
                        prevTodoList[thisno].busyo = todoList[i].busyo;
                        prevTodoList[thisno].message = todoList[i].message;
                        prevTodoList[thisno].tree = todoList[i].tree;
                        prevTodoList[thisno].kintai = todoList[i].kintai;
                        prevTodoList[thisno].kinmu = todoList[i].kinmu;
                        prevTodoList[thisno].kaigi = todoList[i].kaigi;
                        prevTodoList[thisno].button = todoList[i].button;
                        
                    }
                }
                return [ ...prevTodoList];
            });
            // console.log("todoListDisplay[0]",todoListDisplay[0]);
            // console.log("todoListDisplay[1]",todoListDisplay[1]);
            
            let boolean;
            boolean = true;
            // console.log(zasekiid);
            // console.log(todoListDisplay[thisno].zasekiid);
            if(todoListDisplay[thisno].sekino !== 0){
                switch (todoListDisplay[thisno].zasekiid) {
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H1":
                        // ↓↓変更箇所
                        seth1judge(boolean);
                        // ↓↓変更箇所
                        seth1place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I1":
                        // ↓↓変更箇所
                        seti1judge(boolean);
                        // ↓↓変更箇所
                        seti1place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K1":
                        // ↓↓変更箇所
                        setk1judge(boolean);
                        // ↓↓変更箇所
                        setk1place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L1":
                        // ↓↓変更箇所
                        setl1judge(boolean);
                        // ↓↓変更箇所
                        setl1place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O1":
                        // ↓↓変更箇所
                        seto1judge(boolean);
                        // ↓↓変更箇所
                        seto1place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R1":
                        // ↓↓変更箇所
                        setr1judge(boolean);
                        // ↓↓変更箇所
                        setr1place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X1":
                        // ↓↓変更箇所
                        setx1judge(boolean);
                        // ↓↓変更箇所
                        setx1place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA1":
                        // ↓↓変更箇所
                        setaa1judge(boolean);
                        // ↓↓変更箇所
                        setaa1place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B2":
                        // ↓↓変更箇所
                        setb2judge(boolean);
                        // ↓↓変更箇所
                        setb2place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C2":
                        // ↓↓変更箇所
                        setc2judge(boolean);
                        // ↓↓変更箇所
                        setc2place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E2":
                        // ↓↓変更箇所
                        sete2judge(boolean);
                        // ↓↓変更箇所
                        sete2place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F2":
                        // ↓↓変更箇所
                        setf2judge(boolean);
                        // ↓↓変更箇所
                        setf2place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H2":
                        // ↓↓変更箇所
                        seth2judge(boolean);
                        // ↓↓変更箇所
                        seth2place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I2":
                        // ↓↓変更箇所
                        seti2judge(boolean);
                        // ↓↓変更箇所
                        seti2place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K2":
                        // ↓↓変更箇所
                        setk2judge(boolean);
                        // ↓↓変更箇所
                        setk2place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L2":
                        // ↓↓変更箇所
                        setl2judge(boolean);
                        // ↓↓変更箇所
                        setl2place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B3":
                        // ↓↓変更箇所
                        setb3judge(boolean);
                        // ↓↓変更箇所
                        setb3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C3":
                        // ↓↓変更箇所
                        setc3judge(boolean);
                        // ↓↓変更箇所
                        setc3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E3":
                        // ↓↓変更箇所
                        sete3judge(boolean);
                        // ↓↓変更箇所
                        sete3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F3":
                        // ↓↓変更箇所
                        setf3judge(boolean);
                        // ↓↓変更箇所
                        setf3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H3":
                        // ↓↓変更箇所
                        seth3judge(boolean);
                        // ↓↓変更箇所
                        seth3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I3":
                        // ↓↓変更箇所
                        seti3judge(boolean);
                        // ↓↓変更箇所
                        seti3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K3":
                        // ↓↓変更箇所
                        setk3judge(boolean);
                        // ↓↓変更箇所
                        setk3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L3":
                        // ↓↓変更箇所
                        setl3judge(boolean);
                        // ↓↓変更箇所
                        setl3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N3":
                        // ↓↓変更箇所
                        setn3judge(boolean);
                        // ↓↓変更箇所
                        setn3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O3":
                        // ↓↓変更箇所
                        seto3judge(boolean);
                        // ↓↓変更箇所
                        seto3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q3":
                        // ↓↓変更箇所
                        setq3judge(boolean);
                        // ↓↓変更箇所
                        setq3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R3":
                        // ↓↓変更箇所
                        setr3judge(boolean);
                        // ↓↓変更箇所
                        setr3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T3":
                        // ↓↓変更箇所
                        sett3judge(boolean);
                        // ↓↓変更箇所
                        sett3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U3":
                        // ↓↓変更箇所
                        setu3judge(boolean);
                        // ↓↓変更箇所
                        setu3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W3":
                        // ↓↓変更箇所
                        setw3judge(boolean);
                        // ↓↓変更箇所
                        setw3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X3":
                        // ↓↓変更箇所
                        setx3judge(boolean);
                        // ↓↓変更箇所
                        setx3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z3":
                        // ↓↓変更箇所
                        setz3judge(boolean);
                        // ↓↓変更箇所
                        setz3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA3":
                        // ↓↓変更箇所
                        setaa3judge(boolean);
                        // ↓↓変更箇所
                        setaa3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC3":
                        // ↓↓変更箇所
                        setac3judge(boolean);
                        // ↓↓変更箇所
                        setac3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD3":
                        // ↓↓変更箇所
                        setad3judge(boolean);
                        // ↓↓変更箇所
                        setad3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF3":
                        // ↓↓変更箇所
                        setaf3judge(boolean);
                        // ↓↓変更箇所
                        setaf3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG3":
                        // ↓↓変更箇所
                        setag3judge(boolean);
                        // ↓↓変更箇所
                        setag3place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B4":
                        // ↓↓変更箇所
                        setb4judge(boolean);
                        // ↓↓変更箇所
                        setb4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C4":
                        // ↓↓変更箇所
                        setc4judge(boolean);
                        // ↓↓変更箇所
                        setc4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E4":
                        // ↓↓変更箇所
                        sete4judge(boolean);
                        // ↓↓変更箇所
                        sete4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F4":
                        // ↓↓変更箇所
                        setf4judge(boolean);
                        // ↓↓変更箇所
                        setf4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H4":
                        // ↓↓変更箇所
                        seth4judge(boolean);
                        // ↓↓変更箇所
                        seth4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I4":
                        // ↓↓変更箇所
                        seti4judge(boolean);
                        // ↓↓変更箇所
                        seti4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K4":
                        // ↓↓変更箇所
                        setk4judge(boolean);
                        // ↓↓変更箇所
                        setk4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L4":
                        // ↓↓変更箇所
                        setl4judge(boolean);
                        // ↓↓変更箇所
                        setl4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N4":
                        // ↓↓変更箇所
                        setn4judge(boolean);
                        // ↓↓変更箇所
                        setn4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O4":
                        // ↓↓変更箇所
                        seto4judge(boolean);
                        // ↓↓変更箇所
                        seto4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q4":
                        // ↓↓変更箇所
                        setq4judge(boolean);
                        // ↓↓変更箇所
                        setq4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R4":
                        // ↓↓変更箇所
                        setr4judge(boolean);
                        // ↓↓変更箇所
                        setr4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T4":
                        // ↓↓変更箇所
                        sett4judge(boolean);
                        // ↓↓変更箇所
                        sett4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U4":
                        // ↓↓変更箇所
                        setu4judge(boolean);
                        // ↓↓変更箇所
                        setu4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W4":
                        // ↓↓変更箇所
                        setw4judge(boolean);
                        // ↓↓変更箇所
                        setw4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X4":
                        // ↓↓変更箇所
                        setx4judge(boolean);
                        // ↓↓変更箇所
                        setx4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z4":
                        // ↓↓変更箇所
                        setz4judge(boolean);
                        // ↓↓変更箇所
                        setz4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA4":
                        // ↓↓変更箇所
                        setaa4judge(boolean);
                        // ↓↓変更箇所
                        setaa4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC4":
                        // ↓↓変更箇所
                        setac4judge(boolean);
                        // ↓↓変更箇所
                        setac4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD4":
                        // ↓↓変更箇所
                        setad4judge(boolean);
                        // ↓↓変更箇所
                        setad4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF4":
                        // ↓↓変更箇所
                        setaf4judge(boolean);
                        // ↓↓変更箇所
                        setaf4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG4":
                        // ↓↓変更箇所
                        setag4judge(boolean);
                        // ↓↓変更箇所
                        setag4place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B5":
                        // ↓↓変更箇所
                        setb5judge(boolean);
                        // ↓↓変更箇所
                        setb5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C5":
                        // ↓↓変更箇所
                        setc5judge(boolean);
                        // ↓↓変更箇所
                        setc5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E5":
                        // ↓↓変更箇所
                        sete5judge(boolean);
                        // ↓↓変更箇所
                        sete5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F5":
                        // ↓↓変更箇所
                        setf5judge(boolean);
                        // ↓↓変更箇所
                        setf5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H5":
                        // ↓↓変更箇所
                        seth5judge(boolean);
                        // ↓↓変更箇所
                        seth5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I5":
                        // ↓↓変更箇所
                        seti5judge(boolean);
                        // ↓↓変更箇所
                        seti5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K5":
                        // ↓↓変更箇所
                        setk5judge(boolean);
                        // ↓↓変更箇所
                        setk5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L5":
                        // ↓↓変更箇所
                        setl5judge(boolean);
                        // ↓↓変更箇所
                        setl5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N5":
                        // ↓↓変更箇所
                        setn5judge(boolean);
                        // ↓↓変更箇所
                        setn5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O5":
                        // ↓↓変更箇所
                        seto5judge(boolean);
                        // ↓↓変更箇所
                        seto5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q5":
                        // ↓↓変更箇所
                        setq5judge(boolean);
                        // ↓↓変更箇所
                        setq5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R5":
                        // ↓↓変更箇所
                        setr5judge(boolean);
                        // ↓↓変更箇所
                        setr5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T5":
                        // ↓↓変更箇所
                        sett5judge(boolean);
                        // ↓↓変更箇所
                        sett5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U5":
                        // ↓↓変更箇所
                        setu5judge(boolean);
                        // ↓↓変更箇所
                        setu5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W5":
                        // ↓↓変更箇所
                        setw5judge(boolean);
                        // ↓↓変更箇所
                        setw5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X5":
                        // ↓↓変更箇所
                        setx5judge(boolean);
                        // ↓↓変更箇所
                        setx5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z5":
                        // ↓↓変更箇所
                        setz5judge(boolean);
                        // ↓↓変更箇所
                        setz5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA5":
                        // ↓↓変更箇所
                        setaa5judge(boolean);
                        // ↓↓変更箇所
                        setaa5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC5":
                        // ↓↓変更箇所
                        setac5judge(boolean);
                        // ↓↓変更箇所
                        setac5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD5":
                        // ↓↓変更箇所
                        setad5judge(boolean);
                        // ↓↓変更箇所
                        setad5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF5":
                        // ↓↓変更箇所
                        setaf5judge(boolean);
                        // ↓↓変更箇所
                        setaf5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG5":
                        // ↓↓変更箇所
                        setag5judge(boolean);
                        // ↓↓変更箇所
                        setag5place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B6":
                        // ↓↓変更箇所
                        setb6judge(boolean);
                        // ↓↓変更箇所
                        setb6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C6":
                        // ↓↓変更箇所
                        setc6judge(boolean);
                        // ↓↓変更箇所
                        setc6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E6":
                        // ↓↓変更箇所
                        sete6judge(boolean);
                        // ↓↓変更箇所
                        sete6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F6":
                        // ↓↓変更箇所
                        setf6judge(boolean);
                        // ↓↓変更箇所
                        setf6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H6":
                        // ↓↓変更箇所
                        seth6judge(boolean);
                        // ↓↓変更箇所
                        seth6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I6":
                        // ↓↓変更箇所
                        seti6judge(boolean);
                        // ↓↓変更箇所
                        seti6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K6":
                        // ↓↓変更箇所
                        setk6judge(boolean);
                        // ↓↓変更箇所
                        setk6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L6":
                        // ↓↓変更箇所
                        setl6judge(boolean);
                        // ↓↓変更箇所
                        setl6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N6":
                        // ↓↓変更箇所
                        setn6judge(boolean);
                        // ↓↓変更箇所
                        setn6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O6":
                        // ↓↓変更箇所
                        seto6judge(boolean);
                        // ↓↓変更箇所
                        seto6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q6":
                        // ↓↓変更箇所
                        setq6judge(boolean);
                        // ↓↓変更箇所
                        setq6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R6":
                        // ↓↓変更箇所
                        setr6judge(boolean);
                        // ↓↓変更箇所
                        setr6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T6":
                        // ↓↓変更箇所
                        sett6judge(boolean);
                        // ↓↓変更箇所
                        sett6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U6":
                        // ↓↓変更箇所
                        setu6judge(boolean);
                        // ↓↓変更箇所
                        setu6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W6":
                        // ↓↓変更箇所
                        setw6judge(boolean);
                        // ↓↓変更箇所
                        setw6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X6":
                        // ↓↓変更箇所
                        setx6judge(boolean);
                        // ↓↓変更箇所
                        setx6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z6":
                        // ↓↓変更箇所
                        setz6judge(boolean);
                        // ↓↓変更箇所
                        setz6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA6":
                        // ↓↓変更箇所
                        setaa6judge(boolean);
                        // ↓↓変更箇所
                        setaa6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC6":
                        // ↓↓変更箇所
                        setac6judge(boolean);
                        // ↓↓変更箇所
                        setac6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD6":
                        // ↓↓変更箇所
                        setad6judge(boolean);
                        // ↓↓変更箇所
                        setad6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF6":
                        // ↓↓変更箇所
                        setaf6judge(boolean);
                        // ↓↓変更箇所
                        setaf6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG6":
                        // ↓↓変更箇所
                        setag6judge(boolean);
                        // ↓↓変更箇所
                        setag6place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B7":
                        // ↓↓変更箇所
                        setb7judge(boolean);
                        // ↓↓変更箇所
                        setb7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C7":
                        // ↓↓変更箇所
                        setc7judge(boolean);
                        // ↓↓変更箇所
                        setc7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E7":
                        // ↓↓変更箇所
                        sete7judge(boolean);
                        // ↓↓変更箇所
                        sete7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F7":
                        // ↓↓変更箇所
                        setf7judge(boolean);
                        // ↓↓変更箇所
                        setf7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H7":
                        // ↓↓変更箇所
                        seth7judge(boolean);
                        // ↓↓変更箇所
                        seth7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I7":
                        // ↓↓変更箇所
                        seti7judge(boolean);
                        // ↓↓変更箇所
                        seti7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K7":
                        // ↓↓変更箇所
                        setk7judge(boolean);
                        // ↓↓変更箇所
                        setk7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L7":
                        // ↓↓変更箇所
                        setl7judge(boolean);
                        // ↓↓変更箇所
                        setl7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N7":
                        // ↓↓変更箇所
                        setn7judge(boolean);
                        // ↓↓変更箇所
                        setn7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O7":
                        // ↓↓変更箇所
                        seto7judge(boolean);
                        // ↓↓変更箇所
                        seto7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q7":
                        // ↓↓変更箇所
                        setq7judge(boolean);
                        // ↓↓変更箇所
                        setq7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R7":
                        // ↓↓変更箇所
                        setr7judge(boolean);
                        // ↓↓変更箇所
                        setr7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T7":
                        // ↓↓変更箇所
                        sett7judge(boolean);
                        // ↓↓変更箇所
                        sett7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U7":
                        // ↓↓変更箇所
                        setu7judge(boolean);
                        // ↓↓変更箇所
                        setu7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W7":
                        // ↓↓変更箇所
                        setw7judge(boolean);
                        // ↓↓変更箇所
                        setw7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X7":
                        // ↓↓変更箇所
                        setx7judge(boolean);
                        // ↓↓変更箇所
                        setx7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z7":
                        // ↓↓変更箇所
                        setz7judge(boolean);
                        // ↓↓変更箇所
                        setz7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA7":
                        // ↓↓変更箇所
                        setaa7judge(boolean);
                        // ↓↓変更箇所
                        setaa7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC7":
                        // ↓↓変更箇所
                        setac7judge(boolean);
                        // ↓↓変更箇所
                        setac7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD7":
                        // ↓↓変更箇所
                        setad7judge(boolean);
                        // ↓↓変更箇所
                        setad7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF7":
                        // ↓↓変更箇所
                        setaf7judge(boolean);
                        // ↓↓変更箇所
                        setaf7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG7":
                        // ↓↓変更箇所
                        setag7judge(boolean);
                        // ↓↓変更箇所
                        setag7place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B8":
                        // ↓↓変更箇所
                        setb8judge(boolean);
                        // ↓↓変更箇所
                        setb8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C8":
                        // ↓↓変更箇所
                        setc8judge(boolean);
                        // ↓↓変更箇所
                        setc8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E8":
                        // ↓↓変更箇所
                        sete8judge(boolean);
                        // ↓↓変更箇所
                        sete8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F8":
                        // ↓↓変更箇所
                        setf8judge(boolean);
                        // ↓↓変更箇所
                        setf8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H8":
                        // ↓↓変更箇所
                        seth8judge(boolean);
                        // ↓↓変更箇所
                        seth8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I8":
                        // ↓↓変更箇所
                        seti8judge(boolean);
                        // ↓↓変更箇所
                        seti8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K8":
                        // ↓↓変更箇所
                        setk8judge(boolean);
                        // ↓↓変更箇所
                        setk8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L8":
                        // ↓↓変更箇所
                        setl8judge(boolean);
                        // ↓↓変更箇所
                        setl8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N8":
                        // ↓↓変更箇所
                        setn8judge(boolean);
                        // ↓↓変更箇所
                        setn8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O8":
                        // ↓↓変更箇所
                        seto8judge(boolean);
                        // ↓↓変更箇所
                        seto8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q8":
                        // ↓↓変更箇所
                        setq8judge(boolean);
                        // ↓↓変更箇所
                        setq8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R8":
                        // ↓↓変更箇所
                        setr8judge(boolean);
                        // ↓↓変更箇所
                        setr8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T8":
                        // ↓↓変更箇所
                        sett8judge(boolean);
                        // ↓↓変更箇所
                        sett8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U8":
                        // ↓↓変更箇所
                        setu8judge(boolean);
                        // ↓↓変更箇所
                        setu8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W8":
                        // ↓↓変更箇所
                        setw8judge(boolean);
                        // ↓↓変更箇所
                        setw8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X8":
                        // ↓↓変更箇所
                        setx8judge(boolean);
                        // ↓↓変更箇所
                        setx8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z8":
                        // ↓↓変更箇所
                        setz8judge(boolean);
                        // ↓↓変更箇所
                        setz8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA8":
                        // ↓↓変更箇所
                        setaa8judge(boolean);
                        // ↓↓変更箇所
                        setaa8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC8":
                        // ↓↓変更箇所
                        setac8judge(boolean);
                        // ↓↓変更箇所
                        setac8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD8":
                        // ↓↓変更箇所
                        setad8judge(boolean);
                        // ↓↓変更箇所
                        setad8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF8":
                        // ↓↓変更箇所
                        setaf8judge(boolean);
                        // ↓↓変更箇所
                        setaf8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG8":
                        // ↓↓変更箇所
                        setag8judge(boolean);
                        // ↓↓変更箇所
                        setag8place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B9":
                        // ↓↓変更箇所
                        setb9judge(boolean);
                        // ↓↓変更箇所
                        setb9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C9":
                        // ↓↓変更箇所
                        setc9judge(boolean);
                        // ↓↓変更箇所
                        setc9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E9":
                        // ↓↓変更箇所
                        sete9judge(boolean);
                        // ↓↓変更箇所
                        sete9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F9":
                        // ↓↓変更箇所
                        setf9judge(boolean);
                        // ↓↓変更箇所
                        setf9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H9":
                        // ↓↓変更箇所
                        seth9judge(boolean);
                        // ↓↓変更箇所
                        seth9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I9":
                        // ↓↓変更箇所
                        seti9judge(boolean);
                        // ↓↓変更箇所
                        seti9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K9":
                        // ↓↓変更箇所
                        setk9judge(boolean);
                        // ↓↓変更箇所
                        setk9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L9":
                        // ↓↓変更箇所
                        setl9judge(boolean);
                        // ↓↓変更箇所
                        setl9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N9":
                        // ↓↓変更箇所
                        setn9judge(boolean);
                        // ↓↓変更箇所
                        setn9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O9":
                        // ↓↓変更箇所
                        seto9judge(boolean);
                        // ↓↓変更箇所
                        seto9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q9":
                        // ↓↓変更箇所
                        setq9judge(boolean);
                        // ↓↓変更箇所
                        setq9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R9":
                        // ↓↓変更箇所
                        setr9judge(boolean);
                        // ↓↓変更箇所
                        setr9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T9":
                        // ↓↓変更箇所
                        sett9judge(boolean);
                        // ↓↓変更箇所
                        sett9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U9":
                        // ↓↓変更箇所
                        setu9judge(boolean);
                        // ↓↓変更箇所
                        setu9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W9":
                        // ↓↓変更箇所
                        setw9judge(boolean);
                        // ↓↓変更箇所
                        setw9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X9":
                        // ↓↓変更箇所
                        setx9judge(boolean);
                        // ↓↓変更箇所
                        setx9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z9":
                        // ↓↓変更箇所
                        setz9judge(boolean);
                        // ↓↓変更箇所
                        setz9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA9":
                        // ↓↓変更箇所
                        setaa9judge(boolean);
                        // ↓↓変更箇所
                        setaa9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC9":
                        // ↓↓変更箇所
                        setac9judge(boolean);
                        // ↓↓変更箇所
                        setac9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD9":
                        // ↓↓変更箇所
                        setad9judge(boolean);
                        // ↓↓変更箇所
                        setad9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF9":
                        // ↓↓変更箇所
                        setaf9judge(boolean);
                        // ↓↓変更箇所
                        setaf9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG9":
                        // ↓↓変更箇所
                        setag9judge(boolean);
                        // ↓↓変更箇所
                        setag9place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B11":
                        // ↓↓変更箇所
                        setb11judge(boolean);
                        // ↓↓変更箇所
                        setb11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C11":
                        // ↓↓変更箇所
                        setc11judge(boolean);
                        // ↓↓変更箇所
                        setc11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E11":
                        // ↓↓変更箇所
                        sete11judge(boolean);
                        // ↓↓変更箇所
                        sete11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F11":
                        // ↓↓変更箇所
                        setf11judge(boolean);
                        // ↓↓変更箇所
                        setf11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H11":
                        // ↓↓変更箇所
                        seth11judge(boolean);
                        // ↓↓変更箇所
                        seth11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I11":
                        // ↓↓変更箇所
                        seti11judge(boolean);
                        // ↓↓変更箇所
                        seti11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K11":
                        // ↓↓変更箇所
                        setk11judge(boolean);
                        // ↓↓変更箇所
                        setk11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L11":
                        // ↓↓変更箇所
                        setl11judge(boolean);
                        // ↓↓変更箇所
                        setl11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N11":
                        // ↓↓変更箇所
                        setn11judge(boolean);
                        // ↓↓変更箇所
                        setn11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O11":
                        // ↓↓変更箇所
                        seto11judge(boolean);
                        // ↓↓変更箇所
                        seto11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q11":
                        // ↓↓変更箇所
                        setq11judge(boolean);
                        // ↓↓変更箇所
                        setq11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R11":
                        // ↓↓変更箇所
                        setr11judge(boolean);
                        // ↓↓変更箇所
                        setr11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T11":
                        // ↓↓変更箇所
                        sett11judge(boolean);
                        // ↓↓変更箇所
                        sett11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U11":
                        // ↓↓変更箇所
                        setu11judge(boolean);
                        // ↓↓変更箇所
                        setu11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W11":
                        // ↓↓変更箇所
                        setw11judge(boolean);
                        // ↓↓変更箇所
                        setw11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X11":
                        // ↓↓変更箇所
                        setx11judge(boolean);
                        // ↓↓変更箇所
                        setx11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z11":
                        // ↓↓変更箇所
                        setz11judge(boolean);
                        // ↓↓変更箇所
                        setz11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA11":
                        // ↓↓変更箇所
                        setaa11judge(boolean);
                        // ↓↓変更箇所
                        setaa11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC11":
                        // ↓↓変更箇所
                        setac11judge(boolean);
                        // ↓↓変更箇所
                        setac11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD11":
                        // ↓↓変更箇所
                        setad11judge(boolean);
                        // ↓↓変更箇所
                        setad11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF11":
                        // ↓↓変更箇所
                        setaf11judge(boolean);
                        // ↓↓変更箇所
                        setaf11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG11":
                        // ↓↓変更箇所
                        setag11judge(boolean);
                        // ↓↓変更箇所
                        setag11place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B12":
                        // ↓↓変更箇所
                        setb12judge(boolean);
                        // ↓↓変更箇所
                        setb12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C12":
                        // ↓↓変更箇所
                        setc12judge(boolean);
                        // ↓↓変更箇所
                        setc12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E12":
                        // ↓↓変更箇所
                        sete12judge(boolean);
                        // ↓↓変更箇所
                        sete12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F12":
                        // ↓↓変更箇所
                        setf12judge(boolean);
                        // ↓↓変更箇所
                        setf12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H12":
                        // ↓↓変更箇所
                        seth12judge(boolean);
                        // ↓↓変更箇所
                        seth12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I12":
                        // ↓↓変更箇所
                        seti12judge(boolean);
                        // ↓↓変更箇所
                        seti12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K12":
                        // ↓↓変更箇所
                        setk12judge(boolean);
                        // ↓↓変更箇所
                        setk12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L12":
                        // ↓↓変更箇所
                        setl12judge(boolean);
                        // ↓↓変更箇所
                        setl12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N12":
                        // ↓↓変更箇所
                        setn12judge(boolean);
                        // ↓↓変更箇所
                        setn12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O12":
                        // ↓↓変更箇所
                        seto12judge(boolean);
                        // ↓↓変更箇所
                        seto12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q12":
                        // ↓↓変更箇所
                        setq12judge(boolean);
                        // ↓↓変更箇所
                        setq12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R12":
                        // ↓↓変更箇所
                        setr12judge(boolean);
                        // ↓↓変更箇所
                        setr12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T12":
                        // ↓↓変更箇所
                        sett12judge(boolean);
                        // ↓↓変更箇所
                        sett12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U12":
                        // ↓↓変更箇所
                        setu12judge(boolean);
                        // ↓↓変更箇所
                        setu12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W12":
                        // ↓↓変更箇所
                        setw12judge(boolean);
                        // ↓↓変更箇所
                        setw12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X12":
                        // ↓↓変更箇所
                        setx12judge(boolean);
                        // ↓↓変更箇所
                        setx12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z12":
                        // ↓↓変更箇所
                        setz12judge(boolean);
                        // ↓↓変更箇所
                        setz12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA12":
                        // ↓↓変更箇所
                        setaa12judge(boolean);
                        // ↓↓変更箇所
                        setaa12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC12":
                        // ↓↓変更箇所
                        setac12judge(boolean);
                        // ↓↓変更箇所
                        setac12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD12":
                        // ↓↓変更箇所
                        setad12judge(boolean);
                        // ↓↓変更箇所
                        setad12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF12":
                        // ↓↓変更箇所
                        setaf12judge(boolean);
                        // ↓↓変更箇所
                        setaf12place(thisno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG12":
                        // ↓↓変更箇所
                        setag12judge(boolean);
                        // ↓↓変更箇所
                        setag12place(thisno);
                        break;
                    default:
                        alert("error");
                }
                deleteTodo(todoListDisplay[thisno].id);
            }
            // let count:number = 1;
            // count = resetcount;
            // count++;
            // setresetcount(count);
            // console.log(count);
            // console.log("getzaseki",todoListDisplay);
        }
    }

    // 既に存在する座席の変更
    const changezaseki = (zasekiid:string)=> {
        if(!zasekimode){
            let thisno=0;
            let prearrno=0;
            let preid=0;
            let prezasekiid="";
            let presekino=0;
            let prename="";
            let prebusyo="";
            let premessage="";
            let pretree=false;
            let prekintai=false;
            let prekinmu=false;
            let prekaigi=false;
            let prebutton=false;
            settodoListDisplay((prevTodoList) => {
                for(let i = 0; i < prevTodoList.length; i++){
                    if(prevTodoList[i].zasekiid === zasekiid){
                        // console.log(prevTodoList[i].zasekiid,zasekiid);
                        thisno = i;
                        break;
                    }
                }
                for(let i = 0; i < todoList.length; i++){
                    if(todoList[i].sekino === zasekino){

                        prearrno=i;
                        preid = prevTodoList[thisno].id;
                        prezasekiid = prevTodoList[thisno].zasekiid;
                        presekino = prevTodoList[thisno].sekino;
                        prename = prevTodoList[thisno].name;
                        prebusyo = prevTodoList[thisno].busyo;
                        premessage = prevTodoList[thisno].message;
                        pretree = prevTodoList[thisno].tree;
                        prekintai = prevTodoList[thisno].kintai;
                        prekinmu = prevTodoList[thisno].kinmu;
                        prekaigi = prevTodoList[thisno].kaigi;
                        prebutton = prevTodoList[thisno].button; 


                        prevTodoList[thisno].id = todoList[i].id;
                        prevTodoList[thisno].zasekiid = zasekiid;
                        prevTodoList[thisno].sekino = todoList[i].sekino;
                        prevTodoList[thisno].name = todoList[i].name;
                        prevTodoList[thisno].busyo = todoList[i].busyo;
                        prevTodoList[thisno].message = todoList[i].message;
                        prevTodoList[thisno].tree = todoList[i].tree;
                        prevTodoList[thisno].kintai = todoList[i].kintai;
                        prevTodoList[thisno].kinmu = todoList[i].kinmu;
                        prevTodoList[thisno].kaigi = todoList[i].kaigi;
                        prevTodoList[thisno].button = todoList[i].button;
                    }
                }
                return [ ...prevTodoList];
            });
            switch (todoListDisplay[thisno].zasekiid) {
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "H1":
                    // ↓↓変更箇所
                    seth1place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "I1":
                    // ↓↓変更箇所
                    seti1place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "K1":
                    // ↓↓変更箇所
                    setk1place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "L1":
                    // ↓↓変更箇所
                    setl1place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "O1":
                    // ↓↓変更箇所
                    seto1place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "R1":
                    // ↓↓変更箇所
                    setr1place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "X1":
                    // ↓↓変更箇所
                    setx1place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AA1":
                    // ↓↓変更箇所
                    setaa1place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "B2":
                    // ↓↓変更箇所
                    setb2place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "C2":
                    // ↓↓変更箇所
                    setc2place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "E2":
                    // ↓↓変更箇所
                    sete2place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "F2":
                    // ↓↓変更箇所
                    setf2place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "H2":
                    // ↓↓変更箇所
                    seth2place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "I2":
                    // ↓↓変更箇所
                    seti2place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "K2":
                    // ↓↓変更箇所
                    setk2place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "L2":
                    // ↓↓変更箇所
                    setl2place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "B3":
                    // ↓↓変更箇所
                    setb3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "C3":
                    // ↓↓変更箇所
                    setc3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "E3":
                    // ↓↓変更箇所
                    sete3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "F3":
                    // ↓↓変更箇所
                    setf3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "H3":
                    // ↓↓変更箇所
                    seth3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "I3":
                    // ↓↓変更箇所
                    seti3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "K3":
                    // ↓↓変更箇所
                    setk3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "L3":
                    // ↓↓変更箇所
                    setl3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "N3":
                    // ↓↓変更箇所
                    setn3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "O3":
                    // ↓↓変更箇所
                    seto3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Q3":
                    // ↓↓変更箇所
                    setq3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "R3":
                    // ↓↓変更箇所
                    setr3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "T3":
                    // ↓↓変更箇所
                    sett3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "U3":
                    // ↓↓変更箇所
                    setu3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "W3":
                    // ↓↓変更箇所
                    setw3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "X3":
                    // ↓↓変更箇所
                    setx3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Z3":
                    // ↓↓変更箇所
                    setz3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AA3":
                    // ↓↓変更箇所
                    setaa3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AC3":
                    // ↓↓変更箇所
                    setac3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AD3":
                    // ↓↓変更箇所
                    setad3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AF3":
                    // ↓↓変更箇所
                    setaf3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AG3":
                    // ↓↓変更箇所
                    setag3place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "B4":
                    // ↓↓変更箇所
                    setb4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "C4":
                    // ↓↓変更箇所
                    setc4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "E4":
                    // ↓↓変更箇所
                    sete4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "F4":
                    // ↓↓変更箇所
                    setf4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "H4":
                    // ↓↓変更箇所
                    seth4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "I4":
                    // ↓↓変更箇所
                    seti4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "K4":
                    // ↓↓変更箇所
                    setk4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "L4":
                    // ↓↓変更箇所
                    setl4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "N4":
                    // ↓↓変更箇所
                    setn4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "O4":
                    // ↓↓変更箇所
                    seto4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Q4":
                    // ↓↓変更箇所
                    setq4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "R4":
                    // ↓↓変更箇所
                    setr4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "T4":
                    // ↓↓変更箇所
                    sett4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "U4":
                    // ↓↓変更箇所
                    setu4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "W4":
                    // ↓↓変更箇所
                    setw4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "X4":
                    // ↓↓変更箇所
                    setx4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Z4":
                    // ↓↓変更箇所
                    setz4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AA4":
                    // ↓↓変更箇所
                    setaa4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AC4":
                    // ↓↓変更箇所
                    setac4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AD4":
                    // ↓↓変更箇所
                    setad4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AF4":
                    // ↓↓変更箇所
                    setaf4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AG4":
                    // ↓↓変更箇所
                    setag4place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "B5":
                    // ↓↓変更箇所
                    setb5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "C5":
                    // ↓↓変更箇所
                    setc5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "E5":
                    // ↓↓変更箇所
                    sete5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "F5":
                    // ↓↓変更箇所
                    setf5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "H5":
                    // ↓↓変更箇所
                    seth5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "I5":
                    // ↓↓変更箇所
                    seti5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "K5":
                    // ↓↓変更箇所
                    setk5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "L5":
                    // ↓↓変更箇所
                    setl5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "N5":
                    // ↓↓変更箇所
                    setn5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "O5":
                    // ↓↓変更箇所
                    seto5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Q5":
                    // ↓↓変更箇所
                    setq5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "R5":
                    // ↓↓変更箇所
                    setr5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "T5":
                    // ↓↓変更箇所
                    sett5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "U5":
                    // ↓↓変更箇所
                    setu5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "W5":
                    // ↓↓変更箇所
                    setw5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "X5":
                    // ↓↓変更箇所
                    setx5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Z5":
                    // ↓↓変更箇所
                    setz5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AA5":
                    // ↓↓変更箇所
                    setaa5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AC5":
                    // ↓↓変更箇所
                    setac5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AD5":
                    // ↓↓変更箇所
                    setad5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AF5":
                    // ↓↓変更箇所
                    setaf5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AG5":
                    // ↓↓変更箇所
                    setag5place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "B6":
                    // ↓↓変更箇所
                    setb6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "C6":
                    // ↓↓変更箇所
                    setc6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "E6":
                    // ↓↓変更箇所
                    sete6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "F6":
                    // ↓↓変更箇所
                    setf6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "H6":
                    // ↓↓変更箇所
                    seth6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "I6":
                    // ↓↓変更箇所
                    seti6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "K6":
                    // ↓↓変更箇所
                    setk6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "L6":
                    // ↓↓変更箇所
                    setl6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "N6":
                    // ↓↓変更箇所
                    setn6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "O6":
                    // ↓↓変更箇所
                    seto6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Q6":
                    // ↓↓変更箇所
                    setq6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "R6":
                    // ↓↓変更箇所
                    setr6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "T6":
                    // ↓↓変更箇所
                    sett6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "U6":
                    // ↓↓変更箇所
                    setu6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "W6":
                    // ↓↓変更箇所
                    setw6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "X6":
                    // ↓↓変更箇所
                    setx6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Z6":
                    // ↓↓変更箇所
                    setz6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AA6":
                    // ↓↓変更箇所
                    setaa6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AC6":
                    // ↓↓変更箇所
                    setac6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AD6":
                    // ↓↓変更箇所
                    setad6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AF6":
                    // ↓↓変更箇所
                    setaf6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AG6":
                    // ↓↓変更箇所
                    setag6place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "B7":
                    // ↓↓変更箇所
                    setb7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "C7":
                    // ↓↓変更箇所
                    setc7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "E7":
                    // ↓↓変更箇所
                    sete7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "F7":
                    // ↓↓変更箇所
                    setf7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "H7":
                    // ↓↓変更箇所
                    seth7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "I7":
                    // ↓↓変更箇所
                    seti7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "K7":
                    // ↓↓変更箇所
                    setk7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "L7":
                    // ↓↓変更箇所
                    setl7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "N7":
                    // ↓↓変更箇所
                    setn7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "O7":
                    // ↓↓変更箇所
                    seto7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Q7":
                    // ↓↓変更箇所
                    setq7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "R7":
                    // ↓↓変更箇所
                    setr7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "T7":
                    // ↓↓変更箇所
                    sett7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "U7":
                    // ↓↓変更箇所
                    setu7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "W7":
                    // ↓↓変更箇所
                    setw7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "X7":
                    // ↓↓変更箇所
                    setx7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Z7":
                    // ↓↓変更箇所
                    setz7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AA7":
                    // ↓↓変更箇所
                    setaa7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AC7":
                    // ↓↓変更箇所
                    setac7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AD7":
                    // ↓↓変更箇所
                    setad7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AF7":
                    // ↓↓変更箇所
                    setaf7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AG7":
                    // ↓↓変更箇所
                    setag7place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "B8":
                    // ↓↓変更箇所
                    setb8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "C8":
                    // ↓↓変更箇所
                    setc8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "E8":
                    // ↓↓変更箇所
                    sete8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "F8":
                    // ↓↓変更箇所
                    setf8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "H8":
                    // ↓↓変更箇所
                    seth8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "I8":
                    // ↓↓変更箇所
                    seti8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "K8":
                    // ↓↓変更箇所
                    setk8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "L8":
                    // ↓↓変更箇所
                    setl8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "N8":
                    // ↓↓変更箇所
                    setn8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "O8":
                    // ↓↓変更箇所
                    seto8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Q8":
                    // ↓↓変更箇所
                    setq8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "R8":
                    // ↓↓変更箇所
                    setr8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "T8":
                    // ↓↓変更箇所
                    sett8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "U8":
                    // ↓↓変更箇所
                    setu8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "W8":
                    // ↓↓変更箇所
                    setw8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "X8":
                    // ↓↓変更箇所
                    setx8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Z8":
                    // ↓↓変更箇所
                    setz8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AA8":
                    // ↓↓変更箇所
                    setaa8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AC8":
                    // ↓↓変更箇所
                    setac8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AD8":
                    // ↓↓変更箇所
                    setad8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AF8":
                    // ↓↓変更箇所
                    setaf8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AG8":
                    // ↓↓変更箇所
                    setag8place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "B9":
                    // ↓↓変更箇所
                    setb9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "C9":
                    // ↓↓変更箇所
                    setc9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "E9":
                    // ↓↓変更箇所
                    sete9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "F9":
                    // ↓↓変更箇所
                    setf9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "H9":
                    // ↓↓変更箇所
                    seth9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "I9":
                    // ↓↓変更箇所
                    seti9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "K9":
                    // ↓↓変更箇所
                    setk9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "L9":
                    // ↓↓変更箇所
                    setl9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "N9":
                    // ↓↓変更箇所
                    setn9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "O9":
                    // ↓↓変更箇所
                    seto9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Q9":
                    // ↓↓変更箇所
                    setq9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "R9":
                    // ↓↓変更箇所
                    setr9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "T9":
                    // ↓↓変更箇所
                    sett9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "U9":
                    // ↓↓変更箇所
                    setu9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "W9":
                    // ↓↓変更箇所
                    setw9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "X9":
                    // ↓↓変更箇所
                    setx9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Z9":
                    // ↓↓変更箇所
                    setz9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AA9":
                    // ↓↓変更箇所
                    setaa9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AC9":
                    // ↓↓変更箇所
                    setac9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AD9":
                    // ↓↓変更箇所
                    setad9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AF9":
                    // ↓↓変更箇所
                    setaf9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AG9":
                    // ↓↓変更箇所
                    setag9place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "B11":
                    // ↓↓変更箇所
                    setb11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "C11":
                    // ↓↓変更箇所
                    setc11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "E11":
                    // ↓↓変更箇所
                    sete11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "F11":
                    // ↓↓変更箇所
                    setf11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "H11":
                    // ↓↓変更箇所
                    seth11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "I11":
                    // ↓↓変更箇所
                    seti11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "K11":
                    // ↓↓変更箇所
                    setk11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "L11":
                    // ↓↓変更箇所
                    setl11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "N11":
                    // ↓↓変更箇所
                    setn11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "O11":
                    // ↓↓変更箇所
                    seto11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Q11":
                    // ↓↓変更箇所
                    setq11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "R11":
                    // ↓↓変更箇所
                    setr11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "T11":
                    // ↓↓変更箇所
                    sett11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "U11":
                    // ↓↓変更箇所
                    setu11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "W11":
                    // ↓↓変更箇所
                    setw11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "X11":
                    // ↓↓変更箇所
                    setx11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Z11":
                    // ↓↓変更箇所
                    setz11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AA11":
                    // ↓↓変更箇所
                    setaa11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AC11":
                    // ↓↓変更箇所
                    setac11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AD11":
                    // ↓↓変更箇所
                    setad11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AF11":
                    // ↓↓変更箇所
                    setaf11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AG11":
                    // ↓↓変更箇所
                    setag11place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "B12":
                    // ↓↓変更箇所
                    setb12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "C12":
                    // ↓↓変更箇所
                    setc12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "E12":
                    // ↓↓変更箇所
                    sete12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "F12":
                    // ↓↓変更箇所
                    setf12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "H12":
                    // ↓↓変更箇所
                    seth12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "I12":
                    // ↓↓変更箇所
                    seti12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "K12":
                    // ↓↓変更箇所
                    setk12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "L12":
                    // ↓↓変更箇所
                    setl12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "N12":
                    // ↓↓変更箇所
                    setn12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "O12":
                    // ↓↓変更箇所
                    seto12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Q12":
                    // ↓↓変更箇所
                    setq12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "R12":
                    // ↓↓変更箇所
                    setr12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "T12":
                    // ↓↓変更箇所
                    sett12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "U12":
                    // ↓↓変更箇所
                    setu12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "W12":
                    // ↓↓変更箇所
                    setw12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "X12":
                    // ↓↓変更箇所
                    setx12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "Z12":
                    // ↓↓変更箇所
                    setz12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AA12":
                    // ↓↓変更箇所
                    setaa12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AC12":
                    // ↓↓変更箇所
                    setac12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AD12":
                    // ↓↓変更箇所
                    setad12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AF12":
                    // ↓↓変更箇所
                    setaf12place(thisno);
                    break;
                // ↓↓複製箇所 
                // ↓↓変更箇所
                case "AG12":
                    // ↓↓変更箇所
                    setag12place(thisno);
                    break;
                default:
                    alert("error");
            };
            change(prearrno,preid,prezasekiid,presekino,prename,prebusyo,premessage,pretree,prekintai,prekinmu,prekaigi,prebutton);
            // deleteTodo(todoListDisplay[thisno].id);
        }
    }

    // 席替えをコントロールする変数
    const [sekigaejudge,setsekigaejudge] = useState<boolean>(() => {
        
        const localStorageSekigaejudge = localStorage.getItem('sekigaejudge');
        
        return JSON.parse(localStorageSekigaejudge ?? '[]');
    });

    useEffect(() => {
        // ローカルストレージに保存
        
        localStorage.setItem('sekigaejudge', JSON.stringify(sekigaejudge));

        // console.log(sekigaejudge);
        
    }, [sekigaejudge]);
    // 最初に選択した座席番号を記憶
    const [beforezasekino,setbeforezasekino] = useState<number>(() => {
        
        const localStorageBeforezasekino = localStorage.getItem('beforezasekino');
        
        return JSON.parse(localStorageBeforezasekino ?? '[]');
    });

    useEffect(() => {
        // ローカルストレージに保存
        
        localStorage.setItem('beforezasekino', JSON.stringify(beforezasekino));

        // console.log(beforezasekino);
        
    }, [beforezasekino]);
    
    //  席替えを行う関数
    const sekigae = (sekino:number) => {
        let judge = false;
        let zero = 0;
        if(zasekimode){
            judge = true;
            setsekigaejudge(judge);
            // console.log("sekino",sekino);
            // beforezasekinoがundefinedでなければ以下を実行
            if(beforezasekino !== undefined){
                // beforezasekinoがsekinoと同じなら席替えモードをキャンセル
                if(beforezasekino === sekino){
                    judge = false;
                    setsekigaejudge(judge);
                    // console.log("SAME");
                    setbeforezasekino(zero);
                    // console.log("beforezasekino",beforezasekino);
                // beforezasekinoがsekinoと同じなら以下を実行
                }else{
                    // beforesekinoが0ならsekinoを代入
                    if(beforezasekino === 0){
                        setbeforezasekino(sekino);
                        // console.log("beforezero");
                    // beforezasekinoが0以外なら席替えを実行
                    }else{
                        // console.log("OK");
                        let beforeno = 0;
                        let thisno = 0;
                        for(let i = 0; i < todoListDisplay.length; i++){
                            
                            if(todoListDisplay[i].sekino === 0){

                            }else if(todoListDisplay[i].sekino === sekino){
                                thisno = i;
                                // console.log("thisno",thisno);
                            }else if(todoListDisplay[i].sekino === beforezasekino){
                                beforeno = i;
                                // console.log("beforeno",beforeno);
                            }
                        }
                        // setTodoListDisplayCopy(todoListDisplay);
                        // console.log("sekigaecopy",todoListDisplayCopy);
                        if(sekino !== 0){
                            let num = 0;
                            const beforeid = todoListDisplay[beforeno].id;
                            const beforezasekiid = todoListDisplay[beforeno].zasekiid;
                            const beforesekino = todoListDisplay[beforeno].sekino;
                            const beforename = todoListDisplay[beforeno].name;
                            const beforebusyo = todoListDisplay[beforeno].busyo;
                            const beforemessage = todoListDisplay[beforeno].message;
                            const beforetree = todoListDisplay[beforeno].tree;
                            const beforekintai = todoListDisplay[beforeno].kintai;
                            const beforekinmu = todoListDisplay[beforeno].kinmu;
                            const beforekaigi = todoListDisplay[beforeno].kaigi;
                            const beforebutton = todoListDisplay[beforeno].button;
                            const thisid = todoListDisplay[thisno].id;
                            const thiszasekiid = todoListDisplay[thisno].zasekiid;
                            const thissekino = todoListDisplay[thisno].sekino;
                            const thisname = todoListDisplay[thisno].name;
                            const thisbusyo = todoListDisplay[thisno].busyo;
                            const thismessage = todoListDisplay[thisno].message;
                            const thistree = todoListDisplay[thisno].tree;
                            const thiskintai = todoListDisplay[thisno].kintai;
                            const thiskinmu = todoListDisplay[thisno].kinmu;
                            const thiskaigi = todoListDisplay[thisno].kaigi;
                            const thisbutton = todoListDisplay[thisno].button;
                            const updatedTodoLists = [...todoListDisplay].map((todoList) => {
                                if (num === beforeno) {
                                    // console.log("num",num,"thisno",thisno);
                                    todoList.id = thisid;
                                    todoList.zasekiid = thiszasekiid; 
                                    todoList.zasekiid = beforezasekiid;
                                    todoList.sekino = thissekino;
                                    todoList.name = thisname;
                                    todoList.busyo = thisbusyo;
                                    todoList.message = thismessage;
                                    todoList.tree = thistree;
                                    todoList.kintai = thiskintai;
                                    todoList.kinmu = thiskinmu;
                                    todoList.kaigi = thiskaigi;
                                    todoList.button = thisbutton;
                                }else if (num === thisno) {
                                    // console.log("num",num,"beforeno",beforeno);
                                    todoList.id = beforeid;
                                    todoList.zasekiid = beforezasekiid;
                                    todoList.zasekiid = thiszasekiid; 
                                    todoList.sekino = beforesekino;
                                    todoList.name = beforename;
                                    todoList.busyo = beforebusyo;
                                    todoList.message = beforemessage;
                                    todoList.tree = beforetree;
                                    todoList.kintai = beforekintai;
                                    todoList.kinmu = beforekinmu;
                                    todoList.kaigi = beforekaigi;
                                    todoList.button = beforebutton;
                                    
                                }
                                num++;
                                // console.log(num);
                                return todoList;
                            });
                            settodoListDisplay(updatedTodoLists);
                            
                            
                            // console.log("todoList.zasekiid,beforeno", todoListDisplay[beforeno].zasekiid," ",beforeno);
                            // console.log("todoList.zasekiid,thisno", todoListDisplay[thisno].zasekiid," ",thisno);
                            // console.log("h1place",h1place);
                            // console.log("i1place",i1place);
                            // console.log("k1place",k1place);
                            // console.log("todolistDisplay[0]",todoListDisplay[0]);
                            // console.log("todolistDisplay[1]",todoListDisplay[1]);
                            // console.log("todolistDisplay[2]",todoListDisplay[2]);
                        }
                        
                        // console.log("sekigae",todoListDisplay);
                        // console.log("sekigaecopy2",todoListDisplayCopy);
                        // if(thisno > beforeno){
                        //     console.log("thisno > beforezasekino");
                        // }else if(thisno < beforeno){
                        //     console.log("thisno < beforezasekino");
                        // }
                        judge = false;
                        setsekigaejudge(judge);
                        setbeforezasekino(zero);
                    }
                }
            }else{
                setbeforezasekino(zero);
            }
            
        
        }
    
    };

    const sekigae2 = (zasekiid:string) => {
        if(sekigaejudge){
            let boolean;
            boolean = true;
            // console.log(zasekiid);
            // console.log(todoListDisplay[thisno].zasekiid);
            if(beforezasekino === 0){
                boolean = false;
                setsekigaejudge(boolean);
            }else{
                let beforeno = 0;
                let beforezasekiid = "";
                // console.log("beforezasekino:",beforezasekino);
                for(let i = 0; i < todoListDisplay.length; i++){
                    if(todoListDisplay[i].sekino === beforezasekino){
                        beforezasekiid = todoListDisplay[i].zasekiid;
                        // console.log("beforezasekiid:",beforezasekiid);
                        beforeno = i;
                        // console.log("beforeno:",beforeno);
                        break;
                    }
                }
                let num = 0;
                const updatedTodoLists = [...todoListDisplay].map((todoList) => {
                    if(num === beforeno){
                        todoList.zasekiid = zasekiid;
                    }
                    num += 1;
                    return todoList;
                })
                settodoListDisplay(updatedTodoLists);
                boolean = true;
                switch (zasekiid) {
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H1":
                        // ↓↓変更箇所
                        seth1judge(boolean);
                        // ↓↓変更箇所
                        seth1place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I1":
                        // ↓↓変更箇所
                        seti1judge(boolean);
                        // ↓↓変更箇所
                        seti1place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K1":
                        // ↓↓変更箇所
                        setk1judge(boolean);
                        // ↓↓変更箇所
                        setk1place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L1":
                        // ↓↓変更箇所
                        setl1judge(boolean);
                        // ↓↓変更箇所
                        setl1place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O1":
                        // ↓↓変更箇所
                        seto1judge(boolean);
                        // ↓↓変更箇所
                        seto1place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R1":
                        // ↓↓変更箇所
                        setr1judge(boolean);
                        // ↓↓変更箇所
                        setr1place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X1":
                        // ↓↓変更箇所
                        setx1judge(boolean);
                        // ↓↓変更箇所
                        setx1place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA1":
                        // ↓↓変更箇所
                        setaa1judge(boolean);
                        // ↓↓変更箇所
                        setaa1place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B2":
                        // ↓↓変更箇所
                        setb2judge(boolean);
                        // ↓↓変更箇所
                        setb2place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C2":
                        // ↓↓変更箇所
                        setc2judge(boolean);
                        // ↓↓変更箇所
                        setc2place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E2":
                        // ↓↓変更箇所
                        sete2judge(boolean);
                        // ↓↓変更箇所
                        sete2place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F2":
                        // ↓↓変更箇所
                        setf2judge(boolean);
                        // ↓↓変更箇所
                        setf2place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H2":
                        // ↓↓変更箇所
                        seth2judge(boolean);
                        // ↓↓変更箇所
                        seth2place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I2":
                        // ↓↓変更箇所
                        seti2judge(boolean);
                        // ↓↓変更箇所
                        seti2place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K2":
                        // ↓↓変更箇所
                        setk2judge(boolean);
                        // ↓↓変更箇所
                        setk2place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L2":
                        // ↓↓変更箇所
                        setl2judge(boolean);
                        // ↓↓変更箇所
                        setl2place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B3":
                        // ↓↓変更箇所
                        setb3judge(boolean);
                        // ↓↓変更箇所
                        setb3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C3":
                        // ↓↓変更箇所
                        setc3judge(boolean);
                        // ↓↓変更箇所
                        setc3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E3":
                        // ↓↓変更箇所
                        sete3judge(boolean);
                        // ↓↓変更箇所
                        sete3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F3":
                        // ↓↓変更箇所
                        setf3judge(boolean);
                        // ↓↓変更箇所
                        setf3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H3":
                        // ↓↓変更箇所
                        seth3judge(boolean);
                        // ↓↓変更箇所
                        seth3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I3":
                        // ↓↓変更箇所
                        seti3judge(boolean);
                        // ↓↓変更箇所
                        seti3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K3":
                        // ↓↓変更箇所
                        setk3judge(boolean);
                        // ↓↓変更箇所
                        setk3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L3":
                        // ↓↓変更箇所
                        setl3judge(boolean);
                        // ↓↓変更箇所
                        setl3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N3":
                        // ↓↓変更箇所
                        setn3judge(boolean);
                        // ↓↓変更箇所
                        setn3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O3":
                        // ↓↓変更箇所
                        seto3judge(boolean);
                        // ↓↓変更箇所
                        seto3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q3":
                        // ↓↓変更箇所
                        setq3judge(boolean);
                        // ↓↓変更箇所
                        setq3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R3":
                        // ↓↓変更箇所
                        setr3judge(boolean);
                        // ↓↓変更箇所
                        setr3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T3":
                        // ↓↓変更箇所
                        sett3judge(boolean);
                        // ↓↓変更箇所
                        sett3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U3":
                        // ↓↓変更箇所
                        setu3judge(boolean);
                        // ↓↓変更箇所
                        setu3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W3":
                        // ↓↓変更箇所
                        setw3judge(boolean);
                        // ↓↓変更箇所
                        setw3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X3":
                        // ↓↓変更箇所
                        setx3judge(boolean);
                        // ↓↓変更箇所
                        setx3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z3":
                        // ↓↓変更箇所
                        setz3judge(boolean);
                        // ↓↓変更箇所
                        setz3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA3":
                        // ↓↓変更箇所
                        setaa3judge(boolean);
                        // ↓↓変更箇所
                        setaa3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC3":
                        // ↓↓変更箇所
                        setac3judge(boolean);
                        // ↓↓変更箇所
                        setac3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD3":
                        // ↓↓変更箇所
                        setad3judge(boolean);
                        // ↓↓変更箇所
                        setad3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF3":
                        // ↓↓変更箇所
                        setaf3judge(boolean);
                        // ↓↓変更箇所
                        setaf3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG3":
                        // ↓↓変更箇所
                        setag3judge(boolean);
                        // ↓↓変更箇所
                        setag3place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B4":
                        // ↓↓変更箇所
                        setb4judge(boolean);
                        // ↓↓変更箇所
                        setb4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C4":
                        // ↓↓変更箇所
                        setc4judge(boolean);
                        // ↓↓変更箇所
                        setc4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E4":
                        // ↓↓変更箇所
                        sete4judge(boolean);
                        // ↓↓変更箇所
                        sete4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F4":
                        // ↓↓変更箇所
                        setf4judge(boolean);
                        // ↓↓変更箇所
                        setf4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H4":
                        // ↓↓変更箇所
                        seth4judge(boolean);
                        // ↓↓変更箇所
                        seth4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I4":
                        // ↓↓変更箇所
                        seti4judge(boolean);
                        // ↓↓変更箇所
                        seti4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K4":
                        // ↓↓変更箇所
                        setk4judge(boolean);
                        // ↓↓変更箇所
                        setk4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L4":
                        // ↓↓変更箇所
                        setl4judge(boolean);
                        // ↓↓変更箇所
                        setl4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N4":
                        // ↓↓変更箇所
                        setn4judge(boolean);
                        // ↓↓変更箇所
                        setn4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O4":
                        // ↓↓変更箇所
                        seto4judge(boolean);
                        // ↓↓変更箇所
                        seto4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q4":
                        // ↓↓変更箇所
                        setq4judge(boolean);
                        // ↓↓変更箇所
                        setq4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R4":
                        // ↓↓変更箇所
                        setr4judge(boolean);
                        // ↓↓変更箇所
                        setr4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T4":
                        // ↓↓変更箇所
                        sett4judge(boolean);
                        // ↓↓変更箇所
                        sett4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U4":
                        // ↓↓変更箇所
                        setu4judge(boolean);
                        // ↓↓変更箇所
                        setu4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W4":
                        // ↓↓変更箇所
                        setw4judge(boolean);
                        // ↓↓変更箇所
                        setw4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X4":
                        // ↓↓変更箇所
                        setx4judge(boolean);
                        // ↓↓変更箇所
                        setx4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z4":
                        // ↓↓変更箇所
                        setz4judge(boolean);
                        // ↓↓変更箇所
                        setz4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA4":
                        // ↓↓変更箇所
                        setaa4judge(boolean);
                        // ↓↓変更箇所
                        setaa4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC4":
                        // ↓↓変更箇所
                        setac4judge(boolean);
                        // ↓↓変更箇所
                        setac4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD4":
                        // ↓↓変更箇所
                        setad4judge(boolean);
                        // ↓↓変更箇所
                        setad4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF4":
                        // ↓↓変更箇所
                        setaf4judge(boolean);
                        // ↓↓変更箇所
                        setaf4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG4":
                        // ↓↓変更箇所
                        setag4judge(boolean);
                        // ↓↓変更箇所
                        setag4place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B5":
                        // ↓↓変更箇所
                        setb5judge(boolean);
                        // ↓↓変更箇所
                        setb5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C5":
                        // ↓↓変更箇所
                        setc5judge(boolean);
                        // ↓↓変更箇所
                        setc5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E5":
                        // ↓↓変更箇所
                        sete5judge(boolean);
                        // ↓↓変更箇所
                        sete5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F5":
                        // ↓↓変更箇所
                        setf5judge(boolean);
                        // ↓↓変更箇所
                        setf5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H5":
                        // ↓↓変更箇所
                        seth5judge(boolean);
                        // ↓↓変更箇所
                        seth5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I5":
                        // ↓↓変更箇所
                        seti5judge(boolean);
                        // ↓↓変更箇所
                        seti5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K5":
                        // ↓↓変更箇所
                        setk5judge(boolean);
                        // ↓↓変更箇所
                        setk5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L5":
                        // ↓↓変更箇所
                        setl5judge(boolean);
                        // ↓↓変更箇所
                        setl5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N5":
                        // ↓↓変更箇所
                        setn5judge(boolean);
                        // ↓↓変更箇所
                        setn5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O5":
                        // ↓↓変更箇所
                        seto5judge(boolean);
                        // ↓↓変更箇所
                        seto5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q5":
                        // ↓↓変更箇所
                        setq5judge(boolean);
                        // ↓↓変更箇所
                        setq5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R5":
                        // ↓↓変更箇所
                        setr5judge(boolean);
                        // ↓↓変更箇所
                        setr5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T5":
                        // ↓↓変更箇所
                        sett5judge(boolean);
                        // ↓↓変更箇所
                        sett5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U5":
                        // ↓↓変更箇所
                        setu5judge(boolean);
                        // ↓↓変更箇所
                        setu5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W5":
                        // ↓↓変更箇所
                        setw5judge(boolean);
                        // ↓↓変更箇所
                        setw5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X5":
                        // ↓↓変更箇所
                        setx5judge(boolean);
                        // ↓↓変更箇所
                        setx5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z5":
                        // ↓↓変更箇所
                        setz5judge(boolean);
                        // ↓↓変更箇所
                        setz5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA5":
                        // ↓↓変更箇所
                        setaa5judge(boolean);
                        // ↓↓変更箇所
                        setaa5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC5":
                        // ↓↓変更箇所
                        setac5judge(boolean);
                        // ↓↓変更箇所
                        setac5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD5":
                        // ↓↓変更箇所
                        setad5judge(boolean);
                        // ↓↓変更箇所
                        setad5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF5":
                        // ↓↓変更箇所
                        setaf5judge(boolean);
                        // ↓↓変更箇所
                        setaf5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG5":
                        // ↓↓変更箇所
                        setag5judge(boolean);
                        // ↓↓変更箇所
                        setag5place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B6":
                        // ↓↓変更箇所
                        setb6judge(boolean);
                        // ↓↓変更箇所
                        setb6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C6":
                        // ↓↓変更箇所
                        setc6judge(boolean);
                        // ↓↓変更箇所
                        setc6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E6":
                        // ↓↓変更箇所
                        sete6judge(boolean);
                        // ↓↓変更箇所
                        sete6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F6":
                        // ↓↓変更箇所
                        setf6judge(boolean);
                        // ↓↓変更箇所
                        setf6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H6":
                        // ↓↓変更箇所
                        seth6judge(boolean);
                        // ↓↓変更箇所
                        seth6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I6":
                        // ↓↓変更箇所
                        seti6judge(boolean);
                        // ↓↓変更箇所
                        seti6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K6":
                        // ↓↓変更箇所
                        setk6judge(boolean);
                        // ↓↓変更箇所
                        setk6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L6":
                        // ↓↓変更箇所
                        setl6judge(boolean);
                        // ↓↓変更箇所
                        setl6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N6":
                        // ↓↓変更箇所
                        setn6judge(boolean);
                        // ↓↓変更箇所
                        setn6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O6":
                        // ↓↓変更箇所
                        seto6judge(boolean);
                        // ↓↓変更箇所
                        seto6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q6":
                        // ↓↓変更箇所
                        setq6judge(boolean);
                        // ↓↓変更箇所
                        setq6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R6":
                        // ↓↓変更箇所
                        setr6judge(boolean);
                        // ↓↓変更箇所
                        setr6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T6":
                        // ↓↓変更箇所
                        sett6judge(boolean);
                        // ↓↓変更箇所
                        sett6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U6":
                        // ↓↓変更箇所
                        setu6judge(boolean);
                        // ↓↓変更箇所
                        setu6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W6":
                        // ↓↓変更箇所
                        setw6judge(boolean);
                        // ↓↓変更箇所
                        setw6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X6":
                        // ↓↓変更箇所
                        setx6judge(boolean);
                        // ↓↓変更箇所
                        setx6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z6":
                        // ↓↓変更箇所
                        setz6judge(boolean);
                        // ↓↓変更箇所
                        setz6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA6":
                        // ↓↓変更箇所
                        setaa6judge(boolean);
                        // ↓↓変更箇所
                        setaa6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC6":
                        // ↓↓変更箇所
                        setac6judge(boolean);
                        // ↓↓変更箇所
                        setac6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD6":
                        // ↓↓変更箇所
                        setad6judge(boolean);
                        // ↓↓変更箇所
                        setad6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF6":
                        // ↓↓変更箇所
                        setaf6judge(boolean);
                        // ↓↓変更箇所
                        setaf6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG6":
                        // ↓↓変更箇所
                        setag6judge(boolean);
                        // ↓↓変更箇所
                        setag6place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B7":
                        // ↓↓変更箇所
                        setb7judge(boolean);
                        // ↓↓変更箇所
                        setb7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C7":
                        // ↓↓変更箇所
                        setc7judge(boolean);
                        // ↓↓変更箇所
                        setc7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E7":
                        // ↓↓変更箇所
                        sete7judge(boolean);
                        // ↓↓変更箇所
                        sete7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F7":
                        // ↓↓変更箇所
                        setf7judge(boolean);
                        // ↓↓変更箇所
                        setf7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H7":
                        // ↓↓変更箇所
                        seth7judge(boolean);
                        // ↓↓変更箇所
                        seth7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I7":
                        // ↓↓変更箇所
                        seti7judge(boolean);
                        // ↓↓変更箇所
                        seti7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K7":
                        // ↓↓変更箇所
                        setk7judge(boolean);
                        // ↓↓変更箇所
                        setk7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L7":
                        // ↓↓変更箇所
                        setl7judge(boolean);
                        // ↓↓変更箇所
                        setl7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N7":
                        // ↓↓変更箇所
                        setn7judge(boolean);
                        // ↓↓変更箇所
                        setn7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O7":
                        // ↓↓変更箇所
                        seto7judge(boolean);
                        // ↓↓変更箇所
                        seto7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q7":
                        // ↓↓変更箇所
                        setq7judge(boolean);
                        // ↓↓変更箇所
                        setq7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R7":
                        // ↓↓変更箇所
                        setr7judge(boolean);
                        // ↓↓変更箇所
                        setr7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T7":
                        // ↓↓変更箇所
                        sett7judge(boolean);
                        // ↓↓変更箇所
                        sett7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U7":
                        // ↓↓変更箇所
                        setu7judge(boolean);
                        // ↓↓変更箇所
                        setu7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W7":
                        // ↓↓変更箇所
                        setw7judge(boolean);
                        // ↓↓変更箇所
                        setw7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X7":
                        // ↓↓変更箇所
                        setx7judge(boolean);
                        // ↓↓変更箇所
                        setx7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z7":
                        // ↓↓変更箇所
                        setz7judge(boolean);
                        // ↓↓変更箇所
                        setz7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA7":
                        // ↓↓変更箇所
                        setaa7judge(boolean);
                        // ↓↓変更箇所
                        setaa7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC7":
                        // ↓↓変更箇所
                        setac7judge(boolean);
                        // ↓↓変更箇所
                        setac7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD7":
                        // ↓↓変更箇所
                        setad7judge(boolean);
                        // ↓↓変更箇所
                        setad7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF7":
                        // ↓↓変更箇所
                        setaf7judge(boolean);
                        // ↓↓変更箇所
                        setaf7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG7":
                        // ↓↓変更箇所
                        setag7judge(boolean);
                        // ↓↓変更箇所
                        setag7place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B8":
                        // ↓↓変更箇所
                        setb8judge(boolean);
                        // ↓↓変更箇所
                        setb8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C8":
                        // ↓↓変更箇所
                        setc8judge(boolean);
                        // ↓↓変更箇所
                        setc8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E8":
                        // ↓↓変更箇所
                        sete8judge(boolean);
                        // ↓↓変更箇所
                        sete8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F8":
                        // ↓↓変更箇所
                        setf8judge(boolean);
                        // ↓↓変更箇所
                        setf8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H8":
                        // ↓↓変更箇所
                        seth8judge(boolean);
                        // ↓↓変更箇所
                        seth8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I8":
                        // ↓↓変更箇所
                        seti8judge(boolean);
                        // ↓↓変更箇所
                        seti8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K8":
                        // ↓↓変更箇所
                        setk8judge(boolean);
                        // ↓↓変更箇所
                        setk8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L8":
                        // ↓↓変更箇所
                        setl8judge(boolean);
                        // ↓↓変更箇所
                        setl8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N8":
                        // ↓↓変更箇所
                        setn8judge(boolean);
                        // ↓↓変更箇所
                        setn8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O8":
                        // ↓↓変更箇所
                        seto8judge(boolean);
                        // ↓↓変更箇所
                        seto8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q8":
                        // ↓↓変更箇所
                        setq8judge(boolean);
                        // ↓↓変更箇所
                        setq8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R8":
                        // ↓↓変更箇所
                        setr8judge(boolean);
                        // ↓↓変更箇所
                        setr8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T8":
                        // ↓↓変更箇所
                        sett8judge(boolean);
                        // ↓↓変更箇所
                        sett8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U8":
                        // ↓↓変更箇所
                        setu8judge(boolean);
                        // ↓↓変更箇所
                        setu8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W8":
                        // ↓↓変更箇所
                        setw8judge(boolean);
                        // ↓↓変更箇所
                        setw8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X8":
                        // ↓↓変更箇所
                        setx8judge(boolean);
                        // ↓↓変更箇所
                        setx8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z8":
                        // ↓↓変更箇所
                        setz8judge(boolean);
                        // ↓↓変更箇所
                        setz8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA8":
                        // ↓↓変更箇所
                        setaa8judge(boolean);
                        // ↓↓変更箇所
                        setaa8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC8":
                        // ↓↓変更箇所
                        setac8judge(boolean);
                        // ↓↓変更箇所
                        setac8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD8":
                        // ↓↓変更箇所
                        setad8judge(boolean);
                        // ↓↓変更箇所
                        setad8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF8":
                        // ↓↓変更箇所
                        setaf8judge(boolean);
                        // ↓↓変更箇所
                        setaf8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG8":
                        // ↓↓変更箇所
                        setag8judge(boolean);
                        // ↓↓変更箇所
                        setag8place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B9":
                        // ↓↓変更箇所
                        setb9judge(boolean);
                        // ↓↓変更箇所
                        setb9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C9":
                        // ↓↓変更箇所
                        setc9judge(boolean);
                        // ↓↓変更箇所
                        setc9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E9":
                        // ↓↓変更箇所
                        sete9judge(boolean);
                        // ↓↓変更箇所
                        sete9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F9":
                        // ↓↓変更箇所
                        setf9judge(boolean);
                        // ↓↓変更箇所
                        setf9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H9":
                        // ↓↓変更箇所
                        seth9judge(boolean);
                        // ↓↓変更箇所
                        seth9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I9":
                        // ↓↓変更箇所
                        seti9judge(boolean);
                        // ↓↓変更箇所
                        seti9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K9":
                        // ↓↓変更箇所
                        setk9judge(boolean);
                        // ↓↓変更箇所
                        setk9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L9":
                        // ↓↓変更箇所
                        setl9judge(boolean);
                        // ↓↓変更箇所
                        setl9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N9":
                        // ↓↓変更箇所
                        setn9judge(boolean);
                        // ↓↓変更箇所
                        setn9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O9":
                        // ↓↓変更箇所
                        seto9judge(boolean);
                        // ↓↓変更箇所
                        seto9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q9":
                        // ↓↓変更箇所
                        setq9judge(boolean);
                        // ↓↓変更箇所
                        setq9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R9":
                        // ↓↓変更箇所
                        setr9judge(boolean);
                        // ↓↓変更箇所
                        setr9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T9":
                        // ↓↓変更箇所
                        sett9judge(boolean);
                        // ↓↓変更箇所
                        sett9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U9":
                        // ↓↓変更箇所
                        setu9judge(boolean);
                        // ↓↓変更箇所
                        setu9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W9":
                        // ↓↓変更箇所
                        setw9judge(boolean);
                        // ↓↓変更箇所
                        setw9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X9":
                        // ↓↓変更箇所
                        setx9judge(boolean);
                        // ↓↓変更箇所
                        setx9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z9":
                        // ↓↓変更箇所
                        setz9judge(boolean);
                        // ↓↓変更箇所
                        setz9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA9":
                        // ↓↓変更箇所
                        setaa9judge(boolean);
                        // ↓↓変更箇所
                        setaa9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC9":
                        // ↓↓変更箇所
                        setac9judge(boolean);
                        // ↓↓変更箇所
                        setac9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD9":
                        // ↓↓変更箇所
                        setad9judge(boolean);
                        // ↓↓変更箇所
                        setad9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF9":
                        // ↓↓変更箇所
                        setaf9judge(boolean);
                        // ↓↓変更箇所
                        setaf9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG9":
                        // ↓↓変更箇所
                        setag9judge(boolean);
                        // ↓↓変更箇所
                        setag9place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B11":
                        // ↓↓変更箇所
                        setb11judge(boolean);
                        // ↓↓変更箇所
                        setb11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C11":
                        // ↓↓変更箇所
                        setc11judge(boolean);
                        // ↓↓変更箇所
                        setc11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E11":
                        // ↓↓変更箇所
                        sete11judge(boolean);
                        // ↓↓変更箇所
                        sete11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F11":
                        // ↓↓変更箇所
                        setf11judge(boolean);
                        // ↓↓変更箇所
                        setf11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H11":
                        // ↓↓変更箇所
                        seth11judge(boolean);
                        // ↓↓変更箇所
                        seth11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I11":
                        // ↓↓変更箇所
                        seti11judge(boolean);
                        // ↓↓変更箇所
                        seti11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K11":
                        // ↓↓変更箇所
                        setk11judge(boolean);
                        // ↓↓変更箇所
                        setk11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L11":
                        // ↓↓変更箇所
                        setl11judge(boolean);
                        // ↓↓変更箇所
                        setl11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N11":
                        // ↓↓変更箇所
                        setn11judge(boolean);
                        // ↓↓変更箇所
                        setn11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O11":
                        // ↓↓変更箇所
                        seto11judge(boolean);
                        // ↓↓変更箇所
                        seto11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q11":
                        // ↓↓変更箇所
                        setq11judge(boolean);
                        // ↓↓変更箇所
                        setq11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R11":
                        // ↓↓変更箇所
                        setr11judge(boolean);
                        // ↓↓変更箇所
                        setr11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T11":
                        // ↓↓変更箇所
                        sett11judge(boolean);
                        // ↓↓変更箇所
                        sett11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U11":
                        // ↓↓変更箇所
                        setu11judge(boolean);
                        // ↓↓変更箇所
                        setu11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W11":
                        // ↓↓変更箇所
                        setw11judge(boolean);
                        // ↓↓変更箇所
                        setw11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X11":
                        // ↓↓変更箇所
                        setx11judge(boolean);
                        // ↓↓変更箇所
                        setx11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z11":
                        // ↓↓変更箇所
                        setz11judge(boolean);
                        // ↓↓変更箇所
                        setz11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA11":
                        // ↓↓変更箇所
                        setaa11judge(boolean);
                        // ↓↓変更箇所
                        setaa11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC11":
                        // ↓↓変更箇所
                        setac11judge(boolean);
                        // ↓↓変更箇所
                        setac11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD11":
                        // ↓↓変更箇所
                        setad11judge(boolean);
                        // ↓↓変更箇所
                        setad11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF11":
                        // ↓↓変更箇所
                        setaf11judge(boolean);
                        // ↓↓変更箇所
                        setaf11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG11":
                        // ↓↓変更箇所
                        setag11judge(boolean);
                        // ↓↓変更箇所
                        setag11place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B12":
                        // ↓↓変更箇所
                        setb12judge(boolean);
                        // ↓↓変更箇所
                        setb12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C12":
                        // ↓↓変更箇所
                        setc12judge(boolean);
                        // ↓↓変更箇所
                        setc12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E12":
                        // ↓↓変更箇所
                        sete12judge(boolean);
                        // ↓↓変更箇所
                        sete12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F12":
                        // ↓↓変更箇所
                        setf12judge(boolean);
                        // ↓↓変更箇所
                        setf12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H12":
                        // ↓↓変更箇所
                        seth12judge(boolean);
                        // ↓↓変更箇所
                        seth12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I12":
                        // ↓↓変更箇所
                        seti12judge(boolean);
                        // ↓↓変更箇所
                        seti12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K12":
                        // ↓↓変更箇所
                        setk12judge(boolean);
                        // ↓↓変更箇所
                        setk12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L12":
                        // ↓↓変更箇所
                        setl12judge(boolean);
                        // ↓↓変更箇所
                        setl12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N12":
                        // ↓↓変更箇所
                        setn12judge(boolean);
                        // ↓↓変更箇所
                        setn12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O12":
                        // ↓↓変更箇所
                        seto12judge(boolean);
                        // ↓↓変更箇所
                        seto12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q12":
                        // ↓↓変更箇所
                        setq12judge(boolean);
                        // ↓↓変更箇所
                        setq12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R12":
                        // ↓↓変更箇所
                        setr12judge(boolean);
                        // ↓↓変更箇所
                        setr12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T12":
                        // ↓↓変更箇所
                        sett12judge(boolean);
                        // ↓↓変更箇所
                        sett12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U12":
                        // ↓↓変更箇所
                        setu12judge(boolean);
                        // ↓↓変更箇所
                        setu12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W12":
                        // ↓↓変更箇所
                        setw12judge(boolean);
                        // ↓↓変更箇所
                        setw12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X12":
                        // ↓↓変更箇所
                        setx12judge(boolean);
                        // ↓↓変更箇所
                        setx12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z12":
                        // ↓↓変更箇所
                        setz12judge(boolean);
                        // ↓↓変更箇所
                        setz12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA12":
                        // ↓↓変更箇所
                        setaa12judge(boolean);
                        // ↓↓変更箇所
                        setaa12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC12":
                        // ↓↓変更箇所
                        setac12judge(boolean);
                        // ↓↓変更箇所
                        setac12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD12":
                        // ↓↓変更箇所
                        setad12judge(boolean);
                        // ↓↓変更箇所
                        setad12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF12":
                        // ↓↓変更箇所
                        setaf12judge(boolean);
                        // ↓↓変更箇所
                        setaf12place(beforeno);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG12":
                        // ↓↓変更箇所
                        setag12judge(boolean);
                        // ↓↓変更箇所
                        setag12place(beforeno);
                        break;
                    default:
                        alert("error");
                }
                boolean = false;
                switch (beforezasekiid) {
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H1":
                        // ↓↓変更箇所
                        seth1judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I1":
                        // ↓↓変更箇所
                        seti1judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K1":
                        // ↓↓変更箇所
                        setk1judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L1":
                        // ↓↓変更箇所
                        setl1judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O1":
                        // ↓↓変更箇所
                        seto1judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R1":
                        // ↓↓変更箇所
                        setr1judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X1":
                        // ↓↓変更箇所
                        setx1judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA1":
                        // ↓↓変更箇所
                        setaa1judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B2":
                        // ↓↓変更箇所
                        setb2judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C2":
                        // ↓↓変更箇所
                        setc2judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E2":
                        // ↓↓変更箇所
                        sete2judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F2":
                        // ↓↓変更箇所
                        setf2judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H2":
                        // ↓↓変更箇所
                        seth2judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I2":
                        // ↓↓変更箇所
                        seti2judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K2":
                        // ↓↓変更箇所
                        setk2judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L2":
                        // ↓↓変更箇所
                        setl2judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B3":
                        // ↓↓変更箇所
                        setb3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C3":
                        // ↓↓変更箇所
                        setc3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E3":
                        // ↓↓変更箇所
                        sete3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F3":
                        // ↓↓変更箇所
                        setf3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H3":
                        // ↓↓変更箇所
                        seth3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I3":
                        // ↓↓変更箇所
                        seti3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K3":
                        // ↓↓変更箇所
                        setk3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L3":
                        // ↓↓変更箇所
                        setl3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N3":
                        // ↓↓変更箇所
                        setn3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O3":
                        // ↓↓変更箇所
                        seto3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q3":
                        // ↓↓変更箇所
                        setq3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R3":
                        // ↓↓変更箇所
                        setr3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T3":
                        // ↓↓変更箇所
                        sett3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U3":
                        // ↓↓変更箇所
                        setu3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W3":
                        // ↓↓変更箇所
                        setw3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X3":
                        // ↓↓変更箇所
                        setx3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z3":
                        // ↓↓変更箇所
                        setz3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA3":
                        // ↓↓変更箇所
                        setaa3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC3":
                        // ↓↓変更箇所
                        setac3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD3":
                        // ↓↓変更箇所
                        setad3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF3":
                        // ↓↓変更箇所
                        setaf3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG3":
                        // ↓↓変更箇所
                        setag3judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B4":
                        // ↓↓変更箇所
                        setb4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C4":
                        // ↓↓変更箇所
                        setc4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E4":
                        // ↓↓変更箇所
                        sete4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F4":
                        // ↓↓変更箇所
                        setf4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H4":
                        // ↓↓変更箇所
                        seth4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I4":
                        // ↓↓変更箇所
                        seti4judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K4":
                        // ↓↓変更箇所
                        setk4judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L4":
                        // ↓↓変更箇所
                        setl4judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N4":
                        // ↓↓変更箇所
                        setn4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O4":
                        // ↓↓変更箇所
                        seto4judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q4":
                        // ↓↓変更箇所
                        setq4judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R4":
                        // ↓↓変更箇所
                        setr4judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T4":
                        // ↓↓変更箇所
                        sett4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U4":
                        // ↓↓変更箇所
                        setu4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W4":
                        // ↓↓変更箇所
                        setw4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X4":
                        // ↓↓変更箇所
                        setx4judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z4":
                        // ↓↓変更箇所
                        setz4judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA4":
                        // ↓↓変更箇所
                        setaa4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC4":
                        // ↓↓変更箇所
                        setac4judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD4":
                        // ↓↓変更箇所
                        setad4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF4":
                        // ↓↓変更箇所
                        setaf4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG4":
                        // ↓↓変更箇所
                        setag4judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B5":
                        // ↓↓変更箇所
                        setb5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C5":
                        // ↓↓変更箇所
                        setc5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E5":
                        // ↓↓変更箇所
                        sete5judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F5":
                        // ↓↓変更箇所
                        setf5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H5":
                        // ↓↓変更箇所
                        seth5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I5":
                        // ↓↓変更箇所
                        seti5judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K5":
                        // ↓↓変更箇所
                        setk5judge(boolean);
                        break;  
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L5":
                        // ↓↓変更箇所
                        setl5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N5":
                        // ↓↓変更箇所
                        setn5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O5":
                        // ↓↓変更箇所
                        seto5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q5":
                        // ↓↓変更箇所
                        setq5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R5":
                        // ↓↓変更箇所
                        setr5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T5":
                        // ↓↓変更箇所
                        sett5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U5":
                        // ↓↓変更箇所
                        setu5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W5":
                        // ↓↓変更箇所
                        setw5judge(boolean);
                        break;  
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X5":
                        // ↓↓変更箇所
                        setx5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z5":
                        // ↓↓変更箇所
                        setz5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA5":
                        // ↓↓変更箇所
                        setaa5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC5":
                        // ↓↓変更箇所
                        setac5judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD5":
                        // ↓↓変更箇所
                        setad5judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF5":
                        // ↓↓変更箇所
                        setaf5judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG5":
                        // ↓↓変更箇所
                        setag5judge(boolean);
                        break; 
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B6":
                        // ↓↓変更箇所
                        setb6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C6":
                        // ↓↓変更箇所
                        setc6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E6":
                        // ↓↓変更箇所
                        sete6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F6":
                        // ↓↓変更箇所
                        setf6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H6":
                        // ↓↓変更箇所
                        seth6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I6":
                        // ↓↓変更箇所
                        seti6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K6":
                        // ↓↓変更箇所
                        setk6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L6":
                        // ↓↓変更箇所
                        setl6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N6":
                        // ↓↓変更箇所
                        setn6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O6":
                        // ↓↓変更箇所
                        seto6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q6":
                        // ↓↓変更箇所
                        setq6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R6":
                        // ↓↓変更箇所
                        setr6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T6":
                        // ↓↓変更箇所
                        sett6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U6":
                        // ↓↓変更箇所
                        setu6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W6":
                        // ↓↓変更箇所
                        setw6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X6":
                        // ↓↓変更箇所
                        setx6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z6":
                        // ↓↓変更箇所
                        setz6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA6":
                        // ↓↓変更箇所
                        setaa6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC6":
                        // ↓↓変更箇所
                        setac6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD6":
                        // ↓↓変更箇所
                        setad6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF6":
                        // ↓↓変更箇所
                        setaf6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG6":
                        // ↓↓変更箇所
                        setag6judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B7":
                        // ↓↓変更箇所
                        setb7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C7":
                        // ↓↓変更箇所
                        setc7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E7":
                        // ↓↓変更箇所
                        sete7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F7":
                        // ↓↓変更箇所
                        setf7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H7":
                        // ↓↓変更箇所
                        seth7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I7":
                        // ↓↓変更箇所
                        seti7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K7":
                        // ↓↓変更箇所
                        setk7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L7":
                        // ↓↓変更箇所
                        setl7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N7":
                        // ↓↓変更箇所
                        setn7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O7":
                        // ↓↓変更箇所
                        seto7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q7":
                        // ↓↓変更箇所
                        setq7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R7":
                        // ↓↓変更箇所
                        setr7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T7":
                        // ↓↓変更箇所
                        sett7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U7":
                        // ↓↓変更箇所
                        setu7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W7":
                        // ↓↓変更箇所
                        setw7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X7":
                        // ↓↓変更箇所
                        setx7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z7":
                        // ↓↓変更箇所
                        setz7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA7":
                        // ↓↓変更箇所
                        setaa7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC7":
                        // ↓↓変更箇所
                        setac7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD7":
                        // ↓↓変更箇所
                        setad7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF7":
                        // ↓↓変更箇所
                        setaf7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG7":
                        // ↓↓変更箇所
                        setag7judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B8":
                        // ↓↓変更箇所
                        setb8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C8":
                        // ↓↓変更箇所
                        setc8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E8":
                        // ↓↓変更箇所
                        sete8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F8":
                        // ↓↓変更箇所
                        setf8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H8":
                        // ↓↓変更箇所
                        seth8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I8":
                        // ↓↓変更箇所
                        seti8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K8":
                        // ↓↓変更箇所
                        setk8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L8":
                        // ↓↓変更箇所
                        setl8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N8":
                        // ↓↓変更箇所
                        setn8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O8":
                        // ↓↓変更箇所
                        seto8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q8":
                        // ↓↓変更箇所
                        setq8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R8":
                        // ↓↓変更箇所
                        setr8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T8":
                        // ↓↓変更箇所
                        sett8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U8":
                        // ↓↓変更箇所
                        setu8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W8":
                        // ↓↓変更箇所
                        setw8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X8":
                        // ↓↓変更箇所
                        setx8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z8":
                        // ↓↓変更箇所
                        setz8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA8":
                        // ↓↓変更箇所
                        setaa8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC8":
                        // ↓↓変更箇所
                        setac8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD8":
                        // ↓↓変更箇所
                        setad8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF8":
                        // ↓↓変更箇所
                        setaf8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG8":
                        // ↓↓変更箇所
                        setag8judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B9":
                        // ↓↓変更箇所
                        setb9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C9":
                        // ↓↓変更箇所
                        setc9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E9":
                        // ↓↓変更箇所
                        sete9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F9":
                        // ↓↓変更箇所
                        setf9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H9":
                        // ↓↓変更箇所
                        seth9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I9":
                        // ↓↓変更箇所
                        seti9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K9":
                        // ↓↓変更箇所
                        setk9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L9":
                        // ↓↓変更箇所
                        setl9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N9":
                        // ↓↓変更箇所
                        setn9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O9":
                        // ↓↓変更箇所
                        seto9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q9":
                        // ↓↓変更箇所
                        setq9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R9":
                        // ↓↓変更箇所
                        setr9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T9":
                        // ↓↓変更箇所
                        sett9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U9":
                        // ↓↓変更箇所
                        setu9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W9":
                        // ↓↓変更箇所
                        setw9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X9":
                        // ↓↓変更箇所
                        setx9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z9":
                        // ↓↓変更箇所
                        setz9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA9":
                        // ↓↓変更箇所
                        setaa9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC9":
                        // ↓↓変更箇所
                        setac9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD9":
                        // ↓↓変更箇所
                        setad9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF9":
                        // ↓↓変更箇所
                        setaf9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG9":
                        // ↓↓変更箇所
                        setag9judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B11":
                        // ↓↓変更箇所
                        setb11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C11":
                        // ↓↓変更箇所
                        setc11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E11":
                        // ↓↓変更箇所
                        sete11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F11":
                        // ↓↓変更箇所
                        setf11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H11":
                        // ↓↓変更箇所
                        seth11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I11":
                        // ↓↓変更箇所
                        seti11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K11":
                        // ↓↓変更箇所
                        setk11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L11":
                        // ↓↓変更箇所
                        setl11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N11":
                        // ↓↓変更箇所
                        setn11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O11":
                        // ↓↓変更箇所
                        seto11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q11":
                        // ↓↓変更箇所
                        setq11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R11":
                        // ↓↓変更箇所
                        setr11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T11":
                        // ↓↓変更箇所
                        sett11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U11":
                        // ↓↓変更箇所
                        setu11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W11":
                        // ↓↓変更箇所
                        setw11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X11":
                        // ↓↓変更箇所
                        setx11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z11":
                        // ↓↓変更箇所
                        setz11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA11":
                        // ↓↓変更箇所
                        setaa11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC11":
                        // ↓↓変更箇所
                        setac11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD11":
                        // ↓↓変更箇所
                        setad11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF11":
                        // ↓↓変更箇所
                        setaf11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG11":
                        // ↓↓変更箇所
                        setag11judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "B12":
                        // ↓↓変更箇所
                        setb12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "C12":
                        // ↓↓変更箇所
                        setc12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "E12":
                        // ↓↓変更箇所
                        sete12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "F12":
                        // ↓↓変更箇所
                        setf12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "H12":
                        // ↓↓変更箇所
                        seth12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "I12":
                        // ↓↓変更箇所
                        seti12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "K12":
                        // ↓↓変更箇所
                        setk12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "L12":
                        // ↓↓変更箇所
                        setl12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "N12":
                        // ↓↓変更箇所
                        setn12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "O12":
                        // ↓↓変更箇所
                        seto12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Q12":
                        // ↓↓変更箇所
                        setq12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "R12":
                        // ↓↓変更箇所
                        setr12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "T12":
                        // ↓↓変更箇所
                        sett12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "U12":
                        // ↓↓変更箇所
                        setu12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "W12":
                        // ↓↓変更箇所
                        setw12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "X12":
                        // ↓↓変更箇所
                        setx12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "Z12":
                        // ↓↓変更箇所
                        setz12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AA12":
                        // ↓↓変更箇所
                        setaa12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AC12":
                        // ↓↓変更箇所
                        setac12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AD12":
                        // ↓↓変更箇所
                        setad12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AF12":
                        // ↓↓変更箇所
                        setaf12judge(boolean);
                        break;
                    // ↓↓複製箇所 
                    // ↓↓変更箇所
                    case "AG12":
                        // ↓↓変更箇所
                        setag12judge(boolean);
                        break;
                    default:
                        alert("error");
                }
                boolean = false;
                setsekigaejudge(boolean);
            }
        }
    }

    // コメントを記憶
    const getmessage = (sekino:number,getmessage:string) =>{
        // console.log(sekino);
        // console.log(getmessage);
        const updatedTodoLists = [...todoListDisplay].map((todoList) => {
            if (todoList.sekino === sekino) {
            todoList.message = getmessage;
            }
            return todoList;
        });
        settodoListDisplay(updatedTodoLists);

    };

    // ツリーの表示非表示をコントロール
    const changeCompletedtree = (id: number) => {
        // 変更前のTodoリストが引数として呼び出せる
        settodoListDisplay((prevTodoList) => {
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

    //勤怠のチェックボックスのコントロール   
    const changeCompletedkintai = (id: number) => {
        // 変更前のTodoリストが引数として呼び出せる
        settodoListDisplay((prevTodoList) => {
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
        settodoListDisplay((prevTodoList) => {
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
        settodoListDisplay((prevTodoList) => {
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

    const offzaseki = (zasekiid:string) => {
        let boolean;
        boolean = false;
        switch (zasekiid) {
            // ↓↓複製箇所
            // ↓↓変更箇所 
            case "H1":
                // ↓↓変更箇所
                seth1judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所 
            case "I1":
                // ↓↓変更箇所
                seti1judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "K1":
                // ↓↓変更箇所
                setk1judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "L1":
                // ↓↓変更箇所
                setl1judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "O1":
                // ↓↓変更箇所
                seto1judge(boolean);
                // console.log("offzaseki-o1");
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "R1":
                // ↓↓変更箇所
                setr1judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "X1":
                // ↓↓変更箇所
                setx1judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AA1":
                // ↓↓変更箇所
                setaa1judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "B2":
                // ↓↓変更箇所
                setb2judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "C2":
                // ↓↓変更箇所
                setc2judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "E2":
                // ↓↓変更箇所
                sete2judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "F2":
                // ↓↓変更箇所
                setf2judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "H2":
                // ↓↓変更箇所
                seth2judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "I2":
                // ↓↓変更箇所
                seti2judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "K2":
                // ↓↓変更箇所
                setk2judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "L2":
                // ↓↓変更箇所
                setl2judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "B3":
                // ↓↓変更箇所
                setb3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "C3":
                // ↓↓変更箇所
                setc3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "E3":
                // ↓↓変更箇所
                sete3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "F3":
                // ↓↓変更箇所
                setf3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "H3":
                // ↓↓変更箇所
                seth3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "I3":
                // ↓↓変更箇所
                seti3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "K3":
                // ↓↓変更箇所
                setk3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "L3":
                // ↓↓変更箇所
                setl3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "N3":
                // ↓↓変更箇所
                setn3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "O3":
                // ↓↓変更箇所
                seto3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Q3":
                // ↓↓変更箇所
                setq3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "R3":
                // ↓↓変更箇所
                setr3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "T3":
                // ↓↓変更箇所
                sett3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "U3":
                // ↓↓変更箇所
                setu3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "W3":
                // ↓↓変更箇所
                setw3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "X3":
                // ↓↓変更箇所
                setx3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Z3":
                // ↓↓変更箇所
                setz3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AA3":
                // ↓↓変更箇所
                setaa3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AC3":
                // ↓↓変更箇所
                setac3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AD3":
                // ↓↓変更箇所
                setad3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AF3":
                // ↓↓変更箇所
                setaf3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AG3":
                // ↓↓変更箇所
                setag3judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "B4":
                // ↓↓変更箇所
                setb4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "C4":
                // ↓↓変更箇所
                setc4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "E4":
                // ↓↓変更箇所
                sete4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "F4":
                // ↓↓変更箇所
                setf4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "H4":
                // ↓↓変更箇所
                seth4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "I4":
                // ↓↓変更箇所
                seti4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "K4":
                // ↓↓変更箇所
                setk4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "L4":
                // ↓↓変更箇所
                setl4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "N4":
                // ↓↓変更箇所
                setn4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "O4":
                // ↓↓変更箇所
                seto4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Q4":
                // ↓↓変更箇所
                setq4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "R4":
                // ↓↓変更箇所
                setr4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "T4":
                // ↓↓変更箇所
                sett4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "U4":
                // ↓↓変更箇所
                setu4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "W4":
                // ↓↓変更箇所
                setw4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "X4":
                // ↓↓変更箇所
                setx4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Z4":
                // ↓↓変更箇所
                setz4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AA4":
                // ↓↓変更箇所
                setaa4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AC4":
                // ↓↓変更箇所
                setac4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AD4":
                // ↓↓変更箇所
                setad4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AF4":
                // ↓↓変更箇所
                setaf4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AG4":
                // ↓↓変更箇所
                setag4judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "B5":
                // ↓↓変更箇所
                setb5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "C5":
                // ↓↓変更箇所
                setc5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "E5":
                // ↓↓変更箇所
                sete5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "F5":
                // ↓↓変更箇所
                setf5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "H5":
                // ↓↓変更箇所
                seth5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "I5":
                // ↓↓変更箇所
                seti5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "K5":
                // ↓↓変更箇所
                setk5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "L5":
                // ↓↓変更箇所
                setl5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "N5":
                // ↓↓変更箇所
                setn5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "O5":
                // ↓↓変更箇所
                seto5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Q5":
                // ↓↓変更箇所
                setq5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "R5":
                // ↓↓変更箇所
                setr5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "T5":
                // ↓↓変更箇所
                sett5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "U5":
                // ↓↓変更箇所
                setu5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "W5":
                // ↓↓変更箇所
                setw5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "X5":
                // ↓↓変更箇所
                setx5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Z5":
                // ↓↓変更箇所
                setz5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AA5":
                // ↓↓変更箇所
                setaa5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AC5":
                // ↓↓変更箇所
                setac5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AD5":
                // ↓↓変更箇所
                setad5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AF5":
                // ↓↓変更箇所
                setaf5judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AG5":
                // ↓↓変更箇所
                setag5judge(boolean);
                break;
            
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "B6":
                // ↓↓変更箇所
                setb6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "C6":
                // ↓↓変更箇所
                setc6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "E6":
                // ↓↓変更箇所
                sete6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "F6":
                // ↓↓変更箇所
                setf6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "H6":
                // ↓↓変更箇所
                seth6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "I6":
                // ↓↓変更箇所
                seti6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "K6":
                // ↓↓変更箇所
                setk6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "L6":
                // ↓↓変更箇所
                setl6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "N6":
                // ↓↓変更箇所
                setn6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "O6":
                // ↓↓変更箇所
                seto6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Q6":
                // ↓↓変更箇所
                setq6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "R6":
                // ↓↓変更箇所
                setr6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "T6":
                // ↓↓変更箇所
                sett6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "U6":
                // ↓↓変更箇所
                setu6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "W6":
                // ↓↓変更箇所
                setw6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "X6":
                // ↓↓変更箇所
                setx6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Z6":
                // ↓↓変更箇所
                setz6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AA6":
                // ↓↓変更箇所
                setaa6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AC6":
                // ↓↓変更箇所
                setac6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AD6":
                // ↓↓変更箇所
                setad6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AF6":
                // ↓↓変更箇所
                setaf6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AG6":
                // ↓↓変更箇所
                setag6judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "B7":
                // ↓↓変更箇所
                setb7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "C7":
                // ↓↓変更箇所
                setc7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "E7":
                // ↓↓変更箇所
                sete7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "F7":
                // ↓↓変更箇所
                setf7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "H7":
                // ↓↓変更箇所
                seth7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "I7":
                // ↓↓変更箇所
                seti7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "K7":
                // ↓↓変更箇所
                setk7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "L7":
                // ↓↓変更箇所
                setl7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "N7":
                // ↓↓変更箇所
                setn7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "O7":
                // ↓↓変更箇所
                seto7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Q7":
                // ↓↓変更箇所
                setq7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "R7":
                // ↓↓変更箇所
                setr7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "T7":
                // ↓↓変更箇所
                sett7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "U7":
                // ↓↓変更箇所
                setu7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "W7":
                // ↓↓変更箇所
                setw7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "X7":
                // ↓↓変更箇所
                setx7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Z7":
                // ↓↓変更箇所
                setz7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AA7":
                // ↓↓変更箇所
                setaa7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AC7":
                // ↓↓変更箇所
                setac7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AD7":
                // ↓↓変更箇所
                setad7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AF7":
                // ↓↓変更箇所
                setaf7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AG7":
                // ↓↓変更箇所
                setag7judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "B8":
                // ↓↓変更箇所
                setb8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "C8":
                // ↓↓変更箇所
                setc8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "E8":
                // ↓↓変更箇所
                sete8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "F8":
                // ↓↓変更箇所
                setf8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "H8":
                // ↓↓変更箇所
                seth8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "I8":
                // ↓↓変更箇所
                seti8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "K8":
                // ↓↓変更箇所
                setk8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "L8":
                // ↓↓変更箇所
                setl8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "N8":
                // ↓↓変更箇所
                setn8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "O8":
                // ↓↓変更箇所
                seto8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Q8":
                // ↓↓変更箇所
                setq8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "R8":
                // ↓↓変更箇所
                setr8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "T8":
                // ↓↓変更箇所
                sett8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "U8":
                // ↓↓変更箇所
                setu8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "W8":
                // ↓↓変更箇所
                setw8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "X8":
                // ↓↓変更箇所
                setx8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Z8":
                // ↓↓変更箇所
                setz8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AA8":
                // ↓↓変更箇所
                setaa8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AC8":
                // ↓↓変更箇所
                setac8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AD8":
                // ↓↓変更箇所
                setad8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AF8":
                // ↓↓変更箇所
                setaf8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AG8":
                // ↓↓変更箇所
                setag8judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "B9":
                // ↓↓変更箇所
                setb9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "C9":
                // ↓↓変更箇所
                setc9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "E9":
                // ↓↓変更箇所
                sete9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "F9":
                // ↓↓変更箇所
                setf9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "H9":
                // ↓↓変更箇所
                seth9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "I9":
                // ↓↓変更箇所
                seti9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "K9":
                // ↓↓変更箇所
                setk9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "L9":
                // ↓↓変更箇所
                setl9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "N9":
                // ↓↓変更箇所
                setn9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "O9":
                // ↓↓変更箇所
                seto9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Q9":
                // ↓↓変更箇所
                setq9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "R9":
                // ↓↓変更箇所
                setr9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "T9":
                // ↓↓変更箇所
                sett9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "U9":
                // ↓↓変更箇所
                setu9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "W9":
                // ↓↓変更箇所
                setw9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "X9":
                // ↓↓変更箇所
                setx9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Z9":
                // ↓↓変更箇所
                setz9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AA9":
                // ↓↓変更箇所
                setaa9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AC9":
                // ↓↓変更箇所
                setac9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AD9":
                // ↓↓変更箇所
                setad9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AF9":
                // ↓↓変更箇所
                setaf9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AG9":
                // ↓↓変更箇所
                setag9judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "B11":
                // ↓↓変更箇所
                setb11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "C11":
                // ↓↓変更箇所
                setc11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "E11":
                // ↓↓変更箇所
                sete11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "F11":
                // ↓↓変更箇所
                setf11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "H11":
                // ↓↓変更箇所
                seth11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "I11":
                // ↓↓変更箇所
                seti11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "K11":
                // ↓↓変更箇所
                setk11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "L11":
                // ↓↓変更箇所
                setl11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "N11":
                // ↓↓変更箇所
                setn11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "O11":
                // ↓↓変更箇所
                seto11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Q11":
                // ↓↓変更箇所
                setq11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "R11":
                // ↓↓変更箇所
                setr11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "T11":
                // ↓↓変更箇所
                sett11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "U11":
                // ↓↓変更箇所
                setu11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "W11":
                // ↓↓変更箇所
                setw11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "X11":
                // ↓↓変更箇所
                setx11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Z11":
                // ↓↓変更箇所
                setz11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AA11":
                // ↓↓変更箇所
                setaa11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AC11":
                // ↓↓変更箇所
                setac11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AD11":
                // ↓↓変更箇所
                setad11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AF11":
                // ↓↓変更箇所
                setaf11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AG11":
                // ↓↓変更箇所
                setag11judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "B12":
                // ↓↓変更箇所
                setb12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "C12":
                // ↓↓変更箇所
                setc12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "E12":
                // ↓↓変更箇所
                sete12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "F12":
                // ↓↓変更箇所
                setf12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "H12":
                // ↓↓変更箇所
                seth12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "I12":
                // ↓↓変更箇所
                seti12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "K12":
                // ↓↓変更箇所
                setk12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "L12":
                // ↓↓変更箇所
                setl12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "N12":
                // ↓↓変更箇所
                setn12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "O12":
                // ↓↓変更箇所
                seto12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Q12":
                // ↓↓変更箇所
                setq12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "R12":
                // ↓↓変更箇所
                setr12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "T12":
                // ↓↓変更箇所
                sett12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "U12":
                // ↓↓変更箇所
                setu12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "W12":
                // ↓↓変更箇所
                setw12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "X12":
                // ↓↓変更箇所
                setx12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "Z12":
                // ↓↓変更箇所
                setz12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AA12":
                // ↓↓変更箇所
                setaa12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AC12":
                // ↓↓変更箇所
                setac12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AD12":
                // ↓↓変更箇所
                setad12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AF12":
                // ↓↓変更箇所
                setaf12judge(boolean);
                break;
            // ↓↓複製箇所
            // ↓↓変更箇所
            case "AG12":
                // ↓↓変更箇所
                setag12judge(boolean);
                break;
            default:
                alert("error");
        }
    }

    const setplace = (id:number) => {
        let place;
        let thisno = 0;
        for(let i = 0; i < todoListDisplay.length; i++) {
            if(todoListDisplay[i].id === id) {
                thisno = i;
                break;
            }
        }
        // console.log("thisno:", thisno);
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = h1place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seth1place(place);
            }
        }
        
        // ↓↓複製箇所
        // ↓↓変更箇所 
        place = i1place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seti1place(place);
            }
        }
        
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = k1place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setk1place(place);
            }
        }
        
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = l1place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setl1place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = o1place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seto1place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = r1place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setr1place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = x1place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setx1place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = aa1place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaa1place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = b2place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setb2place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = c2place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setc2place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = e2place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sete2place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = f2place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setf2place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = h2place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seth2place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = i2place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seti2place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = k2place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setk2place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = l2place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setl2place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = b3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setb3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = c3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setc3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = e3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sete3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = f3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setf3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = h3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seth3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = i3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seti3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = k3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setk3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = l3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setl3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = n3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setn3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = o3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seto3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = q3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setq3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = r3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setr3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = t3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sett3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = u3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setu3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = w3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setw3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = x3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setx3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = z3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setz3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = aa3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaa3place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所 
        place = ac3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setac3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ad3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setad3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = af3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaf3place(place);
            }
        }
         
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ag3place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setag3place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = b4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setb4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = c4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setc4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = e4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sete4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = f4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setf4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = h4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seth4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = i4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seti4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = k4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setk4place(place);
            }
        }
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = l4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setl4place(place);
            }
        }
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = n4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setn4place(place);
            }
        }
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = o4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seto4place(place);
            }
        }
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = q4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setq4place(place);
            }
        }
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = r4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setr4place(place);
            }
        }
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = t4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sett4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = u4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setu4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = w4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setw4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = x4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setx4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = z4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setz4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = aa4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaa4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ac4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setac4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ad4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setad4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = af4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaf4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ag4place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setag4place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = b5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setb5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = c5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setc5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = e5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sete5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = f5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setf5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = h5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seth5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = i5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seti5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = k5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setk5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = l5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setl5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = n5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setn5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = o5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seto5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = q5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setq5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = r5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setr5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = t5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sett5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = u5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setu5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = w5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setw5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = x5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setx5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = z5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setz5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = aa5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaa5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ac5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setac5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ad5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setad5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = af5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaf5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ag5place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setag5place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = b6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setb6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = c6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setc6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = e6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sete6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = f6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setf6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = h6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seth6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = i6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seti6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = k6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setk6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = l6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setl6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = n6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setn6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = o6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seto6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = q6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setq6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = r6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setr6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = t6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sett6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = u6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setu6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = w6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setw6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = x6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setx6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = z6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setz6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = aa6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaa6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ac6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setac6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ad6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setad6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = af6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaf6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ag6place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setag6place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = b7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setb7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = c7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setc7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = e7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sete7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = f7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setf7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = h7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seth7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = i7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seti7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = k7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setk7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = l7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setl7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = n7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setn7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = o7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seto7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = q7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setq7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = r7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setr7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = t7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sett7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = u7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setu7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = w7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setw7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = x7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setx7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = z7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setz7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = aa7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaa7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ac7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setac7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ad7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setad7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = af7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaf7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ag7place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setag7place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = b8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setb8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = c8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setc8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = e8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sete8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = f8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setf8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = h8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seth8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = i8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seti8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = k8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setk8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = l8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setl8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = n8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setn8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = o8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seto8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = q8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setq8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = r8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setr8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = t8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sett8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = u8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setu8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = w8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setw8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = x8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setx8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = z8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setz8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = aa8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaa8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ac8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setac8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ad8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setad8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = af8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaf8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ag8place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setag8place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = b9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setb9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = c9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setc9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = e9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sete9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = f9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setf9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = h9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seth9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = i9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seti9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = k9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setk9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = l9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setl9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = n9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setn9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = o9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seto9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = q9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setq9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = r9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setr9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = t9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sett9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = u9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setu9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = w9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setw9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = x9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setx9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = z9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setz9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = aa9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaa9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ac9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setac9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ad9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setad9place(place);
            }
        }
        
        // ↓↓複製箇所
        // ↓↓変更箇所
        place = af9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaf9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ag9place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setag9place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = b11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setb11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = c11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setc11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = e11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sete11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = f11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setf11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = h11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seth11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = i11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seti11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = k11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setk11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = l11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setl11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = n11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setn11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = o11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seto11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = q11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setq11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = r11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setr11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = t11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sett11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = u11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setu11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = w11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setw11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = x11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setx11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = z11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setz11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = aa11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaa11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ac11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setac11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ad11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setad11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = af11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaf11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ag11place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setag11place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = b12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setb12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = c12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setc12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = e12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sete12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = f12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setf12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = h12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seth12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = i12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seti12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = k12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setk12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = l12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setl12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = n12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setn12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = o12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                seto12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = q12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setq12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = r12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setr12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = t12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                sett12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = u12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setu12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = w12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setw12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = x12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setx12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = z12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setz12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = aa12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaa12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ac12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setac12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ad12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setad12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = af12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setaf12place(place);
            }
        }

        // ↓↓複製箇所
        // ↓↓変更箇所
        place = ag12place;
        if(place >= thisno){
            if(place !== 0){
                place = place - 1;
                // ↓↓変更箇所
                setag12place(place);
            }
        }
        
        // 複製終了(syuuryou)


         
    }

    const classreturn = () => {
        if(!zasekimode){
            if(sekigaejudge){
                return zasekimode ? "sekigaeon" : "sekigaeoff";
            }
        }
    };

    const classreturn2 = () => {
        const boolean = false;
        if(!zasekimode){
            if(sekigaejudge){
                setsekigaejudge(boolean);
            }
            return zasekimode ? "sekigaeon" : "sekigaeoff";
        }
    };

    // 座席を削除するための関数
    const deleteZaseki = (id: number) => {
        setplace(id);
        // リストから対象の席を削除
        settodoListDisplay((prevTodoList) => {
          // 対象のidでないTodoを残す
          return prevTodoList.filter((todo) => {
            return todo.id !== id;
          });
        });
        console.log("todolistDisplaydelete",todoListDisplay);
    };

    return (
        <div>
            <input 
                type="password"
                placeholder="【管理者用】パスワードを入力してください" 
                className="passwordinput"
                onChange={(e) => {
                    password(e.target.value);
                }}
            />
            <div
                className={passwordjudge ? "passwordon" : "passwordoff"}
            >
                <button 
                    onClick={()=>{
                        judge();
                    }}
                    className="button"
                >
                    judge
                </button>
                <button
                    onClick={()=>{
                        reset();
                    }}
                    className="button"
                >
                    reset
                </button>
            </div>
            
            <div className="title2_wrapper">
                <h1 className="title2">座席表</h1>
                {/* 場合分け：文章変更 */}
                <div
                    className={lodejudge ? "tableoff" : "tableon"}
                >
                    <div
                        className={classreturn()}
                    >
                        <p
                            className={sekigaejudge ? "sekigaeoff" : "sekigaeon"} 
                        >
                            席替えを行いたい場合は座席表内の座席を選択して下さい。
                        </p>
                    </div>
                    <div
                        className={classreturn2()}
                    >
                        <p
                            className={sekigaejudge ? "sekigaeon" : "sekigaeoff"} 
                        >
                            席番号{beforezasekino}を選択中
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="btn-wrapper"
            >
                <button
                    className={lodejudge ? "tableoff" : "tableon"}
                    onClick={()=>{
                        lodejudgefunc();
                        let boolean = true;
                        setlodejudge(boolean);
                        // console.log("w6judge",w6judge);
                        // console.log("x6judge",x6judge);
                    }}
                    title="loadbutton"
                >
                    座席表を表示するためにはここをクリック
                </button>
            </div>
            <div
                className={lodejudge ? "tableon" : "tableoff"}
            >
                <table className="table-display">
                    <thead>
                        <tr>
                            <th> </th>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                            <th>D</th>
                            <th>E</th>
                            <th>F</th>
                            <th>G</th>
                            <th>H</th>
                            <th>I</th>
                            <th>J</th>
                            <th>K</th>
                            <th>L</th>
                            <th>M</th>
                            <th>N</th>
                            <th>O</th>
                            <th>P</th>
                            <th>Q</th>
                            <th>R</th>
                            <th>S</th>
                            <th>T</th>
                            <th>U</th>
                            <th>V</th>
                            <th>W</th>
                            <th>X</th>
                            <th>Y</th>
                            <th>Z</th>
                            <th>AA</th>
                            <th>AB</th>
                            <th>AC</th>
                            <th>AD</th>
                            <th>AE</th>
                            <th>AF</th>
                            <th>AG</th>
                            <th>AH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* // 複製開始(kaisi) */}
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={h1judge}
                                    place={h1place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"H1"}
                                    placefunc={h1placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={i1judge}
                                    place={i1place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"I1"}
                                    placefunc={i1placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={k1judge}
                                    place={k1place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"K1"}
                                    placefunc={k1placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={l1judge}
                                    place={l1place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"L1"}
                                    placefunc={l1placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={o1judge}
                                    place={o1place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"O1"}
                                    placefunc={o1placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={r1judge}
                                    place={r1place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"R1"}
                                    placefunc={r1placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={x1judge}
                                    place={x1place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"X1"}
                                    placefunc={x1placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino} 
                                    judge={aa1judge}
                                    place={aa1place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AA1"}
                                    placefunc={aa1placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={b2judge}
                                    place={b2place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"B2"}
                                    placefunc={b2placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={c2judge}
                                    place={c2place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"C2"}
                                    placefunc={c2placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={e2judge}
                                    place={e2place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"E2"}
                                    placefunc={e2placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={f2judge}
                                    place={f2place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"F2"}
                                    placefunc={f2placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={h2judge}
                                    place={h2place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"H2"}
                                    placefunc={h2placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={i2judge}
                                    place={i2place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"I2"}
                                    placefunc={i2placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge} 
                                    beforezasekino={beforezasekino}   
                                    judge={k2judge}
                                    place={k2place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"K2"}
                                    placefunc={k2placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={l2judge}
                                    place={l2place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"L2"}
                                    placefunc={l2placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={b3judge}
                                    place={b3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"B3"}
                                    placefunc={b3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={c3judge}
                                    place={c3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"C3"}
                                    placefunc={c3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={e3judge}
                                    place={e3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"E3"}
                                    placefunc={e3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={f3judge}
                                    place={f3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"F3"}
                                    placefunc={f3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={h3judge}
                                    place={h3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"H3"}
                                    placefunc={h3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={i3judge}
                                    place={i3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"I3"}
                                    placefunc={i3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={k3judge}
                                    place={k3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"K3"}
                                    placefunc={k3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={l3judge}
                                    place={l3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"L3"}
                                    placefunc={l3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={n3judge}
                                    place={n3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"N3"}
                                    placefunc={n3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={o3judge}
                                    place={o3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"O3"}
                                    placefunc={o3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={q3judge}
                                    place={q3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Q3"}
                                    placefunc={q3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={r3judge}
                                    place={r3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"R3"}
                                    placefunc={r3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={t3judge}
                                    place={t3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"T3"}
                                    placefunc={t3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={u3judge}
                                    place={u3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"U3"}
                                    placefunc={u3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={w3judge}
                                    place={w3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"W3"}
                                    placefunc={w3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={x3judge}
                                    place={x3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"X3"}
                                    placefunc={x3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={z3judge}
                                    place={z3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Z3"}
                                    placefunc={z3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={aa3judge}
                                    place={aa3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AA3"}
                                    placefunc={aa3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置 */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ac3judge}
                                    place={ac3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AC3"}
                                    placefunc={ac3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ad3judge}
                                    place={ad3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AD3"}
                                    placefunc={ad3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={af3judge}
                                    place={af3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AF3"}
                                    placefunc={af3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ag3judge}
                                    place={ag3place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AG3"}
                                    placefunc={ag3placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={b4judge}
                                    place={b4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"B4"}
                                    placefunc={b4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={c4judge}
                                    place={c4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"C4"}
                                    placefunc={c4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={e4judge}
                                    place={e4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"E4"}
                                    placefunc={e4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={f4judge}
                                    place={f4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"F4"}
                                    placefunc={f4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={h4judge}
                                    place={h4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"H4"}
                                    placefunc={h4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={i4judge}
                                    place={i4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"I4"}
                                    placefunc={i4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={k4judge}
                                    place={k4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"K4"}
                                    placefunc={k4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={l4judge}
                                    place={l4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"L4"}
                                    placefunc={l4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                           {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={n4judge}
                                    place={n4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"N4"}
                                    placefunc={n4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={o4judge}
                                    place={o4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"O4"}
                                    placefunc={o4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={q4judge}
                                    place={q4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Q4"}
                                    placefunc={q4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={r4judge}
                                    place={r4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"R4"}
                                    placefunc={r4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={t4judge}
                                    place={t4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"T4"}
                                    placefunc={t4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                            <ZasekiForm
                                sekigaejudge={sekigaejudge}
                                beforezasekino={beforezasekino}
                                judge={u4judge}
                                place={u4place}
                                todoListDisplay={todoListDisplay}
                                Place={"U4"}
                                placefunc={u4placefunc}
                                changezaseki = {changezaseki}
                                sekigae = {sekigae}
                                getmessage={getmessage}
                                changeCompletedtree={changeCompletedtree}
                                changeCompletedkintai={changeCompletedkintai}
                                changeCompletedkinmu={changeCompletedkinmu}
                                changeCompletedkaigi={changeCompletedkaigi}
                                deleteZaseki={deleteZaseki}
                                offzaseki={offzaseki}
                                resetmode={resetmode}
                                getzaseki={getzaseki}
                                sekigae2={sekigae2}
                            />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={w4judge}
                                    place={w4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"W4"}
                                    placefunc={w4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={x4judge}
                                    place={x4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"X4"}
                                    placefunc={x4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={z4judge}
                                    place={z4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Z4"}
                                    placefunc={z4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={aa4judge}
                                    place={aa4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AA4"}
                                    placefunc={aa4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ac4judge}
                                    place={ac4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AC4"}
                                    placefunc={ac4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ad4judge}
                                    place={ad4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AD4"}
                                    placefunc={ad4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={af4judge}
                                    place={af4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AF4"}
                                    placefunc={af4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ag4judge}
                                    place={ag4place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AG4"}
                                    placefunc={ag4placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={b5judge}
                                    place={b5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"B5"}
                                    placefunc={b5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={c5judge}
                                    place={c5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"C5"}
                                    placefunc={c5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={e5judge}
                                    place={e5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"E5"}
                                    placefunc={e5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={f5judge}
                                    place={f5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"F5"}
                                    placefunc={f5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={h5judge}
                                    place={h5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"H5"}
                                    placefunc={h5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={i5judge}
                                    place={i5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"I5"}
                                    placefunc={i5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={k5judge}
                                    place={k5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"K5"}
                                    placefunc={k5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={l5judge}
                                    place={l5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"L5"}
                                    placefunc={l5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={n5judge}
                                    place={n5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"N5"}
                                    placefunc={n5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={o5judge}
                                    place={o5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"O5"}
                                    placefunc={o5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={q5judge}
                                    place={q5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Q5"}
                                    placefunc={q5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={r5judge}
                                    place={r5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"R5"}
                                    placefunc={r5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={t5judge}
                                    place={t5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"T5"}
                                    placefunc={t5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={u5judge}
                                    place={u5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"U5"}
                                    placefunc={u5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={w5judge}
                                    place={w5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"W5"}
                                    placefunc={w5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={x5judge}
                                    place={x5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"X5"}
                                    placefunc={x5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={z5judge}
                                    place={z5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Z5"}
                                    placefunc={z5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={aa5judge}
                                    place={aa5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AA5"}
                                    placefunc={aa5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ac5judge}
                                    place={ac5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AC5"}
                                    placefunc={ac5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ad5judge}
                                    place={ad5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AD5"}
                                    placefunc={ad5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={af5judge}
                                    place={af5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AF5"}
                                    placefunc={af5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ag5judge}
                                    place={ag5place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AG5"}
                                    placefunc={ag5placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={b6judge}
                                    place={b6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"B6"}
                                    placefunc={b6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={c6judge}
                                    place={c6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"C6"}
                                    placefunc={c6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={e6judge}
                                    place={e6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"E6"}
                                    placefunc={e6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={f6judge}
                                    place={f6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"F6"}
                                    placefunc={f6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={h6judge}
                                    place={h6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"H6"}
                                    placefunc={h6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={i6judge}
                                    place={i6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"I6"}
                                    placefunc={i6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={k6judge}
                                    place={k6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"K6"}
                                    placefunc={k6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={l6judge}
                                    place={l6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"L6"}
                                    placefunc={l6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={n6judge}
                                    place={n6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"N6"}
                                    placefunc={n6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={o6judge}
                                    place={o6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"O6"}
                                    placefunc={o6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={q6judge}
                                    place={q6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Q6"}
                                    placefunc={q6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={r6judge}
                                    place={r6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"R6"}
                                    placefunc={r6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={t6judge}
                                    place={t6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"T6"}
                                     placefunc={t6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={u6judge}
                                    place={u6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"U6"}
                                    placefunc={u6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={w6judge}
                                    place={w6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"W6"}
                                    placefunc={w6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={x6judge}
                                    place={x6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"X6"}
                                    placefunc={x6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={z6judge}
                                    place={z6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Z6"}
                                    placefunc={z6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={aa6judge}
                                    place={aa6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AA6"}
                                    placefunc={aa6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                /> 
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ac6judge}
                                    place={ac6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AC6"}
                                    placefunc={ac6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ad6judge}
                                    place={ad6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AD6"}
                                    placefunc={ad6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={af6judge}
                                    place={af6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AF6"}
                                    placefunc={af6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ag6judge}
                                    place={ag6place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AG6"}
                                    placefunc={ag6placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={b7judge}
                                    place={b7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"B7"}
                                    placefunc={b7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={c7judge}
                                    place={c7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"C7"}
                                    placefunc={c7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={e7judge}
                                    place={e7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"E7"}
                                    placefunc={e7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={f7judge}
                                    place={f7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"F7"}
                                    placefunc={f7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={h7judge}
                                    place={h7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"H7"}
                                    placefunc={h7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={i7judge}
                                    place={i7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"I7"}
                                    placefunc={i7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={k7judge}
                                    place={k7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"K7"}
                                    placefunc={k7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={l7judge}
                                    place={l7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"L7"}
                                    placefunc={l7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={n7judge}
                                    place={n7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"N7"}
                                    placefunc={n7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={o7judge}
                                    place={o7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"O7"}
                                    placefunc={o7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={q7judge}
                                    place={q7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Q7"}
                                    placefunc={q7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={r7judge}
                                    place={r7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"R7"}
                                    placefunc={r7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={t7judge}
                                    place={t7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"T7"}
                                    placefunc={t7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={u7judge}
                                    place={u7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"U7"}
                                    placefunc={u7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={w7judge}
                                    place={w7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"W7"}
                                    placefunc={w7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={x7judge}
                                    place={x7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"X7"}
                                    placefunc={x7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={z7judge}
                                    place={z7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Z7"}
                                    placefunc={z7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={aa7judge}
                                    place={aa7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AA7"}
                                    placefunc={aa7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ac7judge}
                                    place={ac7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AC7"}
                                    placefunc={ac7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ad7judge}
                                    place={ad7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AD7"}
                                    placefunc={ad7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={af7judge}
                                    place={af7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AF7"}
                                    placefunc={af7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ag7judge}
                                    place={ag7place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AG7"}
                                    placefunc={ag7placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={b8judge}
                                    place={b8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"B8"}
                                    placefunc={b8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={c8judge}
                                    place={c8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"C8"}
                                    placefunc={c8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={e8judge}
                                    place={e8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"E8"}
                                    placefunc={e8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={f8judge}
                                    place={f8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"F8"}
                                    placefunc={f8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={h8judge}
                                    place={h8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"H8"}
                                    placefunc={h8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={i8judge}
                                    place={i8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"I8"}
                                    placefunc={i8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={k8judge}
                                    place={k8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"K8"}
                                    placefunc={k8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={l8judge}
                                    place={l8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"L8"}
                                    placefunc={l8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={n8judge}
                                    place={n8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"N8"}
                                    placefunc={n8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={o8judge}
                                    place={o8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"O8"}
                                    placefunc={o8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={q8judge}
                                    place={q8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Q8"}
                                    placefunc={q8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={r8judge}
                                    place={r8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"R8"}
                                    placefunc={r8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={t8judge}
                                    place={t8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"T8"}
                                    placefunc={t8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={u8judge}
                                    place={u8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"U8"}
                                    placefunc={u8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={w8judge}
                                    place={w8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"W8"}
                                    placefunc={w8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={x8judge}
                                    place={x8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"X8"}
                                    placefunc={x8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={z8judge}
                                    place={z8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Z8"}
                                    placefunc={z8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={aa8judge}
                                    place={aa8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AA8"}
                                    placefunc={aa8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ac8judge}
                                    place={ac8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AC8"}
                                    placefunc={ac8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ad8judge}
                                    place={ad8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AD8"}
                                    placefunc={ad8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={af8judge}
                                    place={af8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AF8"}
                                    placefunc={af8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ag8judge}
                                    place={ag8place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AG8"}
                                    placefunc={ag8placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                        <td>9</td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={b9judge}
                                    place={b9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"B9"}
                                    placefunc={b9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={c9judge}
                                    place={c9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"C9"}
                                    placefunc={c9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={e9judge}
                                    place={e9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"E9"}
                                    placefunc={e9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={f9judge}
                                    place={f9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"F9"}
                                    placefunc={f9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={h9judge}
                                    place={h9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"H9"}
                                    placefunc={h9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={i9judge}
                                    place={i9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"I9"}
                                    placefunc={i9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={k9judge}
                                    place={k9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"K9"}
                                    placefunc={k9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={l9judge}
                                    place={l9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"L9"}
                                    placefunc={l9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={n9judge}
                                    place={n9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"N9"}
                                    placefunc={n9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={o9judge}
                                    place={o9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"O9"}
                                    placefunc={o9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={q9judge}
                                    place={q9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Q9"}
                                    placefunc={q9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={r9judge}
                                    place={r9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"R9"}
                                    placefunc={r9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={t9judge}
                                    place={t9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"T9"}
                                    placefunc={t9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={u9judge}
                                    place={u9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"U9"}
                                    placefunc={u9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={w9judge}
                                    place={w9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"W9"}
                                    placefunc={w9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={x9judge}
                                    place={x9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"X9"}
                                    placefunc={x9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={z9judge}
                                    place={z9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Z9"}
                                    placefunc={z9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={aa9judge}
                                    place={aa9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AA9"}
                                    placefunc={aa9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ac9judge}
                                    place={ac9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AC9"}
                                    placefunc={ac9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ad9judge}
                                    place={ad9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AD9"}
                                    placefunc={ad9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={af9judge}
                                    place={af9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AF9"}
                                    placefunc={af9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ag9judge}
                                    place={ag9place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AG9"}
                                    placefunc={ag9placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                        </tr>
                        <tr
                            className="remote10"
                        >
                            <td
                                className="rimote-tile"
                                colSpan={4}
                            >リモート勤務</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr
                            className="remote11"
                        >
                            <td>11</td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={b11judge}
                                    place={b11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"B11"}
                                    placefunc={b11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={c11judge}
                                    place={c11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"C11"}
                                    placefunc={c11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={e11judge}
                                    place={e11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"E11"}
                                    placefunc={e11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={f11judge}
                                    place={f11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"F11"}
                                    placefunc={f11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={h11judge}
                                    place={h11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"H11"}
                                     placefunc={h11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={i11judge}
                                    place={i11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"I11"}
                                    placefunc={i11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={k11judge}
                                    place={k11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"K11"}
                                    placefunc={k11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={l11judge}
                                    place={l11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"L11"}
                                    placefunc={l11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td></td>
                            {/* ↓↓開始位置(kaisi) */}
                            {/* ↓↓複製箇所 */}
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={n11judge}
                                    place={n11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"N11"}
                                    placefunc={n11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={o11judge}
                                    place={o11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"O11"}
                                    placefunc={o11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />       
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={q11judge}
                                    place={q11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Q11"}
                                    placefunc={q11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={r11judge}
                                    place={r11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"R11"}
                                    placefunc={r11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={t11judge}
                                    place={t11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"T11"}
                                    placefunc={t11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={u11judge}
                                    place={u11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"U11"}
                                    placefunc={u11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={w11judge}
                                    place={w11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"W11"}
                                    placefunc={w11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={x11judge}
                                    place={x11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"X11"}
                                    placefunc={x11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={z11judge}
                                    place={z11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Z11"}
                                    placefunc={z11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={aa11judge}
                                    place={aa11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AA11"}
                                    placefunc={aa11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ac11judge}
                                    place={ac11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AC11"}
                                    placefunc={ac11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ad11judge}
                                    place={ad11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AD11"}
                                    placefunc={ad11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />         
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={af11judge}
                                    place={af11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AF11"}
                                    placefunc={af11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />         
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ag11judge}
                                    place={ag11place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AG11"}
                                    placefunc={ag11placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                        </tr>
                        <tr
                            className="remote12"
                        >
                            <td>12</td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={b12judge}
                                    place={b12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"B12"}
                                    placefunc={b12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={c12judge}
                                    place={c12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"C12"}
                                    placefunc={c12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={e12judge}
                                    place={e12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"E12"}
                                    placefunc={e12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={f12judge}
                                    place={f12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"F12"}
                                    placefunc={f12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={h12judge}
                                    place={h12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"H12"}
                                    placefunc={h12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={i12judge}
                                    place={i12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"I12"}
                                    placefunc={i12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={k12judge}
                                    place={k12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"K12"}
                                    placefunc={k12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />         
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={l12judge}
                                    place={l12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"L12"}
                                    placefunc={l12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={n12judge}
                                    place={n12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"N12"}
                                    placefunc={n12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={o12judge}
                                    place={o12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"O12"}
                                    placefunc={o12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />         
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={q12judge}
                                    place={q12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Q12"}
                                    placefunc={q12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={r12judge}
                                    place={r12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"R12"}
                                    placefunc={r12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={t12judge}
                                    place={t12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"T12"}
                                    placefunc={t12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={u12judge}
                                    place={u12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"U12"}
                                    placefunc={u12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={w12judge}
                                    place={w12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"W12"}
                                    placefunc={w12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={x12judge}
                                    place={x12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"X12"}
                                    placefunc={x12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />         
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={z12judge}
                                    place={z12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"Z12"}
                                    placefunc={z12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={aa12judge}
                                    place={aa12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AA12"}
                                    placefunc={aa12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ac12judge}
                                    place={ac12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AC12"}
                                    placefunc={ac12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ad12judge}
                                    place={ad12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AD12"}
                                    placefunc={ad12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                            <td>
                                <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={af12judge}
                                    place={af12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AF12"}
                                    placefunc={af12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />         
                            </td>
                            <td>
                            <ZasekiForm
                                    sekigaejudge={sekigaejudge}
                                    beforezasekino={beforezasekino}
                                    judge={ag12judge}
                                    place={ag12place}
                                    todoListDisplay={todoListDisplay}
                                    Place={"AG12"}
                                    placefunc={ag12placefunc}
                                    changezaseki = {changezaseki}
                                    sekigae = {sekigae}
                                    getmessage={getmessage}
                                    changeCompletedtree={changeCompletedtree}
                                    changeCompletedkintai={changeCompletedkintai}
                                    changeCompletedkinmu={changeCompletedkinmu}
                                    changeCompletedkaigi={changeCompletedkaigi}
                                    deleteZaseki={deleteZaseki}
                                    offzaseki={offzaseki}
                                    resetmode={resetmode}
                                    getzaseki={getzaseki}
                                    sekigae2={sekigae2}
                                />        
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};