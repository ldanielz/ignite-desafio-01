import Header from "./components/Header";
import styles from "./App.module.css"
import TaskList from "./components/TaskList";

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TaskList />        
      </div>
    </div>
  )
}

