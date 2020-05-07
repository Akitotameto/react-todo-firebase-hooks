import React, {Component} from 'react';

type Props = {
    history: any
    index: number
}

export const Header: React.SFC<Props> = (props) => {

    const pageList = () => {
        props.history.push('/')
    }

    const pageSet = () => {
        props.history.push('/set')
    }

    return(
        <div>
            <button onClick={pageList} > List {props.index === 1 && `(avtive)`} </button>
            <button onClick={pageSet} > Set {props.index === 2 && `(avtive)`} </button>
        </div>
    )
}