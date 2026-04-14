"use client";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { MdOutlineInsertLink } from "react-icons/md";
import { TbClick } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";
import { TrendingUp } from "lucide-react";

const clicksData = [
  { dia: "16 mar", cliques: 0 }, { dia: "19 mar", cliques: 0 },
  { dia: "22 mar", cliques: 0 }, { dia: "25 mar", cliques: 0 },
  { dia: "28 mar", cliques: 0 }, { dia: "31 mar", cliques: 0 },
  { dia: "03 abr", cliques: 2 }, { dia: "06 abr", cliques: 1 },
  { dia: "09 abr", cliques: 3 }, { dia: "14 abr", cliques: 10 },
];

const linksData = [
  { dia: "16 mar", links: 0 }, { dia: "19 mar", links: 0 },
  { dia: "22 mar", links: 0 }, { dia: "25 mar", links: 0 },
  { dia: "28 mar", links: 0 }, { dia: "31 mar", links: 0 },
  { dia: "03 abr", links: 0 }, { dia: "06 abr", links: 1 },
  { dia: "09 abr", links: 2 }, { dia: "14 abr", links: 4 },
];

const linksRecentes = [
  { nome: "nao", url: "arurl.app/r/uHXm9D", cliques: 0, ganhos: "R$ 0,00" },
  { nome: "bosta", url: "arurl.app/r/vkvAAv", cliques: 1, ganhos: "R$ 0,04" },
  { nome: "google", url: "arurl.app/r/DQhnzU", cliques: 2, ganhos: "R$ 0,08" },
];

export function Dashboard() {
  return (
    <div className="section-content">
      <h1 className="section-title">Dashboard</h1>
      <p className="section-subtitle">Visão geral dos seus links</p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue"><MdOutlineInsertLink size={20} /></div>
          <div className="stat-value">9</div>
          <div className="stat-label">TOTAL DE LINKS</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue"><TbClick size={20} /></div>
          <div className="stat-value">16</div>
          <div className="stat-label">CLIQUES DO MÊS</div>
          <div className="stat-sub blue">18 total</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue"><FaDollarSign size={20} /></div>
          <div className="stat-value">R$ 0,64</div>
          <div className="stat-label">GANHOS DO MÊS</div>
          <div className="stat-sub blue">CPM R$ 40,00</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue"><TrendingUp size={20} /></div>
          <div className="stat-value">R$ 0,64</div>
          <div className="stat-label">GANHOS TOTAIS</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Cliques por Dia</h3>
          <p className="chart-sub">esse mês</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={clicksData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="dia" tick={{ fill: "#888", fontSize: 11 }} />
              <YAxis tick={{ fill: "#888", fontSize: 11 }} />
              <Tooltip contentStyle={{ background: "#1a1a2e", border: "none" }} />
              <Line type="monotone" dataKey="cliques" stroke="#2563eb" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Links Criados</h3>
          <p className="chart-sub">esse mês</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={linksData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="dia" tick={{ fill: "#888", fontSize: 11 }} />
              <YAxis tick={{ fill: "#888", fontSize: 11 }} />
              <Tooltip contentStyle={{ background: "#1a1a2e", border: "none" }} />
              <Bar dataKey="links" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="recent-card">
        <div className="recent-header">
          <h3>Links Recentes</h3>
          <span className="ver-todos">Ver todos →</span>
        </div>
        {linksRecentes.map((link, i) => (
          <div key={i} className="link-row">
            <div>
              <p className="link-nome">{link.nome}</p>
              <p className="link-url">{link.url}</p>
            </div>
            <div className="link-stats">
              <span>🖱 {link.cliques} cliques</span>
              <span className="link-ganho">{link.ganhos} ganhos</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}