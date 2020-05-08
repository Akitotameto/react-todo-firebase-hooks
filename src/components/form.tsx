import React, { useState } from 'react'
import { db } from '../index'
import firebase from 'firebase';
import { prependOnceListener } from 'cluster';

type TodoDataType = {
    id: number,
    title: string,
    content: string,
    createdAt: string,
    category: number,
    isFavorite: boolean
}

export const Form: React.FC = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [category, setCategory] = useState<number>(0)

    // ドキュメント数
    // let todoData : TodoDataType[] = []
    //         const datas = db.collection('todo').get().then(d => {
    //             d.forEach(doc => {
    //                 todoData.push({
    //                     id: doc.data().id,
    //                     title: doc.data().title,
    //                     content: doc.data().content,
    //                     createdAt: doc.data().createdAt,
    //                     category: doc.data().category,
    //                     isFavorite: doc.data().isFavorite
    //                 })
    //             })
    //         })
    // console.log('カウント数', todoData.length)

    const onSubmit = async () => {
        // 登録した日付を取得
        // let createdAt = firebase.firestore.FieldValue.serverTimestamp()

        // 登録処理
        const adddata = db.collection('todo').doc()
        await adddata.set({
        id: 0,
        title: title,
        content: content,
        category: category,
        createdAt: '2020-05-08',
        isFavorite: false
        })
    }

    return(
        <div>
            <label>タイトル</label><br />
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} /><br />

            <label>内容</label><br />
            <textarea  onChange={e => setContent(e.target.value)} value={content} /><br />

            <label>カテゴリ</label><br />
            <input type="text"  onChange={e => setCategory(Number(e.target.value))} value={category} /><br />

            <button onClick={send}>送信</button>
        </div>
    )
}
