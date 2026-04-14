"use client";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const historico = [
  { valor: "R$ 0,48", chave: "09675375337", status: "Pendente", data: "13/04/2026" },
];

export function Saque() {
  const [valor, setValor] = useState("");
  const [chave, setChave] = useState("");

  return (
    <div className="section-content">
      <h1 className="section-title">Saque</h1>
      <p className="section-subtitle">Solicite o saque dos seus ganhos via PIX</p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon green"><FaDollarSign size={20} /></div>
          <div className="stat-value">R$ 0,80</div>
          <div className="stat-label">GANHOS TOTAIS</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue"><MdOutlineAccountBalanceWallet size={20} /></div>
          <div className="stat-value">R$ 0,32</div>
          <div className="stat-label">SALDO DISPONÍVEL</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon yellow"><FiClock size={20} /></div>
          <div className="stat-value">R$ 0,48</div>
          <div className="stat-label">TOTAL SACADO</div>
        </div>
      </div>

      <div className="form-card">
        <h3>Solicitar Saque</h3>
        <div className="form-row">
          <div className="form-group">
            <label>VALOR (R$)</label>
            <input
              type="number"
              placeholder="0.00"
              value={valor}
              onChange={e => setValor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>CHAVE PIX</label>
            <input
              type="text"
              placeholder="CPF, e-mail, telefone ou chave aleatória"
              value={chave}
              onChange={e => setChave(e.target.value)}
            />
          </div>
        </div>
        <button className="btn-primary">Solicitar Saque</button>
      </div>

      <div className="form-card">
        <h3>Histórico de Saques</h3>
        {historico.map((item, i) => (
          <div key={i} className="historico-row">
            <div className="historico-left">
              <div className="stat-icon yellow"><FiClock size={16} /></div>
              <div>
                <p className="historico-valor">{item.valor}</p>
                <p className="historico-chave">{item.chave}</p>
              </div>
            </div>
            <div className="historico-right">
              <span className="badge-pendente">{item.status}</span>
              <p className="historico-data">{item.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}