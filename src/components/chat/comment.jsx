import styles from "./style.module.css"
import { Link } from "react-router-dom"

const Comment = (props) => {
    return(
        <div className={styles.wrapper}>
            <label>Напишите текст</label>
            <input value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)} />
            <button className={styles.comm} onClick={props.changeChat}>Отправить</button>
            <button className={styles.comm} onClick={() => props.setChatData([])}>Удалить</button>

            {props.showDialogReg &&(
                <div>
                    Вы не авторизировались, перейдите по <Link to="/">ссылке</Link>
                </div>
            )}
        </div>
    )
}

export default Comment