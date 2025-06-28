import React, { useState } from 'react'
import { useTasks } from '../hooks/useSend.jsx'


export default function ToDoList(){
    return(
        <ol>
            {
                useTasks().map(task => {
                    return <li>{task}</li>
                })
            }
        </ol>
    );
}