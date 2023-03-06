import { useState } from "react";
import App from './App';

const DiaryEditor = () => {
    const [state, setState] = useState({
        date: "",
        video: ""
    })

    const handleChangeState = (e) => {
        setState({
            ...state, 
            [e.target.name]: e.target.value,
        })
    }

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
        </div>
    );
}

export  default DiaryEditor;