import { useEffect, useState } from "react";
import styles from './style.module.css'

const TestApi = () =>{
    const[teamData, setTeamData] = useState([])
    const[isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        const url = "https://free-nba.p.rapidapi.com/teams?page=0";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
                "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
            },
        };
    
    
        fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
            setTeamData(res.data)
            setIsLoad(false)
        })
    }, [])

    return(
        <div className={styles.container}>
            <h1 className={styles.h1}>Команды</h1>
            {isLoad &&<div>Загрузка данных...</div>}
            {teamData.map((el,i) => {
                return(
                    <div key={el.id}>
                        {i + 1}.{el.name}
                        <img
                        alt=""
                        src="https://avatars.mds.yandex.net/i?id=e51c0bb71789882fb6fc9e3608f8c47904342b10-7593510-images-thumbs&n=13&exp=1"
                        style={{ width: "15px", height: "15px"}}
                        onClick={()=> {
                            setTeamData(teamData.filter((filterElement) => el.id!== filterElement.id)
                            )
                        }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default TestApi

