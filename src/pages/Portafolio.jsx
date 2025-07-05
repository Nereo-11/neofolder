import '../App.css';
function Portafolio() {
  return (
    <main className="portfolio-main">
      <section className="intro-text">
        <h2 className="section-title">Mis Proyectos</h2>
        <p>
          Estos son algunos de los proyectos en los que he trabajado como desarrollador web y de videojuegos.
        </p>
      </section>

      <section className="projects-container">
        <div className="project-card">
          <h3>Juego de Plataformas 2D</h3>
          <p>Videojuego desarrollado en Godot.</p>
          <a href="https://nereou.itch.io/its-me" target="_blank" rel="noopener noreferrer">
            Ver en Itch.io
          </a>
        </div>

        <div className="project-card">
          <h3>Portfolio Web</h3>
          <p>Mi sitio personal creado desde cero con HTML, CSS y JS.</p>
          <a href="https://github.com/Nereo-11/neofolder" target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>API en Golang</h3>
          <p>API RESTful desarrollada en Go, conectada a una base de datos MySQL.</p>
          <a href="https://github.com/Nereo-11/Go/tree/main/05-api-rest" target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </div>

        <div className="project-card-new">
          <h3>Prácticas en Bit All Force</h3>
          <p>
            Colaboré en el estudio de videojuegos <strong>Bit All Force</strong> en el proyecto <strong>Dark Tales From México</strong> como practicante por parte de la Universidad. Aprendí herramientas clave en desarrollo de videojuegos como Unity y Blender.
          </p>
        </div>
      </section>

      <section className="socials">
        <h2>Conéctate conmigo</h2>
        <ul>
          <li><a href="https://github.com/Nereo-11" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/nereo-uriel-aranda-peregrina-ba638b274/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://nereou.itch.io/" target="_blank" rel="noopener noreferrer">Itch.io</a></li>
          <li><a href="mailto:nereourielap@gmail.com">Correo</a></li>
          <li><a href="https://www.instagram.com/nereo_uriel/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </section>
    </main>
  );
}

export default Portafolio;