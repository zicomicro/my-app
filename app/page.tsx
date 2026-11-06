import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header"
import Description from "@/components/Description";
import style from "./page.module.css";
import Link from "next/link";



function Home() {

  console.log(style.section);
  let hidenDescription = true;
  return (
    <div>
      <main className={style.section}>
        <Header text="Hello From Main  " />
        { hidenDescription && <Description/>}

        <Link href="/about">Go to About</Link>
      </main>
    </div>
  );
}

export default Home;
