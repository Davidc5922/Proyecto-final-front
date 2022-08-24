import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

export default function Dashboard() {
    return (
        <div>
            <h3>Este es del lado del administrador</h3>
            <div>
                <div>
                    <h2>GAED.JM</h2>
                </div>
                <div>
                    <Link to='/CreateProduct' className="nav-item mx-3 mx-lg-2" style={{ textDecoration: 'none' }} >
                        <p className={`nav-link mb-0 text-start text-sm-center`} style={{ color: 'white' }} aria-current="page">Agregar producto</p>
                    </Link>
                </div>
                <div>
                    <button>Usuarios info</button>
                </div>
            </div>
        </div>
    )
}