interface BackButtonProps {
    onBack: () => void;
}

export default function BackButton({ onBack }: BackButtonProps) {
    const handleClick = () => {
        onBack();
    };

    return (
        <button
            style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                color: '#666',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#333'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
            onClick={handleClick}
        >
            ←
        </button>
    );
}