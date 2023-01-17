import React, {useEffect} from 'react'
import { ToDoItemFragment, useChangeStatusMutation, useDeleteToDoMutation } from './ToDoItem.generated'
import { useActions } from '../../hooks/action'


export function TodoItem({ todo }: { todo: ToDoItemFragment | null }) {
  const [changeStatus] = useChangeStatusMutation()
  const [deleteToDo] = useDeleteToDoMutation()
  const { removeTodo } = useActions()

  const OnCheckBoxChange = () => {
    changeStatus({
      variables: {
        id: todo?.id ? todo?.id : '',
        input: { completed: !todo?.completed}
      }
    })
  }

  const OnDelteToDo = () => {
    deleteToDo({
      variables: {
        id: todo?.id ? todo?.id : ''
      }
    }).then(() => {
      removeTodo(todo?.id)
    })
  }
  
  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all flex items-center relative">
        <input 
            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-4 cursor-pointer" 
            type="checkbox" 
            value=""
            onChange={OnCheckBoxChange} 
            checked={todo?.completed ? todo?.completed : false}></input>
        <h2 className="text-lg font-bold">{todo?.title}</h2>
        <img className="w-4 cursor-pointer absolute right-4" onClick={OnDelteToDo} src="https://freesvg.org/img/1544641784.png" alt="" />
    </div>
  )
}