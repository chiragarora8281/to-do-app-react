import {v1 as uuid} from 'uuid';
import toast,{Toaster} from 'react-hot-toast';
import Form from "./components/forms/Form"
import TOdoList from "./components/todo/TOdoList"
import {useState} from "react";


const App = () => {
    let[state ,setState]=useState(
        {
         items:[],
         id:uuid(),
         course:"",
         trainer:"",
        }
    );
    let handleChange=(e) =>{
        let{name,value}=e.target;
        setState({...state,[name]:value});
    };
    let handleSubmit = e =>{
        e.preventDefault();
        try{
            let newItem={
                id:state.id,
                course:state.course,
                trainer:state.trainer
            };
            let updatedItem=[...state.items,newItem];
            console.log(updatedItem);
            setState({
                items:updatedItem,
                id:uuid(),
                course:"",
                trainer:"",
                
            })
            console.log(state);
            // window.location.assign("");
        }catch (error){
            console.log(error);
        // }finally{
        //     // setState({
        //     //     course:"",
        //     //     Trainer:"",
        //     // })
        }
    }
    let handleDelete=(id)=>{
        let filteredItem =state.items.filter(item=>item.id!== id)
        setState({items: filteredItem})
    }
    let handleUpdate=id =>{
        let editContent =state.items.filter(item=>item.id!== id)
        let selectedItem =state.items.find((item)=>item.id=== id)
        console.log(selectedItem);
        setState({
            items:editContent,
            course:selectedItem.course,
            trainer:selectedItem.trainer,
            id:id,
        })
    }
  return (
    <section id="mainBlock">
        <article>
            <header>
                <Toaster/>
            <h1>Todo App</h1>
            </header>
            <main>
               <Form course={state.course} trainer={state.trainer} handleChange={handleChange} handleSubmit={handleSubmit}/>
               <TOdoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            </main>
        </article>
    </section>
  )
}

export default App