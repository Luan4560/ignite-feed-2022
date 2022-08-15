import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/luan4560.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luan Nascimento</strong>
              <time title="12 de agosto as 18:14" dateTime='2022-08-12 18:14:30'>
               Cerda de 1h atrás
              </time>
            </div>

             <button title="Deletar comentário">
                <Trash size={24}/>
             </button>
          </header>

          <p>Muito bom Devon, parabéns 😯</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}