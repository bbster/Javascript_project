import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <span>Ezenbucks</span>
        </Link>
      </nav>
      <p className="subtitle">안녕하세요. Ezenbucks입니다.</p>
    </>
  );
}
