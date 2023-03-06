const DiaryItem = ( {date, videoUrl}) => {
    return (
        <div className="DiaryItem">
            <div className="info">
                <p>{date}</p>
            </div>
            <div className="content">
                <video controls>
                    <source src={videoUrl} type="video/mp4"></source>
                </video>
            </div>
        </div>
    );
}

export default DiaryItem;