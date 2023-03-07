import { useState, useRef } from 'react';

import './App.css';
import './DiaryEditor';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {
  const [data, setData] = useState([]);
  const dateId = useRef(0);

  const onCreate = (date, videoUrl) => {
    const newItem = {
        id: dateId.current,
        date,
        videoUrl,
    }
    dateId.current += 1;
    setData([newItem, ...data]);
  }

  const onRemove = (targetId) => {
      const newDiaryList = data.filter((it)=>it.id !== targetId);
      setData(newDiaryList);
  }

  const onEdit = (id, date, videoUrl) => {
    const newDiaryList = data.map((it)=>it.id === id ? {id, date, videoUrl} : it)
    setData(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
