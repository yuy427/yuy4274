import React from "react";
import { useState } from 'react';
import { Plus } from 'lucide-react';



type Props = {
  changeTodo: (name: string,busyo: string,changeno:number) => void;
  changeno : number;
  gotoInput : () => void;
  changeInput : () => void;
};

// const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (ev:any) => {
//   setBusyoValue(ev.target.value);
// };

export const ChangeTodoForm = (
    { changeTodo , changeno ,gotoInput ,changeInput}: Props,
) => {
  
  const [changeValue, setChangeValue] = useState('');
  const [busyoValue, setBusyoValue] = useState('ゼロサム編集部');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // ページの更新を防ぐ
    e.preventDefault();

    // 親に値を渡す
    changeTodo(changeValue,busyoValue,changeno);
    // console.log(nameValue);
    // console.log(busyoValue);

    // 値を空に戻す
    setChangeValue('');
    // setBusyoValue('総務経理部');
  };

  return (
    <form
      className="flex"
      // +ボタンをクリックすると発火
      onSubmit={onSubmit}
    >
      <div className="change">
        <h2>
          席番号：
          {changeno}
          を選択中<br/>
          変更する座席情報を入力<br/>
          または<br/>
          配置したい座席番号のボタンを選択して下さい
        </h2>
        <select 
          className="busyo-select"
          name="example" 
          defaultValue="ゼロサム編集部"
          // onSubmit={handleSubmit}
          // onChange={handleChange}
          onChange={e => setBusyoValue(e.target.value)}
        >
          <option value="ゼロサム編集部">ゼロサム編集部</option>
          <option value="DMC・REX編集部">DMC・REX編集部</option>
          <option value="ポストメディア編集部">ポストメディア編集部</option>
          <option value="ノベル編集部">ノベル編集部</option>
          <option value="百合姫編集部">百合姫編集部</option>
          <option value="gateau編集部">gateau編集部</option>
          <option value="ライツ事業部">ライツ事業部</option>
          <option value="海外・新事業開発部">海外・新事業開発部</option>
          <option value="メディア事業部">メディア事業部</option>
          <option value="販売部">販売部</option>
          <option value="編集総務部">編集総務部</option>
          <option value="経営企画部">経営企画部</option>
          <option value="総務経理部">総務経理部</option>
        </select>
        <div className="change-flex">
          <input
            type="text"
            placeholder="変更後の名前を入力してください"
            className="grow rounded-s bg-slate-200 p-2 textbox"
            value={changeValue}
            onChange={(e) => setChangeValue(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-e bg-blue-600 p-2 transition-colors hover:bg-blue-800 disabled:bg-gray-400 submit-btn"
            disabled={!changeValue}
            onClick={changeInput}
          >
            {/* <Plus className="text-white" /> */}
            座席情報変更
          </button>
        </div>
        <button
          onClick={gotoInput}
          type="button"
          disabled={!!changeValue}
          className="return-btn"
        >
          座席追加に戻る
        </button>
      </div>
    </form>
    
  );
};