import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header"
import Description from "@/components/Description";


function Home() {

  let hidenDescription = true;
  return (
    <div>
      <main>
        <Header text="Hello From Main  " />
        { hidenDescription && <Description/>}
      </main>
    </div>
  );
}

export default Home;
