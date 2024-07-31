import "./TodoList.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({todo,onUpdate,onDelete}) =>{
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) =>{
        setSearch(e.target.value);
    }
    const getSearchresult=()=>{
        return search ==="" ? todo : todo.filter((it)=> it.content.toLowerCase().includes(search));
    }
    return(
        <div className="TodoList">
            <h4>Todo List 🟦</h4>
            <input value={search} onChange={onChangeSearch} className="searchbar" placeholder="input text" />
            <div className="list_wrapper">
                {getSearchresult().map((it)=>(
                    <TodoItem key={it.id} {...it} onUpdate ={onUpdate} onDelete={onDelete}/>
                ))}
            </div> 
        </div>
    );
}


export default TodoList;