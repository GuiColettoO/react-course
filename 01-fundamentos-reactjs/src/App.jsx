import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.modules.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </div>
  );
}
