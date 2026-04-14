"use client";

import { useState } from "react";
import styles from "@/app/styles/dashboard.css";
import { LeftBar } from "@/components/barra_lateral/left_bar";

import { Dashboard } from "@/components/sections/dashboard";
import { Estatisticas } from "@/components/sections/estatisticas";
import { Saque } from "@/components/sections/saque";
import { Configuracoes } from "@/components/sections/configuracoes";
import { MeusLinks } from "@/components/sections/meuslinks";

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