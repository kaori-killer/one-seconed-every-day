import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList, onRemove, onEdit }) => {
    return (
        <div className="DiaryList">
            <h2>1초 목록</h2>
            <h4>{diaryList.length}개의 영상이 있습니다.</h4>
            <div>
                {diaryList.map((it) => {
                    return <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
                })}
            </div>
        </div>
    );
}

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;