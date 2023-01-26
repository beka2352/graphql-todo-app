import React, {useState} from 'react'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { useAddToDoMutation } from './AddToDo.generated'
import { useActions } from '../../hooks/action'


interface AddToDoProps {
  onCreate: () => void
}

export function AddToDo({ onCreate }: AddToDoProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [addToDo, {data}] = useAddToDoMutation()
  const { addTodo: createToDo } = useActions()

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (value.trim().length === 0) {
      setError('Please enter valid title.')
      return
    }

    addToDo({
        variables: {
            input: {
                completed: false,
                title: value
            }
        }
      }).then(res => {
        createToDo(res.data?.createTodo)
      })

    onCreate()
  }

  const ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <form onSubmit={submitHandler}>
      <div></div>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter todo title..."
        value={value}
        onChange={ChangeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
    </form>
  )
}