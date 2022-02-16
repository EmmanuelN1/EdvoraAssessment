import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/Logo.png"
import Filter from "../components/Filter";
import Products from "../components/ProductsFeed";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Edvora Asssesment</title>
      </Head>

          <div className=" bg-zinc-800 flex flex-col lg:flex-row">
                  <Filter/>
                  <Products/>        
          </div>
          

      
     
    </div>
  );
}
