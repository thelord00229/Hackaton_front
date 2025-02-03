import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css"; // Importation du CSS

function Login() {
  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
      </form>
      <p>Pas encore inscrit ? <Link to="/register">Créer un compte</Link></p>
    </div>
  );
}

export default Login;
