export default function Loading() {
    return (
        <div className="route-loading">
            <div className="route-loading-spinner"></div>
            <style>{`
                .route-loading {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(180deg, #ffffff 0%, #f6fbfc 100%);
                }
                .route-loading-spinner {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    border: 4px solid rgba(0, 194, 203, 0.18);
                    border-top-color: #00c2cb;
                    animation: spin 0.8s linear infinite;
                }
                @keyframes spin { to { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
}
