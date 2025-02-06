import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="dashboard-header">
        <h1>Bienvenue sur la page des projets étudiants de l'IFRI !</h1>
        <p>
          Découvrez les projets innovants de nos étudiants, reflets de leur
          créativité et de leur savoir-faire.
        </p>
      </header>

      {/* Navigation Section */}
      <nav className="dashboard-nav">
        <ul>
          <li className="nav-item">Accueil</li>
          <li className="nav-item">Contacts</li>
          <li className="nav-item">À propos</li>
          <li className="nav-item">Profil</li>
          <button className="logout-button">Déconnexion</button>
        </ul>
      </nav>

      {/* Filter Section */}
      <div className="dashboard-filter">
        <input
          type="text"
          className="search-bar"
          placeholder="🔍 Rechercher un projet..."
        />
        <button className="filter-button">Filtrer</button>
      </div>

      {/* Projects Section */}
      <section className="dashboard-projects">
        {[
          {
            title: "Web Développement",
            description:
              "Une boutique en ligne innovante avec une expérience utilisateur améliorée.",
            img: "https://via.placeholder.com/300x150",
          },
          {
            title: "Système Embarqué",
            description:
              "Un système embarqué intelligent pour des solutions technologiques avancées.",
            img: "https://via.placeholder.com/300x150",
          },
          {
            title: "Cybersécurité",
            description:
              "Des solutions avancées pour sécuriser les données sensibles et protéger les systèmes.",
            img: "https://via.placeholder.com/300x150",
          },
        ].map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button className="view-details">Voir Détails</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
