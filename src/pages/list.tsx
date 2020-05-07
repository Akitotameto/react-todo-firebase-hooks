import React, { useState, useEffect, useCallback } from 'react'
import { Header } from  '../components/header'
import { TodoDataLow }  from  '../components/todo-data-low'

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

export const List: React.FC<Props> = (history) => {

    const [todoData, setTodoData] = useState<TodoDataType[]>([])

    useEffect(() => {
        const fetchTodoData = () => {
            const todoData: TodoDataType[] = [
                {
                    id: 1,
                    title: 'タイトル1',
                    content: '内容1内容1内容1内容1内容1内容1内容1',
                    createdAt: '2020-05-04',
                    category: 1,
                    isFavorite: false,
                },
                {
                    id: 2,
                    title: 'タイトル2',
                    content: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2',
                    createdAt: '2020-05-04',
                    category: 2,
                    isFavorite: true,
                },
                {
                    id: 3,
                    title: 'タイトル3',
                    content: '内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3',
                    createdAt: '2020-05-04',
                    category: 1,
                    isFavorite: false,
                },
            ]
            setTodoData(todoData)
        }
        setTimeout(() => fetchTodoData(), 300)
    }, [])

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
        }
    };

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
        }
    };

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


    return(
        <div>
            <Header history={history} index={1}/>
            <div className='contents-1'>
                <h1>Todo List</h1>
            </div>
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
                    {!!todoData ? todoData.map((item:TodoDataType) => <TodoDataLow todoData={item} onFavorite={onFavorite} onUnFavorite={onUnFavorite} onDeleteLow={onDeleteLow} />): '読み込み中...'}
                </tbody>
            </table>
        </div>
    )

}

// class List extends Component<Props, State> {
//         constructor(props: Props) {
//         super(props)

//         this.state = {
//             todoData: null
//         }
//     }


// fetchTodoData = () => {
//     const todoData: TodoDataType[] = [
//         {
//             id: 1,
//             title: 'タイトル1',
//             content: '内容1内容1内容1内容1内容1内容1内容1',
//             createdAt: '2020-05-04',
//             category: 1,
//             isFavorite: false,
//         },
//         {
//             id: 2,
//             title: 'タイトル2',
//             content: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2',
//             createdAt: '2020-05-04',
//             category: 2,
//             isFavorite: true,
//         },
//         {
//             id: 3,
//             title: 'タイトル3',
//             content: '内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3',
//             createdAt: '2020-05-04',
//             category: 1,
//             isFavorite: false,
//         },
//     ]

//         setTimeout(() => this.setState({ todoData }), 300)
//     }

//     componentWillMount() {
//         console.log('componentWillMount!!!')
//     }

//     componentDidMount() {
//         this.fetchTodoData()
//         console.log('componentDidMount!!!')
//     }

//     componentWillUnmount() {
//         console.log('componentWillUnmount!!!')
//     }

// onFavorite = (id: number) => {
//     const { todoData } = this.state;
//     console.log("test", id)
//     if (todoData) {
//         todoData.map((v, index) => {
//             console.log('todo index', index)
//             console.log('todo value', v)
//             if (v.id === id){
//                 console.log('favorite!')
//                 todoData[index].isFavorite = true
//                 this.setState({ todoData })
//                 console.log('todoData', todoData)
//             }
//         })
//     }
// };

// onUnFavorite = (id: number) => {
//     const { todoData } = this.state;
//     console.log("test", id)
//     if (todoData) {
//         todoData.map((v, index) => {
//             console.log('todo index', index)
//             console.log('todo value', v)
//             if (v.id === id){
//                 console.log('favorite!')
//                 todoData[index].isFavorite = false
//                 this.setState({ todoData })
//                 console.log('todoData', todoData)
//             }
//         })
//     }
// };

// onDeleteLow = (id: number) => {
//     const { todoData } = this.state;
//     console.log("test", id)
//     if (todoData) {
//         todoData.map((v, index) => {
//         if (v.id === id){
//             todoData.splice(index, 1)
//             this.setState({ todoData })
//             console.log('todoData', todoData)
//         }
//     })
//     }
// };

//     render() {
//         const { history } = this.props;
//         const { todoData } = this.state;

//         return(
//             <div>
//                 <Header history={history} index={1}/>
//                 <div className='contents-1'>
//                     <h1>Todo List</h1>
//                 </div>
//                 <table className='table-1'>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>タイトル</th>
//                             <th>内容</th>
//                             <th>日時</th>
//                             <th>カテゴリ</th>
//                             <th>操作</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {!!todoData ? <TodoDataLow todoData={todoData} onFavorite={this.onFavorite} onUnFavorite={this.onUnFavorite} onDeleteLow={this.onDeleteLow} /> : "読み込み中..." }
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
//}}