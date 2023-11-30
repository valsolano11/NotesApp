import './style.css'

function EditNote() {

    return (
        <>
            <h3>Edit a Note</h3>
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Edit Title" />
            </div>
            <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Edit Content' rows="3"></textarea>
            </div>
            <div class="form-group">
                <input type="date" class="form-control" id="fecha" name="fecha" />
            </div>
            <button type="button" class="btn btn-primary">Save</button>
        </>
    )
}

export default EditNote
