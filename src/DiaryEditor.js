import { useState, useRef } from "react";

const DiaryEditor = ({ onCreate }) => {

    const dateInput = useRef();
    const videoUrlInput = useRef();

    const [state, setState] = useState({
        date: "2023-03-06",
        videoUrl: ""
    });

    const handleChangeState = (e) => {
        let newState = e.target.value;

        if(e.target.name === "videoUrl") {
            const file = e.target.files[0];
            newState = URL.createObjectURL(file);
        }

        setState({
            ...state, 
            [e.target.name]: newState,
        });
    };

    const handleSubmit = () => { 
        if(state.date === "") {
            dateInput.current.focus();
            return;
        }
        if(state.videoUrl === "") {
            videoUrlInput.current.focus();
            return;
        }
        onCreate(state.date, state.videoUrl);

        console.log("저장 성공");

        setState({
            date: "2023-03-06",
            videoUrl: state.videoUrl,       
        });
    };

    return (
        <div className="DiaryEditor">
            <h2>오늘의 1초</h2>
            <div>
                <input
                    ref={dateInput}
                    name="date"
                    type="date" 
                    value={state.date} 
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <input 
                    ref={videoUrlInput}
                    name="videoUrl"
                    type="file" 
                    accept="video/*"
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