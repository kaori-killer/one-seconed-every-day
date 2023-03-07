const DiaryItem = ( {id, date, videoUrl, onDelete} ) => {
    return (
        <div className="DiaryItem">
            <div className="info">
                <p>{date}</p>
            </div>
            <div className="content">
                <video controls>
                    <source src={videoUrl} type="video/mp4"></source>
                </video>
                <button onClick={()=>onDelete(id)}>삭제하기</button>
            </div>
        </div>
    );
}

export default DiaryItem;