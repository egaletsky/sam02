import React from 'react';
import s from './Button.module.css'

type ButtonType ={
    name:string
    callback:()=>void
    disabled:boolean
}

export const Button = (props: ButtonType) => {

    return (

         <button className={s.button}
                 onClick={props.callback}
                 disabled={props.disabled}>
             {props.name}
         </button>


    );
};

