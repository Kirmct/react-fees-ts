import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "../Avatar/Avatar"
import { useState } from "react"

interface CommentProps{
  content: string,
  onDeleteComment: (comment: string) => void,
}

export const Comment = ({ content, onDeleteComment}: CommentProps) => { 

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeCount(){
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
       <Avatar src="https://github.com/Kirmct.png" hasBorder={false}/>
     <div className={styles.commentBox}>
        <div className={styles.commentContent}>  
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kirmct de Abreu</strong>
              <time title="24 de maio de 2023" dateTime="2023-05-24">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24}/>
            </button>
            
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
     </div>
    </div>
  )
}
