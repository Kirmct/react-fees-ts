import { format, formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from "../Avatar/Avatar"
import { Comment } from "../Comment/Comment"
import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

interface Author {
  name: string,
  role: string,
  avatar_url: string,
}

interface Content{
  type: 'paragraph' | 'link',
  content: string,
}

interface PostsProps {
  author: Author,
  publishedAt: Date,
  content: Content[],
}

export const Post = ({author, publishedAt,  content} : PostsProps) => { 

  const publishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [comments, setComments] = useState(["Post muito massa!!"]);
  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault(); 

    setComments(prevComments => [...prevComments, newCommentText]);
    setNewCommentText("");
  }

  function handeNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(comment : string) {
    //imutalbilidade -> variaveis nao sofrem mutacao, nos criamos um novo valor
    //um novo espaco na memoria
    //criamos uma nova informacao e colocamos ela num estado
    const newCommentList = comments.filter(c => c !== comment)
    setComments([...newCommentList]);
  }

  const isNewCommentInputEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}> 
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
          {content.map(line => {
           if (line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
           } else if (line.type === 'link'){
            return <p key={line.content}> <a  href="#">{line.content}</a> </p>
           }
          })}
      </div>
      
      <form className={styles.comentarios} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>   

        <textarea 
          name="comment"
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handeNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentInputEmpty}>
              Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments && 
          comments.map(comment => (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
        ))}
      </div>
    </article>
  )
}
