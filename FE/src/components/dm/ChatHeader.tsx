export default function ChatHeader() {
    return (
        <div
            style={{
                padding: '1rem',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#333',
            }}>메시지</h3>
            <button style={{
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
                onClick={() => window.dispatchEvent(new CustomEvent('setShowChat', { detail: false }))}>×</button>
        </div>
    )
}