import {Task} from '../interfaces/Task'

interface Props {
    tasks: Task[]
}

export default function TaskList({tasks}:Props) {
    return (
        <div>
        {tasks.map(task => (
        <div>
          <p>{task.id}</p>
          <p>{task.title}</p>
          <p>{task.description}</p>
          <p>{task.completed}</p>
        </div>
      )
      )}
        </div>
    )
}
