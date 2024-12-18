import React from "react";
import {ChangeButton} from "./changebutton";
import { Todo } from '../todo';
import { Trash2 } from 'lucide-react';

type Props ={
    sekigaejudge:boolean,
    beforezasekino:number,
    judge:boolean,
    place:number,
    todoListDisplay: Todo[],
    Place:string,
    placefunc: () => number,
    changezaseki: (Place:string) => void,
    sekigae: (sekino: number) => void,
    getmessage: (sekino:number,getmessage:string) => void,
    changeCompletedtree: (id: number) => void,
    changeCompletedkintai: (id: number) => void,
    changeCompletedkinmu: (id: number) => void,
    changeCompletedkaigi: (id: number) => void,
    deleteZaseki: (id: number) => void,
    offzaseki : (Place:string) => void,
    resetmode: () => void,
    getzaseki: (Place:string) => void,
    sekigae2: (Place:string) => void,
};

export const ZasekiForm = ({
    sekigaejudge,
    beforezasekino,
    judge,
    place,
    todoListDisplay,
    Place,
    placefunc,
    changezaseki,
    sekigae,
    getmessage,
    changeCompletedtree,
    changeCompletedkintai,
    changeCompletedkinmu,
    changeCompletedkaigi,
    deleteZaseki,
    offzaseki,
    resetmode,
    getzaseki,
    sekigae2,
}: Props)=> {

    const dummy = () => {
        // 何もしない
    };

    const zasekiselect = (beforezasekino:number) =>{
        if(todoListDisplay[placefunc()].sekino === beforezasekino){
            return sekigaejudge ? "select" : "notselect"
        }else{
            // 何もしない
        }
    }

    return (
        <div>
            <div
                // ↓↓変更箇所
                className={judge ? "zaseki-on" : "zaseki-off"} 
            >
                <div
                    className={zasekiselect(beforezasekino)}
                >
                    <div
                        className="flex items-center gap-3 rounded bg-white p-2 changebutton-wrapper zaseki-wrapper"
                    >
                        <ChangeButton 
                        
                            // ↓↓変更箇所 
                            sekino={todoListDisplay[placefunc()].sekino}
                            // ↓↓変更箇所 
                            busyo={todoListDisplay[placefunc()].busyo}
                            // ↓↓変更箇所 
                            name={todoListDisplay[placefunc()].name}
                            changeno={0}
                            // ↓↓変更箇所 
                            button={todoListDisplay[placefunc()].button}
                            checkthisno={dummy}
                            changeNumber={dummy}
                            checkbtn={()=>{
                                // ↓↓変更箇所
                                changezaseki(Place);
                                // ↓↓変更箇所
                                sekigae(todoListDisplay[placefunc()].sekino);
                            }}
                        />
                        <textarea 
                            rows={3} 
                            name="example3"
                            // ↓↓変更箇所
                            value={todoListDisplay[placefunc()].message} 
                            placeholder="例：会議時間 oo:oo ～ xx:xx"
                            className="comment"
                            onChange={
                                (e) => {
                                    // ↓↓変更箇所
                                    getmessage(todoListDisplay[placefunc()].sekino,e.target.value);
                                }
                            } 
                        />
                        <div className="zaseki-forword">
                            <div 
                            // ↓↓変更箇所
                            className={todoListDisplay[placefunc()].tree ? "tree-active-wrapper" : 'tree-wrapper'}
                            >
                                <button
                                    type="button"
                                    // ↓↓変更箇所
                                    className={todoListDisplay[placefunc()].tree ? "tree-active" : 'tree'}
                                    // ↓↓変更箇所
                                    title={todoListDisplay[placefunc()].tree ? "勤務中・会議中の非表示" : "勤務中・会議中の表示"}
                                    onClick={()=>{
                                    // ↓↓変更箇所
                                    changeCompletedtree(todoListDisplay[placefunc()].id)
                                    }}
                                >
                                </button>
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
                                    // ↓↓変更箇所
                                    title={todoListDisplay[placefunc()].kintai ? "退勤状態にする" : "出勤状態にする"}
                                    // ↓↓変更箇所
                                    checked={todoListDisplay[placefunc()].kintai}
                                    onChange={() => {
                                        // ↓↓変更箇所
                                        changeCompletedkintai(todoListDisplay[placefunc()].id);
                                    }}
                                />
                                {/*↓↓変更箇所 */}
                                {todoListDisplay[placefunc()].kintai ? '出勤' : '退勤'}
                                </div>
                                <div
                                id="kinmu" 
                                // ↓↓変更箇所
                                className={todoListDisplay[placefunc()].tree ? "kinmu-selected" : "kinmu"} 
                                >
                                <input
                                    type="checkbox"
                                    value="kinmu"
                                    className="size-5 kinmu-hover"
                                    // ↓↓変更箇所
                                    title={todoListDisplay[placefunc()].kinmu ? "休憩中状態にする" : "勤務中状態にする"}
                                    // ↓↓変更箇所
                                    checked={todoListDisplay[placefunc()].kinmu}
                                    // ↓↓変更箇所
                                    onChange={() => changeCompletedkinmu(todoListDisplay[placefunc()].id)}
                                />
                                {/*↓↓変更箇所 */}
                                {todoListDisplay[placefunc()].kinmu ? '勤務中' : '休憩中'}
                                </div>
                                <div
                                    id="kaigi"
                                    // ↓↓変更箇所 
                                    className={todoListDisplay[placefunc()].tree ? "kaigi-selected" : "kaigi"}
                                >
                                <input
                                    type="checkbox"
                                    value="kaigi"
                                    className="size-5 kaigi-hover"
                                    // ↓↓変更箇所
                                    title={todoListDisplay[placefunc()].kaigi ? "通常業務中状態にする" : "会議中状態にする"}
                                    // ↓↓変更箇所
                                    checked={todoListDisplay[placefunc()].kaigi}
                                    // ↓↓変更箇所
                                    onChange={() => changeCompletedkaigi(todoListDisplay[placefunc()].id)}
                                />
                                {/*↓↓変更箇所 */}
                                {todoListDisplay[placefunc()].kaigi ? '会議中' : '通常業務中'}
                            </div>
                            <button
                            type="button"
                            className="rounded bg-gray-200 p-2 transition-colors hover:bg-gray-300 delete-btn"
                            onClick={() =>{
                                // ↓↓変更箇所 
                                deleteZaseki(todoListDisplay[placefunc()].id);
                                // ↓↓変更箇所
                                offzaseki(Place);
                                resetmode();
                            }}
                            >
                                <Trash2 className="size-5 text-gray-500" />
                            </button>
                        </div>
                    </div>    
                </div>
                
            </div>
            <div
                // ↓↓変更箇所
                className={judge ? "ID-off" : "ID-on"} 
            >
                <button
                    onClick={()=>{
                        // ↓↓変更箇所
                        getzaseki(Place);
                        // ↓↓変更箇所
                        sekigae2(Place);
                    }}
                    className="off-btn"
                >
                    {/* ↓↓変更箇所 */}
                    {Place}
                </button>    
            </div>
        </div>
    );

};