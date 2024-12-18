import React from "react";
import './App.css';
import './form'
import Form from './form';

function formwrapper(props:any) {
  const dataList = {
    prefectures: [
      {
        id: 1,
        name: "ゼロサム編集部",
      },
      {
        id: 2,
        name: "ＤＭＣ・REX編集部",
      },
      {
        id: 3,
        name: "ﾎﾟｽﾄﾒﾃﾞｨｱ編集部",
      },
      {
        id: 4,
        name: "ノベル編集部",
      },
      {
        id: 5,
        name: "百合姫編集部",
      },
      {
        id: 6,
        name: "gateau編集部",
      },
      {
        id: 7,
        name: "ライツ事業部",
      },
      {
        id: 8,
        name: "海外・新事業開発部",
      },
      {
        id: 9,
        name: "メディア事業部",
      },
      {
        id: 10,
        name: "販売部",
      },
      {
        id: 11,
        name: "経営企画部",
      },
      {
        id: 12,
        name: "編集総務部",
      },
      {
        id: 13,
        name: "総務経理部",
      },
    ],
  };
  const datas = JSON.stringify(dataList);
  return (
    <div>
      <Form title={"席情報入力"} data={datas} name={props.name} />
    </div>
  );
}

export default formwrapper;