import React from 'react'

export default function Items({todo, onDelete}) {
    return (
        <div className="col-sm-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.desc}</p>
                    <a href="#" className="btn btn-danger" onClick={()=> {onDelete(todo)}}>Delete</a>
                </div>
            </div>
        </div>
    )
}
