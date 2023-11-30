import {  Link } from 'react-router-dom'

import './style.css'

function Notes() {

    return (
        <>
            <h3>Notes</h3>
            <div class="card">
                <div class="card-header">
                    Titulo 1
                    <Link to="/enote" class="btn btn-secondary">Editar</Link>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">'Asunto'</li>
                    <li class="list-group-item">'Propietario'</li>
                    <li class="list-group-item">'Fecha'</li>
                </ul>
                <div class="card-footer">
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Notes
