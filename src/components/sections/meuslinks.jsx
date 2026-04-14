"use client";
import { useState } from "react";

const linksIniciais = [
  { nome: "nao", encurtado: "arurl.app/r/uHXm9D", original: "https://www.google.com/...", cliques: 0, ganhos: "R$ 0,00" },
  { nome: "bosta", encurtado: "arurl.app/r/vkvAAv", original: "https://www.google.com/...", cliques: 1, ganhos: "R$ 0,04" },
  { nome: "google", encurtado: "arurl.app/r/DQhnzU", original: "https://www.google.com/?hl=pt_BR", cliques: 2, ganhos: "R$ 0,08" },
  { nome: "sim", encurtado: "arurl.app/r/iyhAe9", original: "https://www.youtube.com/", cliques: 5, ganhos: "R$ 0,20" },
  { nome: "Youtube", encurtado: "arurl.app/r/abc123", original: "https://www.youtube.com/", cliques: 4, ganhos: "R$ 0,16" },
];

export function MeusLinks() {
  const [busca, setBusca] = useState("");

  const filtrados = linksIniciais.filter(l =>
    l.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="section-content">
      <h1 className="section-title">Meus Links</h1>
      <p className="section-subtitle">{linksIniciais.length} links criados</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar links..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
        />
      </div>

      <div className="links-lista">
        {filtrados.map((link, i) => (
          <div key={i} className="link-card">
            <div className="link-card-top">
              <div>
                <p className="link-nome">{link.nome}</p>
                <p className="link-url blue">{link.encurtado}</p>
                <p className="link-original">{link.original}</p>
              </div>
              <div className="link-acoes">
              </div>
            </div>
            <div className="link-footer">
              <span className="link-cliques">🖱 {link.cliques} cliques</span>
              <span className="link-ganho">{link.ganhos} ganhos</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}