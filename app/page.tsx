import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header"
import Description from "@/components/Description";


function Home() {
  return (
    <div>
      <main>
        <Header text="Hello From Main  " />
        <Description/>
      </main>
    </div>
  );
}

export default Home;
