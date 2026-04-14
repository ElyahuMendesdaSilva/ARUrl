"use client";

import { useState } from "react";
import styles from "./styles/dashboard.css";
import { LeftBar } from "@/components/barra_lateral/left_bar";

import { Dashboard } from "@/components/sections/Dashboard";
import { MeusLinks } from "@/components/sections/MeusLinks";
import { Estatisticas } from "@/components/sections/Estatisticas";
import { Saque } from "@/components/sections/Saque";
import { Configuracoes } from "@/components/sections/Configuracoes";

const sections = [
  <Dashboard />,
  <MeusLinks />,
  <Estatisticas />,
  <Saque />,
  <Configuracoes />,
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="all">
      <LeftBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <hr style={{ borderColor: "#7777", height: "100%" }} />
      <section className="content">
        {sections[activeIndex]}
      </section>
    </main>
  );
}