import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export const Comment = ({content , onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar  
        hasBorder={false}
        src="https://github.com/luan4560.png" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luan Nascimento</strong>
              <time title="12 de agosto as 18:14" dateTime='2022-08-12 18:14:30'>
               Cerda de 1h atrás
              </time>
            </div>

             <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24}/>
             </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}