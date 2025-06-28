import React, { useState } from 'react'

export default function Input(){

    function storeInputdata(e){
        getInputData(e);
    }

    return <input placeholder='Ingresa tu tarea aquí' onChange={(e) => storeInputdata(e.target.value)}/>
}

export function getInputData(data){
    return data;
}