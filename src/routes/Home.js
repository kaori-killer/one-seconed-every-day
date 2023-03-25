import { useState, useEffect } from 'react';

import { dbService } from 'fbase';
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

import 'routes/Home.css';
import Diary from 'components/Diary';

function Home() {
    const [diaries, setDiaries] = useState([]);

    useEffect(()=> {
    // 실시간으로 데이터를 DB에서 가져오며 DB의 변화를 계속 지켜본다.
    const q = query(collection(dbService, "diaries"), 
                    orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const diaryArray = querySnapshot.docs.map((doc)=>{
            return ({
                id: doc.id,
                ...doc.data(),
            });
        });
        setDiaries(diaryArray);
        console.log("Current: ", diaryArray);
    });

        return ()=>{unsubscribe();};
    }, []);

    const onCreate = async (date, attachmentUrl) => {
        const diaryObj = {
            date,
            attachmentUrl
        }

        try {
            const docRef = await addDoc(collection(dbService, "diaries"), diaryObj);
            console.log("Document written with ID: ", docRef.id);
        } catch(e) {
            console.error("Error adding document: ", e)
        }
    }

    const onRemove = () => {
    }

    const onEdit = () => {
    }

    return (
        <div className="Home">
            <div>
            <h4>{diaries.length}개의 영상이 있습니다.</h4>
            {diaries.map((diary) => (
                <Diary
                    key={diary.id}
                    diaryObj={diary}
                    onCreate={onCreate}
                    onRemove={onRemove}
                    onEdit={onEdit}
                />
            ))}
            </div>
        </div>
    );
}

export default Home;
