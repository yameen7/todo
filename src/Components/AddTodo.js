import React,{useState} from 'react'

export default function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();

        if(!title || !desc)
        {
            alert('Insert Title and Description');
        }
        else
        {
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
        
    }

    return (
        <div className='container mt-4'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" value={title} className="form-control" onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" value={desc} className="form-control" onChange={(e)=>setDesc(e.target.value)} id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
