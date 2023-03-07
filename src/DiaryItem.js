import { useState } from "react";
import getAllowedVideoUrl from "./util/videoUrl";

const DiaryItem = ( {id, date, videoUrl, onRemove, onEdit} ) => {
    
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localDate, setLocalDate] = useState(date);
    const [localVideoUrl, setLocalVideoUrl] = useState(videoUrl);

    const handleRemove = () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            onRemove(id);
        }
    }

    const handleEdit = () => {
        onEdit(id, localDate, localVideoUrl);
        toggleIsEdit();
    }

    return (
        <div className="DiaryItem">
            <div className="info">
                <p>{date}</p>
            </div>
            <div className="content">
                {isEdit ? (
                    <>
                        <input
                            name="date"
                            type="date" 
                            value={localDate} 
                            onChange={(e)=>setLocalDate(e.target.value)}
                        />
                        <input 
                            name="videoUrl"
                            type="file" 
                            accept="video/*"
                            onChange={(e)=>setLocalVideoUrl(getAllowedVideoUrl(e))}
                        />
                        <button onClick={toggleIsEdit}>수정 취소</button>
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
                )
                }
            </div>
        </div>
    );
}

export default DiaryItem;