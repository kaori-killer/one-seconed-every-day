import { useState, useRef, useEffect } from 'react';

import './App.css';
import './DiaryEditor';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const store = {
  setLocalStorage(data) {
    localStorage.setItem("data", JSON.stringify(data));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem("data"));
  }
}

function App() {
  const dateId = useRef(0);
  const [data, setData] = useState([]);

  useEffect(()=> {
    const diaryList = store.getLocalStorage();
    if(diaryList){
      diaryList.sort((a, b)=>parseInt(b.id)-parseInt(a.id));
      setData(diaryList);
      dateId.current = diaryList[0].id + 1;
    }
  }, []);

  const onCreate = (date, videoUrl) => {
    const newItem = {
        id: dateId.current,
        date,
        videoUrl,
    }
    dateId.current += 1;
    setData([newItem, ...data]);
    store.setLocalStorage(data);
  }

  const onRemove = (targetId) => {
      const newDiaryList = data.filter((it)=>it.id !== targetId);
      setData(newDiaryList);
      store.setLocalStorage(data);
  }

  const onEdit = (id, date, videoUrl) => {
    const newDiaryList = data.map((it)=>it.id === id ? {id, date, videoUrl} : it)
    setData(newDiaryList);
    store.setLocalStorage(data);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
