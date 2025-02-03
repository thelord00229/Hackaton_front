import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  return (
    <div className="register-container">
      <h2>Inscription</h2>
      <form>
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mot de passe" required />
        <button type="submit">S'inscrire</button>
      </form>
      <p>Déjà un compte ? <Link to="/">Se connecter</Link></p>
    </div>
  );
}

export default Register;
