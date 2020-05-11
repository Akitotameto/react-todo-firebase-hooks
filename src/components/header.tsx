import React from 'react'
import { useHistory } from 'react-router'

type Props = {
    history: any
    index: number
}

export const Header: React.SFC<Props> = (props) => {

    const history = useHistory();

    const pageList = () => {
        history.push('/')
    }

    const pageSet = () => {
        history.push('/set')
    }

    return(
        <div>
            <button onClick={pageList} > List {props.index === 1 && `(avtive)`} </button>
            <button onClick={pageSet} > Set {props.index === 2 && `(avtive)`} </button>
        </div>
    )
}