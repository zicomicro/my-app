'use client'
import { useEffect,useMemo,useRef,useState } from "react";


const calculatIncom = () => {
  let number = 10;
  for (let i = 0; i< 10000; i++){
    number += i;
  }
  console.log("Calculatign ....");
  return number;

}

function Home() {


const [counter , setCounter] = useState<number>(0);
const [shouldCalc , setCalc] = useState<boolean>(false);
const Incom = useMemo( () => calculatIncom(), [shouldCalc]);

console.log(Incom);
  const handelClick = () => {
    setCounter(counter + 1);
    if(counter === 10){
      setCalc(true);
    }
  }

  
  let hidenDescription = true;
  return (
    <div>
      <main>
       <h1>Home</h1>
      
       <div>Counter {counter}</div>
       <button onClick={handelClick}>Click To Increment</button>

      </main>
    </div>
  );
}

export default Home;
