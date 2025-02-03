import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/Login.css";

function Login() {
  return (
    <motion.div 
      className="login-container"
      initial={{ opacity: 0, y: -50 }} // Départ (invisible et un peu en haut)
      animate={{ opacity: 1, y: 0 }} // Animation d'apparition
      transition={{ duration: 0.8, ease: "easeOut" }} // Durée et effet
    >
      <h2>Connexion</h2>
      <motion.form 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mot de passe" required />
        <motion.button 
          whileHover={{ scale: 1.1 }} // Effet hover
          whileTap={{ scale: 0.9 }} // Effet au clic
          type="submit"
        >
          Se connecter
        </motion.button>
      </motion.form>
      <p>Pas encore inscrit ? <Link to="/register">Créer un compte</Link></p>
    </motion.div>
  );
}

export default Login;
