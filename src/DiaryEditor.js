import { useState } from "react";

const DiaryEditor = () => {
    const [date, setDate] = useState("2023-03-06");
    const [video, setVideo] = useState("");

    return (
        <div className="DiaryEditor">
            <h2>오늘의 1초</h2>
            <div>
                <input defaultValue={date} onChange={(e)=>setDate(e.target.value)}type="date" />
            </div>
            <div>
                <input onChange={(e)=>setVideo(e.target.value)} type="file" accept="video/mp4,video/mkv, video/x-m4v,video/*"/>
            </div>
        </div>
    );
}

export  default DiaryEditor;