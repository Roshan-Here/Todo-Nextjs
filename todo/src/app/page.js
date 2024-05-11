"use client";
import styles from "./page.module.css";
import AddTodo from './components/mainComponets/AddTodo';
import ListTodo from "./components/mainComponets/ListTodo";
import Navbar from './components/mainComponets/Navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <AddTodo/>
      <ListTodo/>
    </main>
  );
}
