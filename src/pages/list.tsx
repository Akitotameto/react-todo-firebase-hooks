import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Header } from  '../components/header'
import { TodoDataLow }  from  '../components/todo-data-low'
import { db } from "../index"

type TodoDataType = {
    id: number,
    title: string,
    content: string,
    createdAt: string,
    category: number,
    isFavorite: boolean
}

type Props = {
    history: any
}

export const List: React.FC<Props> = () => {
    const [todoData, setTodoData] = useState<TodoDataType[]>([])
    const [favoriteCount, setFavoriteCount] = useState<number>()
    const history = useHistory()

    const fetchTodoData = async () => {
        let todoData : TodoDataType[] = []
        const datas = await db.collection('todo').get().then(d => {
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

        let favorite = todoData.filter((item) => {
            return item.isFavorite == true
        })
        setFavoriteCount(favorite.length)
    }

    // FirebaseのDBからデータを取得
    useEffect(() => {
        fetchTodoData();
    }, [])

    // お気に入り処理
    const onFavorite = (id: number) => {
        console.log("test", id)
        if (todoData) {
            todoData.map((v, index) => {
                console.log('todo index', index)
                console.log('todo value', v)
                if (v.id === id){
                    console.log('favorite!')
                    todoData[index].isFavorite = true
                }
            })
            setTodoData(todoData)
            const data = db.collection('todo').doc('ak39FLao5oUFDpP37izE').update({
                id: 1,
                title: 'aaaa',
                content: 'bbbb',
                category: 1,
                createdAt: '2020-05-11',
                isFavorite: true
            }).then(() => {
                fetchTodoData();
            })
        }
    };

    // お気に入り解除処理
    const onUnFavorite = (id: number) => {
        console.log("test", id)
        if (todoData) {
            todoData.map((v, index) => {
                console.log('todo index', index)
                console.log('todo value', v)
                if (v.id === id){
                    todoData[index].isFavorite = false
                }
            })
            setTodoData(todoData)
            const data = db.collection('todo').doc('ak39FLao5oUFDpP37izE').update({
                id: 1,
                title: 'aaaa',
                content: 'bbbb',
                category: 1,
                createdAt: '2020-05-11',
                isFavorite: false
            }).then(() => {
                fetchTodoData();
            })
        }
    };

    // 削除処理
    const onDeleteLow = (id: number) => {
            console.log("test", id)
            console.log('id', id)
            console.log('todoData', todoData)
            if (todoData) {
                console.log('delete')
                todoData.map((v, index) => {
                    if (v.id === id){
                        todoData.splice(index, 1)
                        console.log('todoData!', todoData)
                    }
                })
                setTodoData(todoData)
            }
    }

    // 編集画面へ遷移
    const pageEdit = (id: number) => {
        let oneDataaa = todoData.filter(item => {
            return item.id == id
        })
        // idを取得
        history.push({
            pathname: '/edit',
            search: `?id=${id}`,
        })

        // 特定のデータに絞る
        // let oneData;
        // if (todoData) {
        //     console.log('取得したid', id)
        //     todoData.map((v, index) => {
        //         if (v.id === id){
        //             oneData = v;
        //             console.log('todoDataのID', v.id)
        //             console.log('todoData!', todoData)
        //         }
        //     })
        //     console.log('oneData', oneData)
        // }

        // 特定のデータに絞るパターン2
        console.log('oneDataList', todoData.filter(item => {
            return item.id == id
        }))
    }

    return(
        <div>
            <Header history={history} index={1}/>
            <div className='contents-1'>
                <h1>Todo List</h1>
            </div>
            <span>お気に入り件数 : {favoriteCount} </span>
            <table className='table-1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>タイトル</th>
                        <th>内容</th>
                        <th>日時</th>
                        <th>カテゴリ</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {!!todoData ? todoData.map((item:TodoDataType) => <TodoDataLow todoData={item} onFavorite={onFavorite} onUnFavorite={onUnFavorite} onDeleteLow={onDeleteLow} pageEdit={pageEdit} />) : '読み込み中...'}
                </tbody>
            </table>
        </div>
    )

}
