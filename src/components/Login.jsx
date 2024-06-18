import React, { useState } from "react";
import Imagen from "../assets/vectorlogin.avif";
import ImageProfile from "../assets/mclovin.jpg";

import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

const Login = () => {
    const [registrando, setRegistrando] = useState(false);
    const [additionalData, setAdditionalData] = useState({
        nombre: '',
        apellido: '',
        telefono: ''
    });

    const functAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contrasena = e.target.password.value;
        const { nombre, apellido, telefono } = additionalData;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contrasena);
                console.log("Datos adicionales: ", nombre, apellido, telefono);
            } catch (error) {
                alert("Asegúrese de que la contraseña tenga más de 8 caracteres");
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contrasena);
            } catch (error) {
                alert("El correo o la contraseña son incorrectos");
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdditionalData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={ImageProfile} alt="" className="estilo-profile" />
                            <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder="Ingresar Email" className="cajatexto" name="email" id="email" />
                                <input type="password" placeholder="Ingresar Contraseña" className="cajatexto" name="password" id="password" />
                                {registrando && (
                                    <>
                                        <input type="text" placeholder="Ingresar Nombre" className="cajatexto" name="nombre" value={additionalData.nombre} onChange={handleInputChange} />
                                        <input type="text" placeholder="Ingresar Apellido" className="cajatexto" name="apellido" value={additionalData.apellido} onChange={handleInputChange} />
                                        <input type="text" placeholder="Ingresar Teléfono" className="cajatexto" name="telefono" value={additionalData.telefono} onChange={handleInputChange} />
                                    </>
                                )}
                                <button className="btnform">{registrando ? "Regístrate" : "Inicia Sesión"}</button>
                            </form>
                            <h4 className="texto">
                                {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
                                <button className="btnswitch" onClick={() => setRegistrando(!registrando)}>
                                    {registrando ? "Inicia Sesión" : "Regístrate"}
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <img src={Imagen} alt="" className="tamano-imagen" />
                </div>
            </div>
        </div>
    );
};

export default Login;
