const DiaryItem = (diaryObj, onRemove, onEdit) => {
    <div className="DiaryItem">
        {diaryObj.date}
        {diaryObj.attachmentUrl}
    </div>
}

export default DiaryItem;

