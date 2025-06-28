import React, { useState } from 'react'


export function useTasks(newTask){
    const [tasks, setTasks] = useState([]);
    
    if(newTask != null) setTasks(...tasks, newTask);
    return [tasks, setTasks];

}