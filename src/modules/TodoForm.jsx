import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoForm = () => {

    const { todos, setTodos } = useContext(TodoContext)

    function handleSubmit(e) {
        e.preventDefault()

        const value = e.target.todo.value


        const data = {
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            name: value,
            completed: false
        }

        setTodos(last => [...last, data])

        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="mb-5">
                <div className="flex gap-3">
                    <input type="text" placeholder="Todo yozing" className="flex-1 px-4 py-3 rounded-xl bg-[#1E293B] text-white outline-none" name='todo' />
                    <button type="submit" className="bg-white text-black px-5 rounded-xl">Add</button>
                </div>
            </form>

            <div className="flex gap-3 mb-5">
                <div className="px-4 py-2 rounded-xl bg-[#1E293B] text-white">
                    All ({todos.length})
                </div>

                <div className="px-4 py-2 rounded-xl bg-[#1E293B] text-white">
                    Selected ({todos.filter(todo => todo.completed).length})
                </div>

                <div className="px-4 py-2 rounded-xl bg-[#1E293B] text-white">
                    Unselected ({todos.filter(todo => !todo.completed).length})
                </div>
            </div>
        </div>
    )
}

export default TodoForm