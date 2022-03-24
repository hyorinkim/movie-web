import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function Hello() {
  // function destroyed(){//Hello component가 사라질때 호출되는 함수
  //     console.log("destroyed")
  // }
  // function created(){// Hello component가 생성될때 호출되는 함수
  //     console.log("created");
  //     return destroyed//cleanup 함수
  // }

  // useEffect(created,[])

  //작성 2가지 방법
  // useEffect(function(){
  //     console.log("hi");
  //     return function(){
  //         console.log("bye")
  //     }
  // },[])//잘 안 쓰는 방식

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []); //보통 쓰는 방식, 짧은 방식
  return <h1> Hello</h1>;
}
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");

    console.log(toDos);
  };

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add to Do</button>
      </form>
      <hr></hr>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
function App2() {
  const [showing, setShowing] = useState(false);
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setShowing((prev) => !prev);
  const Click = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");
  useEffect(() => {
    console.log("I run only once."); //컴포넌트 내에서 몇몇 코드는 처음에만 render하고 rerender 안하도록 원할 수 있다.
  }, []); //useEffect(한번만 부르고 싶은 함수,배열)
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      //keyword값이 길이5이상 과 빈칸이 아닐때만 호출
      console.log("I run when 'keyword' changes", keyword);
    }
  }, [keyword]); //keyword가 변화할때만 코드가 실행되도록 할 수 있다.
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]); //counter가 변화할때만 코드 호출
  useEffect(() => {
    console.log("I run when keywword &counter changes");
  }, [keyword, counter]); //keyword나 counter 중에 하나라도 바뀌면 호출

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>

      <br></br>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={Click}>Click me</button>
      <Button text={"continue"} />
    </div>
  );
}

export default App;
