import {AiOutlinePlus} from 'react-icons/ai'

export default function TaskForm() {
    return (
        <div className="card card-body bg-secundary text-dark">
            <h1>Añadir tarea</h1>

            <form action="">
                <input type="text"
                placeholder="write a title"
                name="title"
                className="form-control mb-3 rounded-0 shadow-none border-0"/>
                <textarea name="descrption"
                id=""
                cols={30} rows={2}
                placeholder="write a description"
                className="form-control mb-3 shadow-none border-0"></textarea>
                <button className="btn btn-primary">
                    <AiOutlinePlus/>
                </button>
            </form>
        </div>
    )
}
