import React, {useContext} from 'react'
import { AddToDo } from '../components/AddToDo/AddToDo'
import { Modal } from '../components/Modal/Modal'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ModalContext } from '../context/ModalContext'

export function HomePage() {
  const {modal, open, close} = useContext(ModalContext)

  return (
    <>
    <ToDoList />

    {modal && <Modal title="Create new todo" onClose={close}>
        <AddToDo onCreate={close} />
      </Modal>}

    <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >+</button>
    </>

  )
}