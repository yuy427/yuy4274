import React from 'react';
import './App.css';
import './text.css';
import { useState } from 'react';

function App() {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("ここに表示されます。");
  const printText = () => {
    if(inputText !== "") {
      setText(inputText);
      setInputElement("");
    }
    else
    {
      setText("文字を入力してください。");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>入力した文章を表示するアプリ</h1>
        <div className="print">
          <p>{text}</p>
        </div>
        <div className="ctr">
        <input value={inputText} onChange={(e) => setInputElement(e.target.value)} type="text" placeholder="入力してボタンを押してください。" />
        <button onClick={printText}>表示する</button>
        </div>
      </header>
    </div>
  );
}

export default App;

