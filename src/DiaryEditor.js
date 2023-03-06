import { useState } from "react";
import App from './App';

const DiaryEditor = () => {
    const [state, setState] = useState({
        date: "2023-03-06",
        video: ""
    })

    const handleChangeState = (e) => {
        setState({
            ...state, 
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => { console.log("저장 성공")}

    return (
        <div className="DiaryEditor">
            <h2>오늘의 1초</h2>
            <div>
                <input 
                    name="date"
                    type="date" 
                    defaultValue={state.date} 
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <input 
                    name="video"
                    type="file" 
                    accept="video/mp4,video/mkv, video/x-m4v,video/*"
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <button onClick={handleSubmit}>저장하기</button>
            </div>
        </div>
    );
}

export  default DiaryEditor;