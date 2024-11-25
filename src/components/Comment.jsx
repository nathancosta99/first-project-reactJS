import Avatar from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({content}){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/nathancosta99.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}> 
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Nathan Henrique</strong>
                            <time title='11 de maio às 10:40h' dateTime="2022-05-11 10:40:13">Cerca de 1h atrás </time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
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
 