import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import DeleteModal from './DeleteModal'

const TodoList = () => {

    const { todos, setTodos } = useContext(TodoContext)

    const [openModal, setOpenModal] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    function handleDelete(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
        setOpenModal(false)
        setSelectedId(null)
    }

    function openDeleteModal(id) {
        setSelectedId(id)
        setOpenModal(true)
    }

    return (
        <>
            <ol className="space-y-4 text-white">

                {todos.map((todo, index) => (

                    <li
                        key={todo.id}
                        className="flex items-center justify-between bg-[#1E293B] p-3 rounded-xl"
                    >

                        <div className="flex items-center gap-3">

                            <span>{index + 1}.</span>

                            <span>{todo.text}</span>

                        </div>

                        <div className="flex items-center gap-3">

                            <button className="bg-yellow-500 px-3 py-1 rounded-lg text-black">
                                Edit
                            </button>

                            <button
                                onClick={() => openDeleteModal(todo.id)}
                                className="bg-red-600 px-3 py-1 rounded-lg text-white"
                            >
                                Delete
                            </button>

                            <input type="checkbox" />

                        </div>

                    </li>

                ))}

            </ol>

            {openModal && (
                <DeleteModal
                    onCancel={() => setOpenModal(false)}
                    onConfirm={() => handleDelete(selectedId)}
                />
            )}
        </>
    )
}

export default TodoList