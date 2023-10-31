import { useState } from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";
import styles from "./style.module.css"

const Home = () => {
    const [user, setUser] = useLocalStorage('USER','')
    const [inputValue, setInputValue] = useState('')

    return(
        <div className={styles.home}>
            {user &&(
                <div>
                    <div>Добро пожаловать, {user}!</div>
                    <button className={styles.b} onClick={() => setUser('')}>Выйти</button>    
                </div>
            )}
            {!user &&(
                <div>
                    <label>Введите имя:</label>
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button className={styles.a} onClick={() => setUser(inputValue)}>Войти</button>
                </div>
            )}
        </div>
    )
}

export default Home