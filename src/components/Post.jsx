import { Comment } from './Comment';
import styles from './Post.module.css';

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/luan4560.png"/>
          <div className={styles.authorInfo}>
            <strong>Luan Nascimento</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="12 de agosto as 18:14" dateTime='2022-08-12 18:14:30'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz 
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto </a>{' '}
          <a href="">#nlw #rocketseat</a>{' '}
          <a href="">#rocketseat</a>{' '}
          </p>
      </div>
      
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'> Publicar </button>
        </footer>
          
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}