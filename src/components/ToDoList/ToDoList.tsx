import React, {useEffect} from 'react'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { Loader } from '../Loader/Loader'
import { TodoItem } from '../ToDoItem.tsx/ToDoItem'
import { useTodosQuery } from './ToDoList.generated'
import { useActions } from '../../hooks/action'
import { useAppSelector } from '../../hooks/redux'

export function ToDoList() {
  const {data, loading, error} = useTodosQuery()
  const { setToDos } = useActions()
  const { todos } = useAppSelector(state => state.todos)

  useEffect(() => {
    setToDos(data?.todos?.data)
  }, [data])
  
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <div className="relative w-[560px]">
      { loading && <Loader /> }

      { error && <ErrorMessage error={error.message} /> }

      { todos && todos.map(todo => <TodoItem todo={todo} key={todo?.id} />) }
      </div>
    </div>
  )
}