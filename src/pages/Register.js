import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/Register.css"; // Import du fichier CSS

function Register() {
  return (
    <motion.div 
      className="register-container"
      initial={{ opacity: 0, y: -50 }} // Animation d'apparition
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>Inscription</h2>
      <motion.form 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <input type="text" placeholder="Nom complet" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mot de passe" required />
        <motion.button 
          whileHover={{ scale: 1.1 }} // Animation hover
          whileTap={{ scale: 0.9 }} // Animation clic
          type="submit"
        >
          S'inscrire
        </motion.button>
      </motion.form>
      <p>Déjà un compte ? <Link to="/">Se connecter</Link></p>
    </motion.div>
  );
}

export default Register;
