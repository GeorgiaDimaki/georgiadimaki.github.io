import { Navbar } from './Navbar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Intentionally empty top part for spacing */}
        <Navbar />
    </aside>
  );
}