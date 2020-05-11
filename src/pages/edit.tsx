import React from 'react'
import { Header } from  '../components/header'
import { Form } from  '../components/form'

type Props = {
    history: any
}

export const Edit: React.FC<Props> = (props) => {
    return(
        <div>
            <Header history={props.history} index={3} />
            <h1>編集画面</h1>
            <Form />
        </div>
    )
}