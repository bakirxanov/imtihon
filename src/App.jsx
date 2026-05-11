import TodoForm from './modules/TodoForm'
import TodoList from './modules/TodoList'

const App = () => {
  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">

      <div className="w-150">
        <TodoForm />
        <TodoList />
      </div>

    </div>
  )
}

export default App