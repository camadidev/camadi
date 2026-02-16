import logoCamadi from '../assets/logo_horizontal_camadi.png'

const Header = () => {
  return (
    <header className="header-container"> 
      <img className="header-logo" src={logoCamadi} alt="LOGO CAMADI" />
     
      <nav className="barra-navegacion">
        <a href="#inicio-seccion">Inicio</a>
        <a href="#apps-seccion">Nuestras aplicaciones</a>
        <a href="#servicios-seccion">Servicios</a>
        <a href="#nosotros-seccion">Nosotros</a>
        <a href="#contacto-seccion">Contacto</a>
        <a className="btn-porfolio" href="#apps-seccion"><span>Portfolio</span></a>
      </nav>
    </header>
  );
};

export default Header;