import Button from "./Button";
import styles from './App.module.css'
import { useState} from 'react'
function App(){
    const [counter,setValue] = useState(0)

    const Click=()=>{
        console.log('call an api')
        setValue((prev)=>prev+1)
    }
    return (
        <div>
            <h1 className={styles.title}>{counter}</h1>
            <button onClick={Click}>Click me</button>
            <Button text={'continue'}/>
        </div>
    )
}
export default App;