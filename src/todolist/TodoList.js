import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStak } from "./stakSlice";
import Button from "../components/Button";
import EditTodo from "./EditTodo";

const TodoList = () => {

    // Recebendo array de dados via redux
    const tasks = useSelector(store => store.staks);
    const dispatch = useDispatch();

    // Deletando item na lista, passando como parâmetro o id do item
    const handleDeleteTask = (id) =>{
        dispatch(deleteStak({id: id}))
    }

    // Função para gerenciar Lista
    const renderTasksCard = () =>{

        // Acessando cada item no array tarefa (tasks) e imprimindo na tela
       const task = tasks.map((task, i) => (

            <div className="flex bg-gray-300 p-5 items-center justify-between" key={task.id}>
                <div>
                    <h3 className="font-bold text-lg text-green-600">{task.name}</h3>
                    <span className="font-normal text-gray-600">{task.tool}</span>
                </div>

                <div className="flex gap-4">
                    <Link to={`edit-task/${task.id}`}>
                    <button >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                    </Link>
                    <button onClick={() => handleDeleteTask(task.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>

        ));

        return task;

    }

    return(
       <div>
            <Link to='/add-todo'><Button>Adicionar Tarefa</Button></Link>

            <div className="grid gap-5 md:grid-cols-2">
                {/** Verificando se existe tarefa na Lista */}
                {
                    tasks.length 
                    ? 
                    renderTasksCard() 
                    : 
                    (<p className="text-center col-span-2 text-gray-700 font-semibold">Sem Tarefa na lista</p>)
                }
            </div>
       </div>
    )

}

export default TodoList;