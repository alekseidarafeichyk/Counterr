import React from 'react';
import s from './Display.module.css'
import Tabloid from './Tabloid/Tabloid';
import Control from './Control/Control';

type DisplayPropsType = {
    value: number
    inc: () => void
    reset: () => void
    maxValue: number
    disableCountBtn: boolean
    mode: boolean
    error: boolean
}

function Display(props: DisplayPropsType) {
    return(
        <div className={s.display}>
            <Tabloid
                value={props.value}
                maxValue={props.maxValue}
                mode={props.mode}
                error={props.error}
            />
            <Control
                inc={props.inc}
                reset={props.reset}
                value={props.value}
                maxValue={props.maxValue}
                disableCountBtn={props.disableCountBtn}
            />
        </div>
    )
}

export default Display;


