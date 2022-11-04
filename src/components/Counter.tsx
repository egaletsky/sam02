import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from './Button';

export type CounterType = {
    countMax: number
}

export const Counter = (props: CounterType) => {

    let [count, setCount] = useState<number>(0)
    let {countMax} = props

    const onIncrement = () => {
        if (count < countMax) {
            setCount(++count)
        }
    }

    const onReset = () => {
        setCount(0)
    }

    const classNameWindow = s.counterWindow + (count === countMax ? ' ' + s.redText : '')

    return (
        <div className={s.counter}>

            <div className={classNameWindow}>
                {'' + count + '/' + countMax}
            </div>

            <div className={s.groupButton}>

                <Button name={'inc'}
                        callback={onIncrement}
                        disabled={count === countMax}/>

                <Button name={'reset'}
                        callback={onReset}
                        disabled={!count}/>

            </div>
        </div>
    )

}

