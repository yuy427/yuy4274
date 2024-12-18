import React from "react";
import { useState } from 'react';
import { Plus } from 'lucide-react';



type Props = {
  addTodo: (name: string,busyo: string) => void;
};

// const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (ev:any) => {
//   setBusyoValue(ev.target.value);
// };

export const AddTodoForm = ({ addTodo }: Props) => {
  
  const [nameValue, setInputValue] = useState('');
  const [busyoValue, setBusyoValue] = useState('ゼロサム編集部');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // ページの更新を防ぐ
    e.preventDefault();

    // 親に値を渡す
    addTodo(nameValue,busyoValue);
    // console.log(nameValue);
    // console.log(busyoValue);

    // 値を空に戻す
    setInputValue('');
    // setBusyoValue('総務経理部');
  };

  return (
    <form
      className="flex"
      // +ボタンをクリックすると発火
      onSubmit={onSubmit}
    >
      <div className="input">
        <h2>追加する座席情報を入力してください</h2>
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
        <div className="input-flex">
          <input
            type="text"
            placeholder="名前を入力してください"
            className="grow rounded-s bg-slate-200 p-2 textbox"
            value={nameValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="submit-btn"
            disabled={!nameValue}
          >
            {/* <Plus className="text-white" /> */}
            座席追加
          </button>
        </div>
      </div>
    </form>
    
  );
};