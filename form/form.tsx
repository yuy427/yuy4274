import React from "react";
import "./form.css";
/* ↓useStateをimport */
import { useState } from "react";

const Form = (props:any) => {
    const data = JSON.parse(props.data);
    const mPrefectures = Object.keys(data.prefectures).map(function (key) {
        return data.prefectures[key];
    });
    const handleChange = (e:any) => {};
    /* ↓state変数を定義 */
    const [text, setText] = useState("");
    return (
        <div className="container">
        <b className="center">{props.title}</b>
        <hr />
        <div>
            <label>名前：</label>
            <input type="text" value={props.name} onChange={(event) => setText(event.target.value)} />
            <p>{text}</p>
        </div>
        <div className="spacer" />
        <div>
            <label>部署：</label>
            <select onChange={(e:any) => handleChange(e)}>
            {mPrefectures.map((item) => (
                <option value={item.id}>{item.name}</option>
            ))}
        </select>
        </div>
        <div className="spacer" />
        <button className="center">登録</button>
        </div>
    );
};

export default Form;