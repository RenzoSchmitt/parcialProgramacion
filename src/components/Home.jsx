import React from "react";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Vinube
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productividad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gameleros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Liquidaciones
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
                style={{ marginRight: '10px' }}
              >
                Buscar
              </button>
              <button
                className="btn btn-primary"
                style={{ width: '175px' }}
                onClick={() => signOut(auth)}
              >
                Cerrar Sesión
              </button>
            </form>
          </div>
        </div>
      </nav>
      <header
        className="bg-primary text-white text-center py-5"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/1920x1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <h1 className="display-4">Bienvenido a Vinube</h1>
          <p className="lead">La plataforma definitiva en gestión de Bodegas y Viñedos</p>
        </div>
      </header>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="/images/productividad.jpg"
                className="card-img-top"
                alt="Imagen de Productividad"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">Productividad</h5>
                <p className="card-text">Gestión de la productividad por día y por gamelero.</p>
                <a href="#" className="btn btn-primary mt-auto">
                  Ingresar
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="/images/gameleros.jpg"
                className="card-img-top"
                alt="Imagen de Gameleros"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">Gameleros</h5>
                <p className="card-text">Control y seguimiento de las labores de los gameleros.</p>
                <a href="#" className="btn btn-primary mt-auto">
                  Ingresar
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="/images/dinero.jpg"
                className="card-img-top"
                alt="Imagen de Dinero"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h5 className="card-title">Liquidaciones</h5>
                <p className="card-text">Información financiera y pago de sueldos.</p>
                <a href="#" className="btn btn-primary mt-auto">
                  Ingresar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
