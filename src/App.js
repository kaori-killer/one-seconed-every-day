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

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
