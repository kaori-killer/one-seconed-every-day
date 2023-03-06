import './App.css';
import './DiaryEditor';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    date: "2023-03-06",
    video: "C:\\fakepath\\test1.mp4",
  },
  {
    id: 2,
    date: "2023-03-07",
    video: "C:\\fakepath\\test2.mp4",
  },
  {
    id: 3,
    date: "2023-03-08",
    video: "C:\\fakepath\\test3.mp4",
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
