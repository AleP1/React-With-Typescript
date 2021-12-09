import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {Task} from './interfaces/Task';

interface Props {
    title?: string;
}

export function App({ title }: Props) {

  const [task, setTask] = useState<Task[]>([{
    id: 1,
    title: "Learn React",
    description: "Learn React",
    completed: false
  }]);

  return (
    <div className="bg-dark text-white" style={{height: '100vh'}}>

      <nav className="navbar navbar-dark bg-primary">
      <div className='container'>
          <img src="https://yt3.ggpht.com/ytc/AKedOLQKWZouCzx15GWTKF6cnoqE86dFknpb7pVusF6oHg=s48-c-k-c0x00ffffff-no-rj" alt="React logo" style={{width: "4rem"}} className="navbar-brand"/>
          {title && <h1><a href="/">{title}</a></h1>}
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
        <div className="col md-4">
          <TaskForm/>
        </div>
        <div className="col-md-8">
          <div className="row">
            <TaskList tasks={task}/>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
