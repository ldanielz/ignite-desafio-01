import { Trash, Circle, CheckCircle, PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import Task from "./Task";
import { ITaskProps } from "./Task";
import TaskEmpty from "./TaskEmpty";
import styles from './TaskList.module.css';



export default function TaskList() {

  const [tasks, setTasks] = useState<ITaskProps[]>([])
  const [newTaskText, setNewTaskText] = useState('')


  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks(state => [
      ...state,
      {
        taskContent: newTaskText,
        hasDone: false,
        onDeleteTask: deleteTask,
        onTaskComplete: toggleTaskCompletion,
      }
    ])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete: string) {

    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.taskContent !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }

  function toggleTaskCompletion(content: string) {
    const tasksUpdate = [...tasks]
    const taskIndex = tasks.findIndex(task => task.taskContent === content)
    tasksUpdate[taskIndex].hasDone = !tasksUpdate[taskIndex].hasDone
    setTasks(tasksUpdate)
  }

  let taskCounter = tasks.length
  let doneCounter = tasks.filter(task => task.hasDone === true).length;


  return (
    <div>
      <div className={styles.newTask}>
        <form onSubmit={handleCreateNewTask}>
          <input
            name="inputTask"
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            value={newTaskText}
            required
          />
          <button type="submit">
            Criar <PlusCircle size={16} />
          </button>
        </form>
      </div>
      {taskCounter === 0 ?
        <TaskEmpty /> :
        <div className={styles.tasklist}>
          <header className={styles.info}>
            <div className={styles.createdTasks}>
              <strong>Tarefas criadas</strong>
              <span className={styles.counter}>{taskCounter}</span>
            </div>
            <div className={styles.completedTasks}>
              <strong >Concluídas</strong>
              <span className={styles.counter}>{doneCounter} de {taskCounter}</span>
            </div>
          </header>

          {
            tasks.map((task => {
              return (
                <Task
                  key={task.taskContent}
                  taskContent={task.taskContent}
                  hasDone={task.hasDone}
                  onDeleteTask={deleteTask}
                  onTaskComplete={toggleTaskCompletion}
                />)
            }))
          }

        </div>
      }
    </div>
  );
}
