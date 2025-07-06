import '../App.css';

function Home() {
  return (
    <main>
      <section className="hero">
        <h2 className="hero-title">SOBRE MÍ</h2>
        <img
          className="hero-image"
          src="/neofolder/IMG_2353.JPG"
          alt="Foto de Nereo Aranda"
          width="500"
          height="250"
        />
      </section>

      <section className="intro-text">
        <p>
          ¡Hola! Soy Nereo Aranda, estudiante de <strong>Ingeniería de Software</strong> en la Universidad de Colima.
          Me especializo en <strong>desarrollo web</strong> y <strong>programación de videojuegos</strong>. Me apasiona la programación, crear mundos digitales y aprender nuevas tecnologías.
        </p>
      </section>

      <section className="info-section about-section">
        <h2>¿Qué hago?</h2>
        <ul>
          <li>🎮 Aprendiz en Desarrollo de videojuegos</li>
          <li>🌐 Desarrollo web con HTML, CSS, JavaScript, React Y TypeScript</li>
          <li>🧠 Conocimientos en C++ y Go</li>
          <li>📚 Nivel de inglés: B1</li>
        </ul>
      </section>

      <section className="info-section how-to-section">
        <h2>Hobbies</h2>
        <ul>
          <li>🎮 Jugar videojuegos</li>
          <li>⚽ Jugar fútbol</li>
          <li>🏋️ Ir al gimnasio</li>
          <li>🏍️ Rodar en moto</li>
          <li>📷 Edición de imágenes y video</li>
          <li>🎧 Escuchar música</li>
        </ul>
      </section>
    </main>
  );
}

export default Home;