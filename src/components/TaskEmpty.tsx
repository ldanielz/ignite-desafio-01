import { Clipboard } from 'phosphor-react';
import styles from './TaskEmpty.module.css';

export interface ITaskEmptyProps {
}

export default function TaskEmpty(props: ITaskEmptyProps) {
  return (
    <div className={styles.taskEmpty}>
      <Clipboard size={56} />
      <div className={styles.content}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
