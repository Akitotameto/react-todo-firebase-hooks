import React from 'react'
import { Header } from  '../components/header'
import { Form } from  '../components/form'

type Props = {
    history: any
}

const Set: React.SFC<Props> = (props) => {
    return(
        <div>
            <Header history={props.history} index={2} />
            <h1>登録画面</h1>
            <Form />
        </div>
    )
}

export default Set;