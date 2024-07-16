import './FormButton.css';

const FormButton = ({ type, label, onClick, disabled, buttonType }) => {
    return (
        <button
            type={type}
            className={`form-button ${buttonType}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default FormButton;
