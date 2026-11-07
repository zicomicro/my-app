'use client'
import { useEffect,useRef,useState } from "react";



function Home() {


  const inputRef = useRef<HTMLInputElement>(null);

  const handelClick = () => {
    if(inputRef.current)
    inputRef.current.focus();
  }

  function getText(e) {
    console.log(e.target.value);

  }
  
  let hidenDescription = true;
  return (
    <div>
      <main>
       <h1>Home</h1>
      
       <input ref={inputRef} onChange={getText} />
       <button onClick={handelClick}>Click To Increment</button>

      </main>
    </div>
  );
}

export default Home;
