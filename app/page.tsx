'use client'
import { useEffect,useState } from "react";



function Home() {


  const [counter , setCounter] = useState<number>(0);
  const [success , setSuccess] = useState<boolean>(false);

function handelClick () {
  setCounter(counter + 1);
  if(counter === 10) {
    setSuccess(true);
  }
}
useEffect (() =>{
  
    console.log("Event has been Triggered");
  
  
}, [success])
  
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
