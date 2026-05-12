import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import Modal from '../components/Modal'

const TodoList = () => {

    const { todos, setTodos } = useContext(TodoContext)

    const [delModal, setDelModal] = useState(false)
    const [delID, setDelId] = useState(null)

    const [editModal, setEditModal] = useState(false)
    const [editValue, setEditValue] = useState("")
    const [editID, setEditId] = useState(null)

    function handleDelBtnClick(id) {
        setDelModal(true)
        setDelId(id)
    }
    
    function handleDelConfirm() {
        const delIndex = todos.findIndex(todo => todo.id === delID)
        todos.splice(delIndex, 1)
        setDelModal(false)
        setTodos([...todos])
    }

    function handleEditBtnClick(id) {
        setEditModal(true)
        const findObj = todos.find(item => item.id === id)
        setEditValue(findObj.name)
    }

    function handleEditSumbit(e) {
        e.preventDefault()
        const editIndex = todos.findIndex(todo => todo.id === editID)
        findObj.name = e.target.todo.value
        setTodos([...todos])
        setEditModal(false) 
    }


    return (
        <>
            <ul className="space-y-4 text-white">

                {todos.map((item, index) => (

                    <li key={item.id} className="flex items-center justify-between bg-[#1E293B] p-3 rounded-xl">

                        <div className="flex items-center gap-3">
                            <span>{index + 1}.</span>
                            <span>{item.name}</span>
                        </div>

                        <div className="flex items-center gap-3">

                            <button onClick={() => {
                                handleEditBtnClick(item.id)
                            }} className="bg-yellow-500 px-3 py-1 rounded-lg text-black">
                                Edit
                            </button>

                            <button onClick={() => {
                                handleDelBtnClick(item.id)
                            }} className="bg-red-600 px-3 py-1 rounded-lg text-white">
                                Delete
                            </button>

                            <input type="checkbox" />

                        </div>

                    </li>

                ))}

            </ul>

            <Modal openModal={delModal} setOpenModal={setDelModal}>
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur">
                    <div className=" p-6 rounded-xl w-75 text-[#1E293B] text-center">
                        <h2 className="text-lg mb-4">Delete this todo?</h2>

                        <div className="flex justify-center gap-3">

                            <button onClick={() => setDelModal(false)} className=" text-white px-4 py-2 bg-gray-500 rounded-lg">
                                Cancel
                            </button>

                            <button onClick={handleDelConfirm} className="px-4 text-white py-2 bg-red-600 rounded-lg">
                                Delete
                            </button>

                        </div>

                    </div>
                </div>

            </Modal>

            <Modal openModal={editModal} setOpenModal={setEditModal}>
                <form onSubmit={handleEditSumbit} className="flex gap-1 items-center">
                    <input defaultValue={editValue} type="text" placeholder="todoingizni ozgartiring" className="flex-1 ml-4 px-2 mt-7 py-3 rounded-xl bg-[#1E293B] text-white outline-none" name="todo" />
                    <button type="submit" className="bg-green-600 text-black mr-4 mt-7 px-5 py-3 rounded-xl">Add</button>
                </form>
            </Modal>

        </>
    )
}

export default TodoList