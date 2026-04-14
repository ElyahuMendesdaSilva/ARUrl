import Image from "next/image";
import styles from "./styles/dashboard.css";
import { LeftBar } from "@/components/barra_lateral/left_bar";


export default function Home() {
  return (
    <main className="all">
      <LeftBar />
      <hr style={{borderColor:"#7777",height:"100%"}}></hr>
      <section className="content">
        <h1>Dashboard</h1>
      </section>
    </main>
  );
}
