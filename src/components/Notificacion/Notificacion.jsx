import { useState } from 'react';
import './Notificacion.css';
import { BsCheckCircle } from "react-icons/bs";

const Notificacion = ({ message, onClose, color }) => {
    const [show, setShow] = useState(true);

    const Cerrar = () => {
        setShow(false);
        onClose();
    };

    return (
        <div className={`notification ${show ? 'show' : ''}`} style={{ backgroundColor: color }}>
            <div className="notification-content">
                <div className="notification-icons">
                    <BsCheckCircle className='notification-icon' />
                </div>
                <p>{message}</p>
                <button className="close-button" onClick={Cerrar}>X</button>
            </div>
        </div>
    );
};

export default Notificacion;