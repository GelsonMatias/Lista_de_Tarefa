import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editStak } from "./stakSlice";
import TextField from '../components/TextField'
import Button from "../components/Button";

const EditTodo = () => {


    const navigate = useNavigate();

    const params = useParams();
    const staks = useSelector(store => store.staks);
    // console.log(params);
    // console.log(staks);
    const dispatch = useDispatch();

    const existStak = staks.filter((stak) => stak.id === params.id);
    const {name, tool} = existStak[0]
    const [values, setValues] = useState({
        name,
        tool
    });
    const handleEditStak = () => {
        setValues({name: '', tool: ''})
        // console.log(values);
        dispatch(editStak({
            id: params.id,
            name: values.name,
            tool: values.tool,
        }))
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
        <Button onClick={handleEditStak}>Editar</Button>
    </div>
    )

}

export default EditTodo;