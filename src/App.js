import Button from "./Button";
import styles from './App.module.css'
import { useState , useEffect} from 'react'
function App(){
    const [counter,setValue] = useState(0)
    const [keyword,setKeyword]=useState("")
    const Click=()=> setValue((prev)=>prev+1)
    const onChange=(event)=> setKeyword(event.target.value)
    console.log("i run all the time");
    useEffect(()=>{
        console.log("I run only once.")//컴포넌트 내에서 몇몇 코드는 처음에만 render하고 rerender 안하도록 원할 수 있다.
    },[]);//useEffect(한번만 부르고 싶은 함수,배열)
    useEffect(()=>{
        if(keyword !== "" && keyword.length>5){//keyword값이 길이5이상 과 빈칸이 아닐때만 호출
            console.log("I run when 'keyword' changes",keyword)
        }
    },[keyword]);//keyword가 변화할때만 코드가 실행되도록 할 수 있다.
    useEffect(()=>{
        console.log("I run when 'counter' changes")        
    },[counter]);//counter가 변화할때만 코드 호출
    useEffect(()=>{
        console.log("I run when keywword &counter changes")        
    },[keyword,counter]);//keyword나 counter 중에 하나라도 바뀌면 호출
    return (
        <div>
            <input 
            value={keyword}
            onChange={onChange}
            type="text" 
            placeholder="Search here..." ></input>
            <h1 className={styles.title}>{counter}</h1>
            <button onClick={Click}>Click me</button>
            <Button text={'continue'}/>
        </div>
    )
}
export default App;