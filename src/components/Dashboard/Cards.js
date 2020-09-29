import React from 'react';
import { Button } from 'antd';

const Cards = (props) => {

    return (
        <>
            <Button onClick={props.clicked} style={{ width: '200px', height: '100px' }}>
                <div><h4>{props.title}</h4></div>
                <div>{props.content}</div>
            </Button>
        </>
    )
}

export default Cards;