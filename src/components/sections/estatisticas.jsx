"use client";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { MdOutlineInsertLink } from "react-icons/md";
import { TbClick } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";
import { TrendingUp } from "lucide-react";

const top5 = [
  { nome: "google", cliques: 6 },
  { nome: "Youtube", cliques: 5 },
  { nome: "sim", cliques: 4 },
  { nome: "youtubee", cliques: 2 },
  { nome: "bosta", cliques: 1 },
];

const statusLinks = [{ name: "Ativos", value: 9 }];

export function Estatisticas() {
  return (
    <div className="section-content">
      <h1 className="section-title">Estatísticas</h1>
      <p className="section-subtitle">Análise detalhada dos seus links</p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue"><MdOutlineInsertLink size={20} /></div>
          <div className="stat-value">9</div>
          <div className="stat-label">TOTAL DE LINKS</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue"><TbClick size={20} /></div>
          <div className="stat-value">20</div>
          <div className="stat-label">TOTAL DE CLIQUES</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue"><TrendingUp size={20} /></div>
          <div className="stat-value">2.2</div>
          <div className="stat-label">MÉDIA POR LINK</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue"><FaDollarSign size={20} /></div>
          <div className="stat-value">R$ 0,80</div>
          <div className="stat-label">GANHOS TOTAIS</div>
          <div className="stat-sub blue">CPM R$ 40,00</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Top 5 Links</h3>
          <p className="chart-sub">Por número de cliques</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={top5} layout="vertical">
              <XAxis type="number" tick={{ fill: "#888", fontSize: 11 }} />
              <YAxis dataKey="nome" type="category" tick={{ fill: "#888", fontSize: 11 }} width={60} />
              <Tooltip contentStyle={{ background: "#1a1a2e", border: "none" }} />
              <Bar dataKey="cliques" fill="#2563eb" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Status dos Links</h3>
          <p className="chart-sub">Distribuição por status</p>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={statusLinks}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                dataKey="value"
              >
                <Cell fill="#2563eb" />
              </Pie>
              <Legend
                formatter={() => "Ativos: 9"}
                iconType="circle"
                iconSize={10}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}