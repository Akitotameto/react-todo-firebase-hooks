import React, { useState } from 'react'

export const Form: React.FC = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [category, setCategory] = useState<number>(0)
    const send  = () => {
        console.log('テスト', title, content, category)
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
