import './style.css'

function CreateUser() {

    return (
        <>
            <h3>Create a New User</h3>
            <form>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Name' aria-describedby="emailHelp" />
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
            </form>
        </>
    )
}

export default CreateUser
