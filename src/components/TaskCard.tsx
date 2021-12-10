import { Task } from "../interfaces/Task";
import { MdDeleteForever } from "react-icons/md";
import '../App.css';
interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

export const TaskCard = ({ task, deleteATask }: Props) => (
  <div className="card card-body bg-warning rounded-0 text-secondary">
    <h3>{task.title}</h3>
    <p>{task.id}</p>
    <p>{task.description}</p>
    <button
      className="btn btn-danger btn-block rounded-circle"
      onClick={() => task.id && deleteATask(task.id)}><MdDeleteForever/></button>
  </div>
);