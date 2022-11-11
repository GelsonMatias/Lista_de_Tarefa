import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import TextField from '../components/TextField'
import Button from "../components/Button";
import { addTodo } from "./stakSlice";


const AddTodo = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        tool: ''
    })
    

    const handleStaks = () => {
        setValues({name: '', tool: ''})
        dispatch(addTodo({
            id: uuidv4(),
            name: values.name,
            tool: values.tool        
        }))
        // console.log(values);
        navigate('/');
    }
   

    return(
        <div className="mt-10 max-w-xl mx-auto">
            <TextField 
                label='Tarefa'
                value={values.name}
                onChange={(e) => setValues({...values, name: e.target.value})}
                inputProps={{type: 'text', placeholder: 'Digite a tarefa'}}
            />
            <br/>
            <TextField
                label='Ferramentas'
                value={values.tool}
                onChange={(e) => setValues({...values, tool:e.target.value})}
                inputProps={{type: 'text', placeholder: 'Ferramentas para tarefa'}} 
            />
            <Button onClick={handleStaks}>Salvar</Button>
        </div>
    )

}

export default AddTodo;