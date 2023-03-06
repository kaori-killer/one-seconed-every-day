const DiaryList = ({ diaryList }) => {

    console.log(diaryList)

    return (
        <div className="DiaryList">
            <h2>1초 목록</h2>
            <h4>{diaryList.length}개의 영상이 있습니다.</h4>
            <div>
                {diaryList.map((it)=>{
                    return (
                        <div key={it.id}>
                            <p>{it.date}</p>
                            <video>
                                <source src={it.video} type="video"></source>
                            </video>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DiaryList;