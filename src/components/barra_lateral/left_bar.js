"use client";

import "@/app/styles/components/leftbar.css";
import Link from "next/link";

import { MdOutlineInsertLink, MdOutlineDashboard } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { LuWalletMinimal } from "react-icons/lu";
import { IoSettingsOutline, IoAddOutline } from "react-icons/io5";

export function LeftBar({ activeIndex, setActiveIndex }) {
  return (
    <header className="leftbar">
      <div className="logo">
        <span className="span-c-link-logo-svg">
          <MdOutlineInsertLink />
        </span>
        <h1>
          <span style={{ color: "white" }}>AR</span>
          <span style={{ color: "blue" }}>url</span>
        </h1>
      </div>
      <hr />
      <div className="nav-bar">
        <nav>
          <ul>
            <li
              className={[activeIndex === 0 ? "active" : "", "nav-item"].join(" ")}
              onClick={() => setActiveIndex(0)}
            >
              <MdOutlineDashboard />
              <span>Dashboard</span>
            </li>
            <li
              className={[activeIndex === 1 ? "active" : "", "nav-item"].join(" ")}
              onClick={() => setActiveIndex(1)}
            >
              <MdOutlineInsertLink />
              <span>Meus Links</span>
            </li>
            <li
              className={[activeIndex === 2 ? "active" : "", "nav-item"].join(" ")}
              onClick={() => setActiveIndex(2)}
            >
              <ImStatsDots />
              <span>Estatísticas</span>
            </li>
            <li
              className={[activeIndex === 3 ? "active" : "", "nav-item"].join(" ")}
              onClick={() => setActiveIndex(3)}
            >
              <LuWalletMinimal />
              <span>Saque</span>
            </li>
            <li
              className={[activeIndex === 4 ? "active" : "", "nav-item"].join(" ")}
              onClick={() => setActiveIndex(4)}
            >
              <IoSettingsOutline />
              <span>Configurações</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bottom-div-button-create">
        <button
          className="new_link_user_button"
          onClick={() => setActiveIndex(1)}
        >
          <IoAddOutline />
          Criar Link
        </button>
      </div>
    </header>
  );
}