import { useState } from 'react';
import './Categoria.css';
import Card from '../Card/Card';
import Notificacion from '../Notificacion/Notificacion';
import ConfirmacionDialog from '../ConfirmacionDialog/ConfirmacionDialog';

const Categoria = ({ datos, cards, onCardClick, onCardDelete, onCardEdit }) => {
    const { primaryColor, name } = datos;
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [cardToDelete, setCardToDelete] = useState(null);

    const handleDelete = (cardId, cardTitle) => {
        setCardToDelete({ id: cardId, title: cardTitle });
        setShowConfirmation(true);
    };

    const confirmDelete = () => {
        if (cardToDelete) {
            onCardDelete(cardToDelete.id);
            setNotificationMessage(`"${cardToDelete.title}" eliminado correctamente.`);
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
                setNotificationMessage('');
            }, 3000);
            setShowConfirmation(false);
            setCardToDelete(null);
        }
    };

    const cancelDelete = () => {
        setShowConfirmation(false);
        setCardToDelete(null);
    };

    return (
        <>
            {showNotification && <Notificacion message={notificationMessage} onClose={() => setShowNotification(false)} />}
            {showConfirmation && (
                <ConfirmacionDialog 
                    message={`¿Estás seguro de que deseas eliminar "${cardToDelete?.title}" ?`}
                    title={cardToDelete?.title}
                    primaryColor={primaryColor}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
            {cards && cards.length > 0 && (
                <section className="category">
                    <h3 className='category-title' style={{ backgroundColor: primaryColor }}>{name}</h3>
                    <div className="card__container">
                        {cards.map((card) => (
                            <Card 
                                datos={card} 
                                key={card.id}
                                primaryColor={primaryColor}
                                onClick={() => onCardClick(card)}
                                onDelete={() => handleDelete(card.id, card.title)}
                                onEdit={() => onCardEdit(card)}
                            />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default Categoria;
