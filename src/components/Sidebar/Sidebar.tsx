import { PencilLine } from "@phosphor-icons/react"

import styles from "./Sidebar.module.css"
import { Avatar } from "../Avatar/Avatar"

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1684871432092-971c2c49a75d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" alt="" 
      />

      <div className={styles.profile}>
        <div className={styles.boxAvatar}>
          <Avatar src="https://github.com/Kirmct.png"/>
        </div>
        <strong>Kirmct de Abreu</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
