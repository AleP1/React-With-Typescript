import { useState } from 'react';
import './App.css';

interface Props {
    title: string;
}

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
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
          <a href="/">{title}</a>
        </div>
      </nav>
      
      <main className="container p-4">
      {task.map(task => (
        <div>
          <p>{task.id}</p>
          <p>{task.title}</p>
          <p>{task.description}</p>
          <p>{task.completed}</p>
        </div>
      )
      )}
      </main>
    </div>
  );
}
