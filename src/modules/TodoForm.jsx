import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoForm = () => {

    const { todos, setTodos, filter, setFilter } = useContext(TodoContext)

    const [text, setText] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (text.trim() === "") return

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        }

        setTodos([...todos, newTodo])

        setText("")
    }

    return (
        <div>

            
            <form onSubmit={handleSubmit} className="mb-5">

                <div className="flex gap-3">

                    <input
                        type="text"
                        placeholder="Todo yozing"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-xl bg-[#1E293B] text-white outline-none"
                    />

                    <button
                        type="submit"
                        className="bg-white text-black px-5 rounded-xl"
                    >
                        Add
                    </button>

                </div>

            </form>

           
            <div className="flex gap-3 mb-5">

                {/* ALL */}
                <div className="px-4 py-2 rounded-xl bg-[#1E293B] text-white">
                    All ({todos.length})
                </div>

                {/* SELECTED */}
                <div className="px-4 py-2 rounded-xl bg-[#1E293B] text-white">
                    Selected ({todos.filter(todo => todo.completed).length})
                </div>

                {/* UNSELECTED */}
                <div className="px-4 py-2 rounded-xl bg-[#1E293B] text-white">
                    Unselected ({todos.filter(todo => !todo.completed).length})
                </div>

            </div>

        </div>
    )
}

export default TodoForm