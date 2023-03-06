import { useState } from "react";
import App from './App';

const DiaryEditor = () => {
    const [state, setState] = useState({
        date: "",
        video: ""
    })

    return (
        <div className="DiaryEditor">
            <h2>오늘의 1초</h2>
            <div>
                <input 
                    name="date"
                    type="date" 
                    defaultValue={state.date} 
                    onChange={(e)=>
                        setState({
                            date: e.target.value,
                            video: state.video
                        })
                    }
                />
            </div>
            <div>
                <input 
                    name="video"
                    type="file" 
                    accept="video/mp4,video/mkv, video/x-m4v,video/*"
                    onChange={(e)=>
                        setState({
                            date: state.date, 
                            video: e.target.value
                        })
                    }
                />
            </div>
        </div>
    );
}

export  default DiaryEditor;