import { Trash } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './Task.module.css';

export interface ITaskProps {
  taskContent: string,
  hasDone?: boolean,
  onDeleteTask: (content: string) => void,
  onTaskComplete: (content: string) => void,
}

export default function Task({ taskContent, hasDone, onDeleteTask, onTaskComplete}: ITaskProps) {

  const [status, setStatus] = useState<boolean>()
  
  function handleChangeStatus(event: ChangeEvent<HTMLInputElement>) {   
    setStatus(event.target.checked)     
  }
  function handleDeleteTask() {
    onDeleteTask(taskContent)    
  }
  function handleToggleTaskCompletion() {
    onTaskComplete(taskContent)
  }


  return (
    <div className={styles.task}>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"          
          onChange={handleChangeStatus}
          onClick ={handleToggleTaskCompletion}
          checked={hasDone}
        />
        {/* <span className={styles.checkbox} aria-hidden="true"></span> */}
        
      </label>

      <p className={status ? styles.taskContentDone : styles.taskContent}>{taskContent}</p>
      
      <button onClick={handleDeleteTask} title="Deletar task" >
        <Trash size={24} />
      </button>
    </div>
  );
}
