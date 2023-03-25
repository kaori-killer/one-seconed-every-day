import { useState, useRef } from "react";

import { storageService } from 'fbase';
import { ref, uploadString  } from "firebase/storage";

import { v4 as uuidv4 } from 'uuid';
import DiaryItem from "components/DiaryItem";

const Diary = ({ diaryObj, onCreate, onRemove, onEdit }) => {

    const dateInput = useRef();
    const videoUrlInput = useRef();

    const [date, setDate] = useState("");
    const [attachment, setAttachment] = useState("");

    const onChangeDate = (event) => {
        const { target: { value }, } = event;
        setDate(value);
    };

    const onFileChange = (event) => {
        const { target : { files }, } = event;
        const theFile = files[0];
        const reader = new FileReader();

        reader.onloadend = (finishedEvent) => {
            const { currentTarget: { result }, } = finishedEvent;
            console.log(result)
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };

    const onSubmit = async (event) => { 
        event.preventDefault();

        if(date === "") {
            dateInput.current.focus();
            return;
        }
        if(attachment === "") {
            videoUrlInput.current.focus();
            return;
        }

        const attachmentRef = ref(storageService, `${uuidv4()}`);
        const response = await uploadString(attachmentRef, attachment, "data_url" );
        
        onCreate(date, attachment);
    };

    return (
        <div className="Diary">
            <div>
                <h2>오늘의 1초</h2>
                <form>
                    <input
                        ref={dateInput}
                        name="date"
                        type="date" 
                        value={date} 
                        onChange={onChangeDate}
                    />
                    <input 
                        ref={videoUrlInput}
                        name="videoUrl"
                        type="file" 
                        accept="video/*"
                        onChange={onFileChange}
                    />
                    <button onClick={onSubmit}>저장하기</button>
                </form>
            </div>
            <div>
                <DiaryItem
                    diaryObj={diaryObj} 
                    onRemove={onRemove} 
                    onEdit={onEdit} 
                />
            </div>
        </div>
    );
}

export  default Diary;