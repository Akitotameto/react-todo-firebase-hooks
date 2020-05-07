import React from 'react'

type TodoDataType = {
    id: number,
    title: string,
    content: string,
    createdAt: string,
    category: number,
    isFavorite: boolean
}

type Props = {
    todoData: TodoDataType,
    onFavorite: (id: number) => void,
    onUnFavorite: (id: number) => void,
    onDeleteLow: (id: number) => void
}

export const TodoDataLow: React.FC<Props> = ({todoData,onFavorite,onUnFavorite,onDeleteLow}) =>
{
    const { id, isFavorite, title, content, category, createdAt } = todoData;

    return(
            <tr key={id}>
            <td>{isFavorite && "★"} {id}</td>
            <td>{title}</td>
            <td>{content}</td>
            <td>{createdAt}</td>
            <td>{category}</td>
            <td>
                <button onClick={() => onFavorite(id)}> お気に入り </button><br />
                <button onClick={() => onUnFavorite(id)}> お気に入り解除 </button><br />
                <button onClick={() => onDeleteLow(id)}> 削除 </button><br />
            </td>
        </tr>
    )
}