import { useState } from "react"

function Detective(){

    const [sherlock, setSherlock] = useState('психопат')


    const handlerClick = () =>{
        setSherlock('высокоактивный социопат')
    }

    return(
        <div>
            Шерлок - {sherlock}
            
            <button onClick={handlerClick}>
                УЗНАТЬ ПРАВДУ
            </button>

        </div>
        
    )
}
export default Detective