
import phoneApps from './assets/mockup_phone_rifitas.png'
//import './App.css'
import './styles/layout.css';
import './styles/sections/inicio.css';
import "./styles/sections/apps.css";
import './styles/components/buttons.css';
import './styles/components/cards.css';
import './styles/sections/servicios.css';
import './styles/sections/nosotros.css';
import './styles/sections/contacto.css';
import './styles/responsive.css';

import Layout from './components/Layout';
import { appsData } from './data/appsData';



function App() {


  return (

    <Layout>
      
      <div id="inicio-seccion" className="seccion-inicio">
  <div className="inicio-texto">
    <h1>Creamos aplicaciones digitales que conectan ideas con resultados reales.</h1>
    <p>Desarrollamos productos propios y soluciones a medida para marcas que quieren crecer en el mundo digital.
    </p>
    <div className="botones-inicio">
      <a href="#apps-seccion" className="btn-solid">Ver nuestras apps</a>
      <a href="#contacto-seccion" className="btn-outline">Contáctanos</a>
    </div>
  </div>
  <img className="img-app-inicio" src={phoneApps} alt="Telefono imagen" />
</div>


      <div id="apps-seccion" className="seccion-apps">
        <div className="section-header">
        <span className="section-label">PORTFOLIO</span>
        <h2>Aplicaciones en producción</h2>
        <p>Explora nuestras aplicaciones en producción y descubre cómo transformamos ideas en soluciones digitales reales.</p>
        </div>
        
        <div className="app-card-grid">

          {appsData.slice(0, 4).map((app) => (
            // La "key" es esencial en React para las listas
            <div key={app.id} className="app-card">

              {/* 1. Contenedor Visual (la imagen) */}
              <div className="card-visual">
                <img
                  src={app.mockupImage} //LA IMAGEN DESDE TUS DATOS
                  alt={`Captura de pantalla de la app ${app.name} en un teléfono`}
                  className="app-mockup-img"
                />
              </div>

              {/* 2. Contenedor de Contenido */}
              <div className="card-content-area">
                <span className="category-tag">{app.category}</span>
                <div className="card-header">
                  <h3 className="app-title">{app.name}</h3>
                </div>

                <p className="app-description">{app.description}</p>

                <div className="card-footer-stats">
                   
                  <span>{app.downloads} descargas</span>
                </div>

                <div className="card-downloads">
                  <a href={app.playStoreLink} className="btn-download btn-google">Google Play</a>
                </div>


              </div>
            </div>
          ))}
        </div>

        {/* Botón de "Ver todas las apps" 
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <a href="#" className="btn-outline">Ver todas las aplicaciones</a>
        </div> */}
      </div>
          
      <div id="servicios-seccion" className="seccion-servicios">
        <div className="section-header">
        <span className="section-label">NUESTROS SERVICIOS</span>
        <h2>Impulsa tu crecimiento digital</h2>
        <p>Utilizamos tecnologías modernas para construir soluciones digitales escalables y eficientes.</p>
        </div>
        <div className="servicios-grid">
          <div className="servicio-card">
            <h3>Desarrollo aplicaciones móviles</h3>
            <p>Creamos aplicaciones móviles funcionales, intuitivas y orientadas a resolver problemas reales. Diseñamos experiencias centradas en el usuario, priorizando rendimiento, estabilidad y crecimiento a largo plazo.
Desde la idea inicial hasta la publicación, acompañamos cada etapa del proceso para convertir conceptos en productos digitales sólidos.</p>
          </div>
          <div className="servicio-card">
           <h3>Desarrollo web moderno</h3>
            <p>Diseñamos y desarrollamos soluciones web modernas, optimizadas y alineadas a los objetivos de cada proyecto. Creamos sitios y aplicaciones que combinan rendimiento, diseño estratégico y escalabilidad, ayudando a marcas y emprendimientos a fortalecer su presencia digital.</p>
          </div>
          <div className="servicio-card">
            <h3>Tecnologías y proyectos</h3>
            <p>Asesoramos y estructuramos proyectos tecnológicos desde su fase inicial, ayudando a definir arquitectura, funcionalidades y enfoque estratégico. Analizamos cada idea para seleccionar la mejor solución técnica, asegurando viabilidad, eficiencia y crecimiento sostenible.</p>
          </div>
        </div>
      </div>

      <div id="nosotros-seccion" className="seccion-nosotros">
  <div className="section-header">
        <span className="section-label">Quiénes somos</span>
        <h2>Construimos tecnología con propósito.</h2>
        </div>
  <div className="nosotros-contenido">
    <p>
      En CAMADI desarrollamos aplicaciones que nacen de ideas propias y evolucionan para resolver problemas reales. Creemos en la tecnología como una herramienta para simplificar la vida, conectar personas y generar impacto positivo.
      Hoy creamos nuestros propios productos. Mañana ayudaremos a marcas y emprendedores a construir los suyos.
    </p>
  </div>
</div>

      <div id="contacto-seccion" className="seccion-contacto">
   <div className="section-header">
        <span className="section-label">CONTACTO</span>
        <h2>¿Tienes un proyecto en mente? Hagámolo realidad.</h2>
        <p>Podemos ayudarte a diseñar la mejor solución tecnológica para tu negocio.</p>
        </div>
  <div className="contacto-grid">
    <div className="contacto-item">
      <h3>📧 Correo</h3>
      <a href="mailto:camadicontacto@gmail.com">camadicontacto@gmail.com</a>
    </div>
    <div className="contacto-item">
      <h3>📘 Facebook</h3>
      <a href="https://www.facebook.com/camadi.oficial/" target="_blank" rel="noopener noreferrer">CAMADI</a>
    </div>
  </div>
</div>

    </Layout>

  )
}

export default App
