import { useState } from 'react';

import './App.css';
import './DiaryEditor';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    date: "2023-03-06",
    videoUrl: 'blob:http://localhost:3000/10865c73-05d4-4317-9cca-0493796b7bbc',
  },
  {
    id: 2,
    date: "2023-03-07",
    videoUrl: "C:\\fakepath\\test2.mp4",
  },
  {
    id: 3,
    date: "2023-03-08",
    videoUrl: "C:\\fakepath\\test3.mp4",
  },
]

function App() {
  const [diaryList, setDiaryList] = useState([]);

  return (
    <div className="App">
      <DiaryEditor diaryList={diaryList} setDiaryList={setDiaryList}/>
      <DiaryList diaryList={diaryList} />
    </div>
  );
}

export default App;
