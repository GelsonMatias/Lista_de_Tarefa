
import { Routes, Route } from 'react-router-dom'
import AddTodo from './todolist/AddTodo';
import TodoList from "./todolist/TodoList";
import EditTodo from './todolist/EditTodo';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-2">
      <h1 className="text-center text-2xl font-bold underline my-5">Listas de Tarefas com Redux e Tailwind</h1>
      <Routes>
        <Route path='/' element={<TodoList/>} />
        <Route path='add-todo' element={<AddTodo/>}/>
        <Route path='edit-task/:id' element={<EditTodo/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
