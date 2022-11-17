import logo from '../assets/logoToDoList.svg'
import styles from './Header.module.css'

export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo ToDo List" />
    </header>
  );
}
