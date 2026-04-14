"use client";
import { useState } from "react";
import { FiSave } from "react-icons/fi";
import { MdOutlineInsertLink } from "react-icons/md";

export function Configuracoes() {
  const [form, setForm] = useState({
    publisherId: "",
    apiKey: "",
    lockerId: "",
    directLink: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="section-content">
      <h1 className="section-title">Configurações</h1>
      <p className="section-subtitle">Integração com OGAds</p>

      <div className="form-card">
        <div className="config-header">
          <div className="stat-icon blue"><MdOutlineInsertLink size={20} /></div>
          <div>
            <h3>Credenciais OGAds</h3>
            <p className="section-subtitle">Configure sua conta OGAds para monetizar os links</p>
          </div>
        </div>

        <div className="form-group">
          <label>PUBLISHER ID</label>
          <input
            name="publisherId"
            placeholder="Ex: 12345"
            value={form.publisherId}
            onChange={handleChange}
          />
          <span className="input-hint">Encontre em: OGAds → Painel → Publisher ID</span>
        </div>

        <div className="form-group">
          <label>API KEY</label>
          <input
            name="apiKey"
            placeholder="Sua API Key do OGAds"
            value={form.apiKey}
            onChange={handleChange}
          />
          <span className="input-hint">Encontre em: OGAds → Settings → API Key</span>
        </div>

        <div className="form-group">
          <label>LOCKER ID</label>
          <input
            name="lockerId"
            placeholder="ID do seu Content Locker"
            value={form.lockerId}
            onChange={handleChange}
          />
          <span className="input-hint">Encontre em: OGAds → Content Lockers → ID do locker</span>
        </div>

        <div className="form-group">
          <label>DIRECT LINK DO LOCKER ⭐</label>
          <input
            name="directLink"
            placeholder="https://www.locked1.com/cl.php?id=..."
            value={form.directLink}
            onChange={handleChange}
          />
          <span className="input-hint blue">
            OGAds → Content Lockers → clique no locker → "Direct Link" —{" "}
            <strong>use este campo para funcionar corretamente</strong>
          </span>
        </div>

        <button className="btn-primary">
          <FiSave />
          Salvar Credenciais
        </button>
      </div>
    </div>
  );
}