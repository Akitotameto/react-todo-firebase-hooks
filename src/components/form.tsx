import React, { useState, useEffect } from 'react'
import { db } from '../index'
import { useLocation } from 'react-router'

type TodoDataType = {
    id: number,
    title: string,
    content: string,
    createdAt: string,
    category: number,
    isFavorite: boolean
}

type Props = {
}

export const Form: React.SFC<Props> = (props) => {
    const [todoData, setTodoData] = useState<TodoDataType[]>([])
    const [item, setItem] = useState<TodoDataType> ()

    // title,content,categoryの状態管理
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [category, setCategory] = useState<number>()

    // ロケーション情報を取得
    const location = useLocation();

    // Queryデータを文字列で取得する為のライブラリ？
    const query = require('query-string');

    // Queryデータ(ID)を文字列で取得
    const paramsId = query.parse(location.search).id

    const _fetchTodoData = async () => {
        console.log('paramsId', paramsId)
        let todoData : TodoDataType[] = []
        const datas = await db.collection('todo').where('id', '==', Number(paramsId)).get().then(d => {
            d.forEach(doc => {
                todoData.push({
                    id: doc.data().id,
                    title: doc.data().title,
                    content: doc.data().content,
                    createdAt: doc.data().createdAt,
                    category: doc.data().category,
                    isFavorite: doc.data().isFavorite
                })
            })
        })
        setTodoData(todoData)
        console.log('todoDataForm', todoData)

        todoData.map((item) =>
            setItem(item)
        )
    }

    useEffect(() => {
        _fetchTodoData()
    }, [])

    // ドキュメント数
    // let oneData
    // const todoData : TodoDataType[] = []
    // db.collection('todo').get().then(d => {
    //     d.forEach(doc => {
    //         todoData.push({
    //             id: doc.data().id,
    //             title: doc.data().title,
    //             content: doc.data().content,
    //             createdAt: doc.data().createdAt,
    //             category: doc.data().category,
    //             isFavorite: doc.data().isFavorite
    //         })
    //     })
    // })
    // console.log('=========', oneData)
    // console.log('カウント数', todoData.length)

    // 登録処理
    const onSubmit = async () => {
        // 登録した日付を取得
        // let createdAt = firebase.firestore.FieldValue.serverTimestamp()

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

    // 更新処理
    const onUpdata = async () => {
        const data = db.collection('todo').doc('ak39FLao5oUFDpP37izE').update({
            id: 10,
            title: title,
            content: content,
            category: category,
            createdAt: '2020-05-11',
            isFavorite: false
        })
    }

    // console.log('todo', db.collection('todo').where('id', '==', Number(paramsId))

    return(
        <div>
            <label>タイトル</label><br />
            {/* <input type="text" onChange={e => setTitle(e.target.value)} placeholder={paramsId && item?.title} value={title}  /><br /> */}
            <input type="text" onChange={e => setTitle(e.target.value)} value={paramsId ? item?.title : title}  /><br />

            <label>内容</label><br />
            {/* <input type="text" onChange={e => setTitle(e.target.value)} placeholder={paramsId && item?.content} value={content}  /><br /> */}
            <textarea  onChange={e => setContent(e.target.value)} value={paramsId ? item?.content : content} /><br />

            <label>カテゴリ</label><br />
            {/* <input type="text" onChange={e => setTitle(e.target.value)} placeholder={paramsId && String(item?.category)} value={category}  /><br /> */}
            <input type="text"  onChange={e => setCategory(Number(e.target.value))} value={paramsId ? item?.category : category} /><br />

            <button onClick={onSubmit}>送信</button>
            <button onClick={onUpdata}>更新</button>
        </div>
    )
}
