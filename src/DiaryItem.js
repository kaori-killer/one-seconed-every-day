import { useState, useRef } from "react";
import getAllowedVideoUrl from "./util/videoUrl";

const DiaryItem = ( {id, date, videoUrl, onRemove, onEdit} ) => {
    
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localDate, setLocalDate] = useState(date);
    const [localVideoUrl, setLocalVideoUrl] = useState(videoUrl);
    const localDateInput = useRef();
    const localVideoUrlInput = useRef();

    const handleRemove = () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            onRemove(id);
        }
    }

    const handleEdit = () => {
        if(localDate === "") { localDateInput.current.focus(); return; }
        if(localVideoUrl === "") { localVideoUrlInput.current.focus(); return; }
        
        if(window.confirm(`${id}번 째 기록을 수정하시겠습니까?`)){
            onEdit(id, localDate, localVideoUrl);
            toggleIsEdit();    
        }
    }

    const handleQuitEdit = () => {
        toggleIsEdit();
        setLocalDate(date);
        setLocalVideoUrl(videoUrl);
    }

    return (
        <div className="DiaryItem">
            <div className="content">
                <div className="info">
                {isEdit ? (
                        <input
                            ref={localDateInput}
                            name="date"
                            type="date" 
                            value={localDate} 
                            onChange={(e)=>setLocalDate(e.target.value)}
                        />
                    ) : (
                            <p>{date}</p>
                        )
                    }
                <div className="content">
                    {isEdit ? (
                        <>
                            <input
                                ref={localVideoUrlInput}
                                name="videoUrl"
                                type="file" 
                                accept="video/*"
                                onChange={(e)=>setLocalVideoUrl(getAllowedVideoUrl(e))}
                            />
                            <button onClick={handleQuitEdit}>수정 취소</button>
                            <button onClick={handleEdit}>수정 완료</button>
                        </>
                    ) : (
                        <>
                            <video controls>
                                <source src={videoUrl} type="video/mp4"></source>
                            </video>
                            <button onClick={handleRemove}>삭제하기</button>
                            <button onClick={toggleIsEdit}>수정하기</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
    );
}

export default DiaryItem;